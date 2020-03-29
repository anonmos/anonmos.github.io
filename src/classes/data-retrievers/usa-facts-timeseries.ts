import COVIDTimeSeries from '@/classes/data-retrievers/covid-timeseries'
import { extractTuples } from '@/utils/csv-helper'
import Country from '../region/country'

export enum MODE {
    CURRENT_CASES = 'https://usafactsstatic.blob.core.windows.net/public/data/covid-19/covid_confirmed_usafacts.csv',
    DEATHS = 'https://usafactsstatic.blob.core.windows.net/public/data/covid-19/covid_deaths_usafacts.csv',
  }

export default class UsaFactsTimeSeries extends COVIDTimeSeries implements COVIDTimeSeries {
  private COUNTY_COLUMN_NAME = 'County Name'
  constructor (downloadUrl: MODE) {
    super(downloadUrl, 'State', ['countyFIPS', 'County Name', 'State', 'stateFIPS'], undefined, 'US')
  }

  fixMisparsedData () {
    // Not implemented
  }

  parseCountryData () {
    this.rows.forEach((row, index) => {
      // Skip the first row of column names
      if (index > 0) {
        const splitRow = extractTuples(row)

        const rowCountry = this.DEFAULT_COUNTRY_NAME as string
        const rowState = splitRow[this.columnsByName[this.SUB_REGION_COLUMN_NAME]]
        const rowCounty = splitRow[this.columnsByName[this.COUNTY_COLUMN_NAME]]

        // Country parser consumes counties in a `County, State_Abbreviation` format (e.g. San Francisco County, CA)
        const rowSubRegion = `${rowCounty}, ${rowState}`

        if (this.countries[rowCountry] === undefined) {
          this.countries[rowCountry] = new Country(rowCountry)
        }

        const country = this.countries[rowCountry]
        // Date => count container
        splitRow.forEach((rowColumnValue, index) => {
          if (this.NON_DATE_COLUMN_INDEXES.indexOf(index) === -1) {
            const rowObject: {[key: string]: number} = {}
            const date = this.columns[index]

            // Create a row object consisting of dates and numbers: {"1/1/20": "15"}
            const rowObjectValue = parseInt(rowColumnValue)
            if (rowObjectValue !== undefined && !isNaN(rowObjectValue)) {
              rowObject[date] = parseInt(rowColumnValue)
            }

            country.pushRow(rowSubRegion, rowObject)
          }
        })
      }
    })
  }
}
