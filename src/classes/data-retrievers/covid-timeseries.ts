import Country from '@/classes/region/country'
import { extractTuples, stripQuotes } from '../../utils/csv-helper'
import Timer from '@/utils/timer'
import Logger from '@/utils/logger'

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

    constructor (private downloadPath: string, private sourceDomain: string, subRegionColumnName: string, nonDateColumns: string[], private countryColumnName?: string, private defaultCountryName?: string) {
      this.COUNTRY_COLUMN_NAME = countryColumnName
      this.DEFAULT_COUNTRY_NAME = defaultCountryName
      this.SUB_REGION_COLUMN_NAME = subRegionColumnName
      this.NON_DATE_COLUMNS = nonDateColumns
    }

    init = async (seriesType?: string) => {
      const timer = new Timer()
      this.rawCSV = await this.getTimeSeries()
      Logger.debug(`${seriesType || ''} Download time: ${timer.getTimeElapsedinMs()}`)
      this.parseRows()
      Logger.debug(`${seriesType || ''} Row parse time: ${timer.getTimeElapsedinMs()}`)
      this.parseColumnNames()
      Logger.debug(`${seriesType || ''} Column name parse time: ${timer.getTimeElapsedinMs()}`)
      this.parseCountryData()
      Logger.debug(`${seriesType || ''} Country data parse time: ${timer.getTimeElapsedinMs()}`)
      this.fixMisparsedData()
      Logger.debug(`${seriesType || ''} Misparsed data fix time: ${timer.getTimeElapsedinMs()}`)
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
      const response = await fetch(`${this.sourceDomain}${this.downloadPath}`, { method: 'GET' })
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
