<template>
  <div id='GDonutGraph'>
  <GChart
    :settings="{packages: ['corechart']}"    
    :data="chartData"
    :createChart="(el, google) => new google.visualization.PieChart(el)"
    :options="options"
    @ready="onChartReady"
  />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
  name: 'GPieGraph',

  props: ['pieData'],

  components: {
    GChart
  },

  data () {
    return {
      chartsLib: null,  
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Classification', 'Incidents'],
        ['Larceny/Theft', 18792],
        ['Violence/Homicide', 6052],
        ['Traffic Violations', 2316],
        ['Drugs/Narcotics', 1580],
        ['Kidnapping', 1337],
        ['Sex Offences', 358],
        ['Mental Health/Bullying', 155]
      ],
      options: {
        pieHole: 0.25,
        height: 194,
        chartArea: {'width': '100%', 'height': '80%'}
      }
    }
  },

  methods: {
    onChartReady (chart, google) {
      this.chartsLib = google
    }
  }
}
</script>

<style>
  #GDonutGraph{
    height: 194px;
  }
</style>
