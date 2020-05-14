<template>
  <div class="home">
    <div v-if="loading" class="loader" />
    <div class="chart">
      <line-chart v-if="!loading" :chart-data="lineChartData" />
    </div>
    <div v-if="!loading" class="controls">
      <div class="stats">
        <div class="stat">
          Total {{mode}}: {{totalCount}}
        </div>
      </div>
      <div class="selector-groups">
        <div class="selector-group">
          <select v-model="country">
            <option v-for="(name, index) in countryNames" :key="index" :value="name">{{name}}</option>
          </select>
          <select v-if="stateNames.length > 0" v-model="stateProvince">
            <option v-for="(name, index) in stateNames" :key="index" :value="name">{{name}}</option>
          </select>
          <select v-if="countyNames.length > 0" v-model="countyName">
            <option v-for="(name, index) in countyNames" :key="index" :value="name">{{name}}</option>
          </select>
        </div>
        <div class="selector-group">
          <select v-model="mode">
            <option value="Current Cases">Current Cases</option>
            <option value="Deaths">Deaths</option>
          </select>
        </div>
      </div>
      </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from 'vue'
import LineChart from '@/components/LineChart.vue'
import Region from '@/classes/region/region'
import StateProvince from '@/classes/region/state-province'
import Country from '@/classes/region/country'
import County from '@/classes/region/county'
import COVIDTimeSeries from '../classes/data-retrievers/covid-timeseries'
import Fetcher from '@/utils/fetcher'
import Logger from '../utils/logger'
import Timer from '../utils/timer'

export default Vue.extend({
  name: 'Home',
  components: {
    LineChart
  },
  data () {
    return {
      loading: true,
      currentCases: undefined as unknown as COVIDTimeSeries,
      deaths: undefined as unknown as COVIDTimeSeries,
      country: 'US',
      stateProvince: 'All',
      countyName: 'All',
      mode: 'Current Cases',
      MODES: ['Current Cases', 'Deaths']
    }
  },
  computed: {
    lineChartData (): {labels: string[]; datasets: {label: string; data: number[]}[]} {
      const timer = new Timer()
      const rval: {labels: string[]; datasets: {label: string; data: number[]}[]} = {
        labels: [],
        datasets: [{
          label: this.mode,
          data: []
        }]
      }

      const country = this.getLineChartDataContainer()
      timer.reset()
      const sortedDates = country.getSortedDateKeys().filter((date) => country.dateTotals[date] > 0)
      Logger.debug(`Sorted date keys for country: ${timer.getTimeElapsedinMs()}`)
      rval.labels = sortedDates

      timer.reset()
      sortedDates.forEach((date: string) => {
        if (country.dateTotals[date] > 0) {
          rval.datasets[0].data.push(country.dateTotals[date])
        }
      })
      Logger.debug(`Sorted date array pushing for chart: ${timer.getTimeElapsedinMs()}`)

      return rval
    },
    countryNames (): string[] {
      let countryNames = this.getCovidContainer().getCountryNames()

      countryNames = countryNames.sort((a: string, b: string) => {
        if (a > b) {
          return 1
        } else if (a === b) {
          return 0
        } else {
          return -1
        }
      })

      return countryNames
    },
    stateNames (): string[] {
      const country = this.getCovidContainer().getCountry(this.country)
      const stateProvinces = country.getStateProvinceNames()
      const provincesWithAllSelection = ['All']
      provincesWithAllSelection.push(...stateProvinces)

      return provincesWithAllSelection.length > 1 ? provincesWithAllSelection : []
    },
    countyNames (): string[] {
      const rval = []

      if (this.stateProvince !== 'All') {
        const country = this.getCovidContainer().getCountry(this.country)
        const stateProvince = country.getStateProvince(this.stateProvince)

        if (stateProvince) {
          const counties = stateProvince.getCountyNames()

          if (counties.length > 0) {
            rval.push('All')
            rval.push(...counties)
          }
        }
      }

      return rval
    },
    totalCount (): string {
      const dataContainer = this.getLineChartDataContainer()
      const sortedDates = dataContainer.getSortedDateKeys()
      const count = dataContainer.getDateTotal(sortedDates[sortedDates.length - 1])
      return new Intl.NumberFormat().format(count)
    }
  },
  methods: {
    lineChartOptions () {
      return {
        xAxisID: 'Date',
        yAxisID: 'Confirmed Cases'
      }
    },
    getLineChartDataContainer (): Region {
      const country: Country = this.getCovidContainer().getCountry(this.country)
      const stateProvince: StateProvince = country.stateProvinces?.[this.stateProvince]
      const county: County = stateProvince?.getCounty(this.countyName)

      if (county) {
        return county
      } else if (stateProvince) {
        return stateProvince
      }

      return country
    },
    getCovidContainer (): COVIDTimeSeries {
      return this.mode === this.MODES[0] ? this.currentCases : this.deaths
    }
  },
  async mounted () {
    const dataResults = await new Fetcher().fetchAll()
    this.currentCases = dataResults.currentCases
    this.deaths = dataResults.deaths
    this.loading = false
  }
})
</script>
<style scoped lang="scss">
  @import '../scss/home.scss';
</style>
