<template>
  <div :id="id" style="height:250px;"/>
</template>
<script>
// 引入基本模板
import echarts from 'echarts'
// 引入柱状图组件

export default {
  name: 'dashbord-card-1',
  props: ['id', 'title'],
  data () {
    return {
      xAxis: [],
      date: [],
      data: [Math.random() * 300]
    }
  },
  mounted () {
    var base = +new Date(2014, 9, 3)
    var oneDay = 24 * 3600 * 1000

    for (var i = 1; i < 365 * 3; i++) {
      var now = new Date((base += oneDay))
      this.date.push(
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/')
      )
      this.data.push(Math.round((Math.random() - 0.5) * 20 + this.data[i - 1]))
    }
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
          position: function (pt) {
            return [pt[0], '10%']
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.date
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%']
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 300
          },
          {
            start: 0,
            end: 300,
            handleIcon:
              'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
              color: '#fff',
              shadowBlur: 3,
              shadowColor: 'rgba(0, 0, 0, 0.6)',
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          }
        ],
        series: [
          {
            name: '模拟数据',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 158, 68)'
                },
                {
                  offset: 1,
                  color: 'rgb(255, 70, 131)'
                }
              ])
            },
            data: this.data
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
