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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from 'vue'
import COVIDTimeSeries from '@/utils/fetcher'
import LineChart from '@/components/LineChart.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    LineChart
  },
  data () {
    return {
      loading: true,
      currentCases: new COVIDTimeSeries(),
      country: 'US'
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

      const country = this.currentCases.getCountry(this.country)
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
    totalCases (): number {
      const country = this.currentCases.getCountry(this.country)
      const sortedDates = country.getSortedDateKeys()
      return country.getDateTotal(sortedDates[sortedDates.length - 1])
    }
  },
  methods: {
    lineChartOptions () {
      return {
        xAxisID: 'Date',
        yAxisID: 'Confirmed Cases'
      }
    }
  },
  async mounted () {
    await this.currentCases.init()
    this.loading = false
  }
})
</script>
<style scoped lang="scss">
  @import '../scss/home.scss';
</style>
