<template>
  <v-timeline>
    <v-timeline-item v-for="(time, key) in timeLine" :key="key" color="red lighten-2" large>
      <span slot="opposite" class="timeline-text timeline-text-time">{{ time.year }}</span>
      <v-card class="elevation-2">
        <v-card-text class="timeline-text">{{ time.text }}</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: 'v-custom-timeline',
  data: () => ({
    timeLine: [
      {
        year: '1860年至1870年',
        text:
          '奥地利学者孟德尔根据宛豆杂交实验提出遗传因子概念，并总结出孟德尔遗传定律'
      },
      {
        year: '1909年',
        text:
          '丹麦植物学家和遗传学家的翰逊首次提出“基因”这一名词，用以表达孟德尔的遗传物质的分子'
      },
      {
        year: '1953年',
        text: '美国人沃森和英国人克里克通过实验提出DNA分子的双螺旋模型'
      },
      { year: '1969年', text: '科学家成功分离出第一个基因' },
      {
        year: '1990年',
        text: '10月被誉为生命科学“阿波罗登月计划”的国际人类基因组计划启动'
      },
      {
        year: '1998年',
        text:
          '一批科学家在美国罗克威尔组建赛莱拉遗传公司，与国际人类基因组计划展开竞争，12月一种小线虫完整基因组序列的测定工作宣告完成，这是科学家第一次绘出多细胞动物的基因组图谱'
      },
      {
        year: '1999年',
        text:
          '9月中国获准加入人类基因组计划，负责测定人类基因组全部序列的1%。中国是继美、英、日、德、法之后第6个国际人类基因组计划参与国，也是参与这一计划的惟一发展中国家。12月1日国际人类基因组计划联合研究小组宣布，完整破译出人体第22对染色体的遗传密码，这是人类首次成功地完成人体染色体完整基因序列的测定'
      },
      {
        year: '2000年',
        text:
          '4月6日美国赛莱拉公司宣布破译出一名实验者的完整遗传密码，但遭到不少科学家的质疑。4月底中国科学家按照国际人类基因组计划的部署，完成了1%人类基因组的工作框架图。5月8日德、日等国科学家宣布，已基本完成了人体第21对染色体的测序工作。6月26日科学家公布人类基因组工作草图，标志着人类在解读自身“生命之书”的路上迈出了重要一步。12月14日美英等国科学家宣布绘出拟南芥基因组的完整图谱，这是人类首次全部破译出一种植物的基因序列'
      },
      {
        year: '2001年',
        text:
          '2月12日中、美、日、德、法、英等6国科学家和美国塞莱拉公司联合公布人类基因组图谱及初步分析结果'
      },
      {
        year: '2005年',
        text:
          '454公司推出第一个基于焦磷酸测序原理的高通量基因组测序系统——Genome Sequencer 20 System，这是核酸测序技术发展史上里程碑式的事件。随后，罗氏公司以1.55亿美元收购了454公司，并在2006年推出了更新的GS FLX测序系统。随着其他测序技术的出现，454技术读长长（最长可以到1000bp），且准确度高，在二代测序中属于佼佼者，却因其成本较高，市场接受度不高，导致2013年罗氏公司表示，它将在未来3年内关闭454生命科学测序业务，并裁掉约100名员工。'
      },
      {
        year: '2006年',
        text:
          'Solexa公司也推出了自己的NGS系统——Genome Analyzer，简称GA。这套基于DNA簇（DNA cluster）、桥式PCR（Bridge PCR）和可逆阻断（Reversible terminator）等核心技术的系统具有高通量、低错误率、低成本、应用范围广等优点'
      },
      {
        year: '2007年',
        text:
          'Illumina公司以6亿美元的高价收购了Solexa，使GA得以商品化'
      }
    ]
  })
}
</script>

<style>
.timeline-text {
  font-size: 1.2em;
  text-align: justify;
}
.timeline-text-time {
  font-weight: bold;
}
</style>
