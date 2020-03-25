import Country from '@/classes/country'
import { extractTuples, stripQuotes } from './csv-helper'

export enum MODE {
  CURRENT_CASES = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv',
  DEATHS = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv',
}
export default class COVIDTimeSeries {
    private COUNTRY_COLUMN_NAME = 'Country/Region'
    private SUB_COUNTRY_COLUMN_NAME = 'Province/State'
    private NON_DATE_COLUMNS = ['Province/State', 'Country/Region', 'Lat', 'Long']
    private NON_DATE_COLUMN_INDEXES: number[] = []
    private columnsByName: {[key: string]: number} = {}
    private columns: string[] = []
    private rows: string[] = []
    private countries: {[key: string]: Country} = {}
    private rawCSV = ''
    private downloadUrl: MODE = MODE.CURRENT_CASES

    constructor (downloadUrl?: MODE) {
      if (downloadUrl) {
        this.downloadUrl = downloadUrl
      }
    }

    init = async () => {
      this.rawCSV = await this.getTimeSeries()
      this.parseRows()
      this.parseColumnNames()
      this.parseCountries()
      this.fixMisparsedCountryNames()
    }

    getCountries = () => {
      return this.countries
    }

    getCountry = (country: string) => {
      return this.countries[country]
    }

    getCountryNames = () => {
      return Object.keys(this.countries)
    }

    fixMisparsedCountryNames = () => {
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

    private getTimeSeries = async () => {
      const response = await fetch(this.downloadUrl, { method: 'GET' })
      return response.text()
    }

    private parseRows = () => {
      this.rows = this.rawCSV.split('\n')
    }

    private parseColumnNames = () => {
      const splitColumns = extractTuples(this.rows[0])
      splitColumns.forEach((column, index) => {
        const cleanedColumnName = stripQuotes(column).trim()
        this.columnsByName[cleanedColumnName] = index
        this.columns.push(cleanedColumnName)

        if (this.NON_DATE_COLUMNS.indexOf(cleanedColumnName) > -1) {
          this.NON_DATE_COLUMN_INDEXES.push(index)
        }
      })
    }

    private parseCountries = () => {
      const countryRegionColumnIndex = this.columnsByName[this.COUNTRY_COLUMN_NAME]
      const subRegionColumnIndex = this.columnsByName[this.SUB_COUNTRY_COLUMN_NAME]

      this.rows.forEach((row, index) => {
        // Skip the first row of column names
        if (index > 0) {
          const splitRow = extractTuples(row)
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
