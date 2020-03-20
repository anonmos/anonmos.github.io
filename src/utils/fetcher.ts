import Country from '@/classes/country'

export default class COVIDTimeSeries {
    private CSV_URL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv'
    private COUNTRY_COLUMN_NAME = 'Country/Region'
    private NON_DATE_COLUMNS = ['Province/State', 'Country/Region', 'Lat', 'Long']
    private NON_DATE_COLUMN_INDEXES: number[] = []
    private AVAILABLE_DATES: string[] = []
    private columnsByName: {[key: string]: number} = {}
    private columns: string[] = []
    private rows: string[] = []
    private countries: {[key: string]: Country} = {}
    private rawCSV = ''

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
    }

    private getTimeSeries = async () => {
      const response = await fetch(this.CSV_URL, { method: 'GET' })
      return response.text()
    }

    private parseRows = () => {
      this.rows = this.rawCSV.split('\n')
    }

    private parseColumnNames = () => {
      const splitColumns = this.extractTuples(this.rows[0])
      splitColumns.forEach((column, index) => {
        const cleanedColumnName = this.stripQuotes(column).trim()
        this.columnsByName[cleanedColumnName] = index
        this.columns.push(cleanedColumnName)

        if (this.NON_DATE_COLUMNS.indexOf(cleanedColumnName) > -1) {
          this.NON_DATE_COLUMN_INDEXES.push(index)
        }
      })
    }

    private parseCountries = () => {
      const countryRegionColumnIndex = this.columnsByName[this.COUNTRY_COLUMN_NAME]

      this.rows.forEach((row) => {
        const splitRow = this.extractTuples(row)
        const rowCountry = splitRow[countryRegionColumnIndex]

        if (this.countries[rowCountry] === undefined) {
          this.countries[rowCountry] = new Country(rowCountry)
        }

        const country = this.countries[rowCountry]

        // Classifies each row by country, and creates an object with
        // all of the dates for that row excluding non-date fields
        splitRow.forEach((rowColumnValue, index) => {
          if (this.NON_DATE_COLUMN_INDEXES.indexOf(index) === -1) {
            const rowObject: {[key: string]: number} = {}
            const date = this.columns[index]

            if (this.AVAILABLE_DATES.indexOf(date) === -1) {
              this.AVAILABLE_DATES.push(date)
            }

            country.incrementDateTotal(date, parseInt(rowColumnValue))

            // Create a row object consisting of dates and numbers: {"1/1/20": "15"}
            rowObject[date] = parseInt(rowColumnValue)
            country.pushRawDateRow(rowObject)
          }
        })
      })
    }

    private stripQuotes (data: string): string {
      let rval = data

      if (rval[0] === '"') {
        rval = rval.slice(1, rval.length - 1)
      }

      return rval
    }

    // A .split functional equivalent that handles commas within quotations
    private extractTuples (row: string, parseEOL = false, stripQuotes = true, trim = true): string[] {
      const rval = []
      let beginIndex = -1
      let endIndex = -1
      let marker = ','

      for (let i = 0; i < row.length; ++i) {
        if (parseEOL && marker !== '"' && row[i] === '\n') {
          endIndex = row[i - 1] === '\r' ? i - 1 : i
          rval.push(row.slice(beginIndex + 1, endIndex))

          beginIndex = i
          endIndex = -1
        } else if (row[i] === '"' && marker === ',') {
          marker = '"'
        } else if (row[i] === marker) {
          if (marker === '"') {
            marker = ','
          } else {
            endIndex = i
            rval.push(row.slice(beginIndex + 1, endIndex))

            beginIndex = endIndex
            endIndex = -1
          }
        }
      }
      let finalVal = row.slice(beginIndex + 1, row.length)

      if (stripQuotes) {
        finalVal = this.stripQuotes(finalVal)
      }

      if (trim) {
        finalVal = finalVal.trim()
      }

      rval.push(finalVal)

      return rval
    }
}
