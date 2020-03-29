import COVIDTimeSeries from '@/classes/data-retrievers/covid-timeseries'
import { extractTuples } from '@/utils/csv-helper'
import Country from '../region/country'

export enum MODE {
    CURRENT_CASES = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv',
    DEATHS = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv',
  }

export default class JohnsHopkinsTimeSeries extends COVIDTimeSeries implements COVIDTimeSeries {
  constructor (downloadUrl: MODE) {
    super(downloadUrl, 'Province/State', ['Province/State', 'Country/Region', 'Lat', 'Long'], 'Country/Region')
  }

  fixMisparsedData () {
    const SOUTH_KOREA_INDEX = '"Korea, South"'
    const southKorea = this.countries[SOUTH_KOREA_INDEX]
    this.countries['South Korea'] = southKorea
    delete this.countries[SOUTH_KOREA_INDEX]

    const BAHAMAS_INDEX = '"Bahamas, The"'
    const bahamas = this.countries[BAHAMAS_INDEX]
    this.countries.Bahamas = bahamas
    delete this.countries[BAHAMAS_INDEX]

    const GAMBIA_INDEX = '"Gambia, The"'
    const gambia = this.countries[GAMBIA_INDEX]
    this.countries.Gambia = gambia
    delete this.countries[GAMBIA_INDEX]
    delete this.countries.undefined
  }

  parseCountryData () {
    const countryRegionColumnIndex = this.columnsByName[this.COUNTRY_COLUMN_NAME as string]
    const subRegionColumnIndex = this.columnsByName[this.SUB_REGION_COLUMN_NAME]

    this.rows.forEach((row, index) => {
      // Skip the first row of column names
      if (index > 0) {
        const splitRow = extractTuples(row)

        // If the incoming CSV has a column for the country, use it, otherwise use the default country name provided
        const rowCountry = splitRow[countryRegionColumnIndex]
        const rowSubRegion = splitRow[subRegionColumnIndex]

        if (this.countries[rowCountry] === undefined) {
          this.countries[rowCountry] = new Country(rowCountry)
        }

        const country = this.countries[rowCountry]
        // Date => count container
        const rowObject: {[key: string]: number} = {}
        splitRow.forEach((rowColumnValue, index) => {
          if (this.NON_DATE_COLUMN_INDEXES.indexOf(index) === -1) {
            const date = this.columns[index]

            // Create a row object consisting of dates and numbers: {"1/1/20": "15"}
            const rowObjectValue = parseInt(rowColumnValue)
            if (rowObjectValue && !isNaN(rowObjectValue)) {
              rowObject[date] = parseInt(rowColumnValue)
            }
          }
        })

        country.pushRow(rowSubRegion, rowObject)
      }
    })
  }
}
