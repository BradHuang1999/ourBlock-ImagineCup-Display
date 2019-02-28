<template>
  <div id='GPieGraph'>
    <GChart
      :settings="{packages: ['corechart']}"    
      :data="pieData"
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
      options: {
        hAxis: { format: 'decimal' },
        colors: ['#1b9e77', '#d95f02', '#7570b3', '#454ade'],
        height: 180,
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
  #GPieGraph{
    height: 180px;
  }
</style>
