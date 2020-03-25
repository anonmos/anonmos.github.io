<template>
  <div class="home">
    <div v-if="loading" class="loader" />
    <div class="chart">
      <line-chart v-if="!loading" :chart-data="lineChartData" />
    </div>
    <div v-if="!loading" class="controls">
      <div class="stats">
        <div class="stat">
          Current Total Cases: {{totalCases}}
        </div>
      </div>
      <div class="selector">
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
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from 'vue'
import COVIDTimeSeries, { MODE } from '@/utils/fetcher'
import LineChart from '@/components/LineChart.vue'
import Region from '../classes/region'
import StateProvince from '../classes/state-province'
import Country from '../classes/country'
import County from '../classes/county'

export default Vue.extend({
  name: 'Home',
  components: {
    LineChart
  },
  data () {
    return {
      loading: true,
      currentCases: new COVIDTimeSeries(MODE.CURRENT_CASES),
      deaths: new COVIDTimeSeries(MODE.DEATHS),
      country: 'US',
      stateProvince: 'All',
      countyName: 'All'
    }
  },
  computed: {
    lineChartData (): {labels: string[]; datasets: {label: string; data: number[]}[]} {
      const rval: {labels: string[]; datasets: {label: string; data: number[]}[]} = {
        labels: [],
        datasets: [{
          label: 'Cases',
          data: []
        }]
      }

      const country = this.getLineChartDataContainer()
      const sortedDates = country.getSortedDateKeys()
      rval.labels = sortedDates

      sortedDates.forEach((date) => {
        rval.datasets[0].data.push(country.dateTotals[date])
      })

      return rval
    },
    countryNames (): string[] {
      let countryNames = this.currentCases.getCountryNames()

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
      const country = this.currentCases.getCountry(this.country)
      const stateProvinces = country.getStateProvinceNames()
      const provincesWithAllSelection = ['All']
      provincesWithAllSelection.push(...stateProvinces)

      return provincesWithAllSelection.length > 1 ? provincesWithAllSelection : []
    },
    countyNames (): string[] {
      const rval = []

      if (this.stateProvince !== 'All') {
        const country = this.currentCases.getCountry(this.country)
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
    totalCases (): number {
      const dataContainer = this.getLineChartDataContainer()
      const sortedDates = dataContainer.getSortedDateKeys()
      return dataContainer.getDateTotal(sortedDates[sortedDates.length - 1])
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
      const country: Country = this.currentCases.getCountry(this.country)
      const stateProvince: StateProvince = country.stateProvinces?.[this.stateProvince]
      const county: County = stateProvince?.getCounty(this.countyName)

      if (county) {
        return county
      } else if (stateProvince) {
        return stateProvince
      }

      return country
    }
  },
  async mounted () {
    await Promise.all([this.currentCases.init(), this.deaths.init()])
    this.loading = false
  }
})
</script>
<style scoped lang="scss">
  @import '../scss/home.scss';
</style>
