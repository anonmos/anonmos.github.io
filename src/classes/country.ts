export default class Country {
    public dateTotals: {[key: string]: number}
    public rawDateRows: {[key: string]: number}[]

    constructor (public name: string) {
      this.dateTotals = {}
      this.rawDateRows = []
    }

    public incrementDateTotal (date: string, amount: number) {
      if (this.dateTotals[date] === undefined) {
        this.dateTotals[date] = 0
      }

      this.dateTotals[date] += amount
    }

    public getDateTotal (date: string) {
      return this.dateTotals[date]
    }

    public pushRawDateRow (dateRow: {[key: string]: number}) {
      this.rawDateRows.push(dateRow)
    }

    public getRawDateRows () {
      return this.rawDateRows
    }

    public getSortedDateKeys () {
      let dates = Object.keys(this.dateTotals)
      dates = dates.sort((a: string, b: string) => {
        const aDate = new Date(a)
        const bDate = new Date(b)

        if (aDate > bDate) {
          return 1
        } else if (aDate === bDate) {
          return 0
        } else {
          return -1
        }
      })

      return dates
    }
}
