import Country from '@/classes/region/country'
import { extractTuples, stripQuotes } from '../../utils/csv-helper'

export default abstract class COVIDTimeSeries {
    public COUNTRY_COLUMN_NAME: string | undefined
    public DEFAULT_COUNTRY_NAME: string | undefined
    public SUB_REGION_COLUMN_NAME: string
    public NON_DATE_COLUMNS: string[]
    public NON_DATE_COLUMN_INDEXES: number[] = []
    public columnsByName: {[key: string]: number} = {}
    public columns: string[] = []
    public rows: string[] = []
    public countries: {[key: string]: Country} = {}
    public rawCSV = ''

    constructor (private downloadUrl: string, subRegionColumnName: string, nonDateColumns: string[], private countryColumnName?: string, private defaultCountryName?: string) {
      this.COUNTRY_COLUMN_NAME = countryColumnName
      this.DEFAULT_COUNTRY_NAME = defaultCountryName
      this.SUB_REGION_COLUMN_NAME = subRegionColumnName
      this.NON_DATE_COLUMNS = nonDateColumns
    }

    init = async () => {
      this.rawCSV = await this.getTimeSeries()
      this.parseRows()
      this.parseColumnNames()
      this.parseCountryData()
      this.fixMisparsedData()
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

    abstract fixMisparsedData(): void

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

    public abstract parseCountryData(): void
}
