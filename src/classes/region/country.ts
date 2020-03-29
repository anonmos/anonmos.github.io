import Region, { US_STATES_BY_ABBREVIATION } from './region'
import StateProvince from './state-province'
import { stripQuotes } from '@/utils/csv-helper'

export default class Country extends Region {
  public stateProvinces: {[key: string]: StateProvince}

  constructor (name: string) {
    super(name)
    this.stateProvinces = {}
  }

  getStateProvince (name: string) {
    return this.stateProvinces[name]
  }

  pushRow (subRegionName: string, row: {[key: string]: number}) {
    if (this.name === 'US') {
      this.pushUSRow(subRegionName, row)
    } else {
      this.pushNonUSRow(subRegionName, row)
    }
  }

  // Special case handling for US data, its regional counts are duplicated
  // in the input data (e.g. broken down by both state and county)
  private pushUSRow (stateProvinceName: string, row: {[key: string]: number}) {
    // stateProvinceName will either be "county, state abbreviation" or just the state's full name (ex: Omaha, NE or Nebraska)
    const cleanSubRegionNameSplit = stripQuotes(stateProvinceName)
    const subRegionNameSplit = cleanSubRegionNameSplit.split(',')
    const state = subRegionNameSplit.length === 1 ? subRegionNameSplit[0].trim() : US_STATES_BY_ABBREVIATION[subRegionNameSplit[1].trim()]
    const county = subRegionNameSplit.length === 1 ? undefined : subRegionNameSplit[0].trim()
    const isStateValid = state && state?.length > 0

    if (!this.stateProvinces[state]) {
      this.stateProvinces[state] = new StateProvince(state)
    }

    // Case where this is a row containing data about a specific county.  Be careful not to
    // duplicate the count at the state or country levels.
    if (county && isStateValid) {
      this.stateProvinces[state].pushCountyData(county, row)
    } else {
      const dates = Object.keys(row)
      dates.forEach((date) => {
        if (isStateValid) {
          this.stateProvinces[state].incrementDateTotal(date, row[date])
        }
        this.incrementDateTotal(date, row[date])
      })
    }
  }

  private pushNonUSRow (stateProvinceName: string | undefined, row: {[key: string]: number}) {
    if (stateProvinceName && stateProvinceName.length > 0) {
      this.stateProvinces[stateProvinceName] = new StateProvince(stateProvinceName)
    }

    const dates = Object.keys(row)
    dates.forEach((date) => {
      // Some countries don't have states or provinces separated out, so increment both
      // if they both exist
      if (stateProvinceName && stateProvinceName.length > 0) {
        this.stateProvinces[stateProvinceName].incrementDateTotal(date, row[date])
      }

      this.incrementDateTotal(date, row[date])
    })
  }

  getStateProvinces () {
    return this.stateProvinces
  }

  getStateProvinceNames () {
    return Object.keys(this.stateProvinces).sort((a, b) => {
      if (a > b) {
        return 1
      } else if (a === b) {
        return 0
      } else {
        return -1
      }
    })
  }
}
