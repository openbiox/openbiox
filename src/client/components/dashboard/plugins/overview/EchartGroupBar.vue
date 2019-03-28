<template>
  <div :id="id" style="height:300px;"/>
</template>
<script>
// 引入基本模板
import echarts from 'echarts'
// 引入柱状图组件

export default {
  name: 'dashbord-layer-4',
  props: ['id', 'title'],
  data () {
    return {
      xAxis: []
    }
  },
  mounted () {
    this.draw()
  },
  methods: {
    draw () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById(this.id))
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: {
          data: ['AC', 'DS', 'EF']
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '7',
              '8',
              '9',
              '10',
              '11',
              '12'
            ],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Counts',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: 'Hight',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: 'CA',
            type: 'bar',
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ]
          },
          {
            name: 'DA',
            type: 'bar',
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          },
          {
            name: 'FA',
            type: 'line',
            yAxisIndex: 1,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ]
          }
        ]
      })
    }
  }
}
</script>
<style lang="sass" scoped>
svg
  margin: 25px;
path
  fill: none
  stroke: #76BF8A
  stroke-width: 3px
</style>
