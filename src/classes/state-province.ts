import Region from './region'
import County from './county'

export default class StateProvince extends Region {
    private counties: {[key: string]: County} = {}

    getCounty (name: string) {
      return this.counties[name]
    }

    getCountyNames () {
      return Object.keys(this.counties).sort((a, b) => {
        if (a > b) {
          return 1
        } else if (a === b) {
          return 0
        } else {
          return -1
        }
      })
    }

    pushCountyData (name: string, row: {[key: string]: number}) {
      if (!this.counties[name]) {
        this.counties[name] = new County(name)
      }

      const dates = Object.keys(row)
      dates.forEach((date) => {
        this.counties[name].incrementDateTotal(date, row[date])
      })
    }
}
