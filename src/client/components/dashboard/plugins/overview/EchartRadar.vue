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
        radar: [
          {
            indicator: [
              { text: 'Speed' },
              { text: 'Costs' },
              { text: 'Nubmers' },
              { text: 'Samples' },
              { text: 'Publications' }
            ],
            center: ['30%', '50%'],
            radius: 120,
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            name: {
              formatter: '【{value}】',
              textStyle: {
                color: '#72ACD1'
              }
            },
            splitArea: {
              areaStyle: {
                color: [
                  'rgba(114, 172, 209, 0.2)',
                  'rgba(114, 172, 209, 0.4)',
                  'rgba(114, 172, 209, 0.6)',
                  'rgba(114, 172, 209, 0.8)',
                  'rgba(114, 172, 209, 1)'
                ],
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 10
              }
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.5)'
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.5)'
              }
            }
          },
          {
            indicator: [
              { text: 'SA', max: 150 },
              { text: 'VG', max: 150 },
              { text: 'LC', max: 150 },
              { text: 'AD', max: 120 },
              { text: 'SSD', max: 108 },
              { text: 'VO', max: 72 }
            ],
            center: ['70%', '50%'],
            radius: 120
          }
        ],
        series: [
          {
            name: '雷达图',
            type: 'radar',
            itemStyle: {
              emphasis: {
                // color: 各异,
                lineStyle: {
                  width: 4
                }
              }
            },
            data: [
              {
                value: [100, 8, 0.4, -80, 2000],
                name: '图一',
                symbol: 'rect',
                symbolSize: 5,
                lineStyle: {
                  normal: {
                    type: 'dashed'
                  }
                }
              },
              {
                value: [60, 5, 0.3, -100, 1500],
                name: '图二',
                areaStyle: {
                  normal: {
                    color: 'rgba(255, 255, 255, 0.5)'
                  }
                }
              }
            ]
          },
          {
            name: '成绩单',
            type: 'radar',
            radarIndex: 1,
            data: [
              {
                value: [120, 118, 130, 100, 99, 70],
                name: '张三',
                label: {
                  normal: {
                    show: true,
                    formatter: function (params) {
                      return params.value
                    }
                  }
                }
              },
              {
                value: [90, 113, 140, 30, 70, 60],
                name: '李四',
                areaStyle: {
                  normal: {
                    opacity: 0.9,
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                      {
                        color: '#B8D3E4',
                        offset: 0
                      },
                      {
                        color: '#72ACD1',
                        offset: 1
                      }
                    ])
                  }
                }
              }
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
