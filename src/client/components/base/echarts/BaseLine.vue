<template>
  <div id="echartLines" style="height:100%"/>
</template>
<script>
// 引入基本模板
import echarts from 'echarts'
// 引入柱状图组件

export default {
  name: 'b-echarts-lines',
  data () {
    return {
      xAxis: []
    }
  },
  mounted () {
    this.getYears()
    this.drawAreaStack()
  },
  methods: {
    getYears () {
      for (var year = 1949; year < 2019; year++) {
        this.xAxis.push(year)
      }
    },
    drawAreaStack () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echartLines'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'Count of publications in \nPubMed every year: cancer, disease, medcine',
          left: 'left'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['Cancer', 'Disease', 'Medcine'],
          textStyle: {
            fontSize: 18
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.xAxis,
            axisLabel: {
              textStyle: {
                fontSize: 16
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              textStyle: {
                fontSize: 18
              }
            }
          }
        ],
        series: [
          {
            name: 'Cancer',
            type: 'line',
            data: [498, 6936, 8971, 9381, 9557, 9626, 10261, 10056, 10313, 9906, 10372, 10353, 11360, 12256, 16184, 19303, 17234, 16730, 18776, 20398, 20603, 20997, 22051, 22563, 23154, 24104, 25321, 25894, 27511, 29386, 31195, 32331, 33128, 34838, 37311, 40147, 41741, 42875, 44884, 47788, 51708, 53164, 51386, 53236, 54817, 57977, 58441, 60912, 62572, 64439, 66634, 70438, 72329, 75522, 80818, 84818, 90622, 93692, 98892, 103864, 108601, 116409, 124479, 137100, 145593, 159736, 169779, 172557, 173709, 177673]
          },
          {
            name: 'Disease',
            type: 'line',
            data: [3441, 4503, 6469, 8066, 8523, 9479, 9545, 9059, 8937, 8879, 8860, 8818, 9595, 8698, 7845, 9105, 7716, 7772, 9880, 11616, 13038, 14916, 16103, 16971, 18452, 19139, 23591, 24964, 25096, 25827, 26344, 26346, 27562, 28761, 31743, 33953, 35696, 36868, 39617, 41837, 48694, 51181, 52302, 53735, 55703, 58310, 62694, 65876, 70006, 73632, 78544, 83621, 87563, 92139, 100221, 104937, 112186, 119568, 125604, 132780, 139109, 148374, 157071, 169338, 182484, 197849, 209531, 217172, 218491, 221981]
          },
          {
            name: 'Medcine',
            type: 'line',
            data: [3968, 7032, 8135, 7901, 7299, 6520, 6406, 5978, 6053, 5784, 6637, 8005, 9107, 10347, 21830, 35659, 21464, 9590, 10235, 10588, 11622, 11756, 11555, 11715, 11932, 12447, 12708, 12591, 12014, 13018, 13655, 11622, 10833, 11364, 12079, 11890, 12733, 13110, 31221, 59063, 62243, 71715, 73776, 75772, 78336, 81014, 84489, 85826, 90668, 94778, 99513, 105606, 109120, 111722, 116052, 122803, 129251, 136737, 140872, 146953, 150276, 159557, 173358, 187954, 210709, 280085, 324242, 358311, 374290, 428208]
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
