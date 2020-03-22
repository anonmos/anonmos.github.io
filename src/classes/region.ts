export default abstract class Region {
    public dateTotals: {[key: string]: number}

    constructor (public name: string) {
      this.dateTotals = {}
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

export const US_STATES_BY_ABBREVIATION: {[key: string]: string} = {
  AL: 'Alabama',
  AK: 'Alaska',
  AS: 'American Samoa',
  AZ: 'Arizona',
  AR: 'Arkansas',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  DC: 'District of Columbia',
  FM: 'Federated States of Micronesia',
  FL: 'Florida',
  GA: 'Georgia',
  GU: 'Guam',
  HI: 'Hawaii',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  IA: 'Iowa',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  ME: 'Maine',
  MH: 'Marshall Islands',
  MD: 'Maryland',
  MA: 'Massachusetts',
  MI: 'Michigan',
  MN: 'Minnesota',
  MS: 'Mississippi',
  MO: 'Missouri',
  MT: 'Montana',
  NE: 'Nebraska',
  NV: 'Nevada',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NY: 'New York',
  NC: 'North Carolina',
  ND: 'North Dakota',
  MP: 'Northern Mariana Islands',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PW: 'Palau',
  PA: 'Pennsylvania',
  PR: 'Puerto Rico',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VT: 'Vermont',
  VI: 'Virgin Islands',
  VA: 'Virginia',
  WA: 'Washington',
  WV: 'West Virginia',
  WI: 'Wisconsin',
  WY: 'Wyoming'
}
