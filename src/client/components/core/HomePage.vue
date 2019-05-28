<template>
  <div>
    <v-custom-carousel/>
    <v-container>
      <v-layout align-start justify-space-around row wrap>
        <v-flex xs12 md6>
          <div>
            <h1 class="display-2 font-weight-bold blue-color">
              {{ homeAboutTitle }}
            </h1>
            <br/>
            <div class="content-p" v-html="homeAboutHtml">
            </div>
          </div>
        </v-flex>
        <v-flex xs12 md6>
          <div >
            <v-custom-introduction-card
              :src="customIntroductionCards[0].src"
              :height="customIntroductionCards[0].height"
              :title="customIntroductionCards[0].title"
              :subtitle="customIntroductionCards[0].subtitle"
              :detail="customIntroductionCards[0].detail"
            />
          </div>
        </v-flex>
        <v-flex xs12 md12>
          <br/>
        </v-flex>
      </v-layout>
      <v-hover>
        <v-parallax
          height="350"
          src="https://s2.ax1x.com/2019/04/22/EAKu59.jpg"
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 24 : 2}`"
        >
          <v-layout
            align-center
            column
            justify-center
          >
            <h1 class="display-2 font-weight-bold">Inventing, Optimizing, Sharing</h1>
          </v-layout>
        </v-parallax>
      </v-hover>
      <v-custom-timeline />
      <v-custom-item-cards />
      <br/>
      <v-layout align-start justify-space-around row wrap>
        <v-flex xs12 mb12>
          <div >
            <v-custom-introduction-card
              :src="customIntroductionCards[1].src"
              :height="customIntroductionCards[1].height"
              :title="customIntroductionCards[1].title"
              :subtitle="customIntroductionCards[1].subtitle"
              :detail="customIntroductionCards[1].detail"
            />
          </div>
        </v-flex>
      </v-layout>
      <v-custom-member-comments />
      <br />
      <v-custom-chip />
    </v-container>
  </div>
</template>
<script>
// import Echarts from '@/components/Echarts'
export default {
  components: {
    'v-custom-carousel': () => import('@/components/home/Carousel'),
    'v-custom-timeline': () => import('@/components/home/Timeline'),
    'v-custom-introduction-card': () => import('@/components/home/IntroductionCard'),
    'v-custom-item-cards': () => import('@/components/home/ItemCards'),
    'v-custom-member-comments': () => import('@/components/home/MemberComment'),
    'v-custom-chip': () => import('@/components/home/Chip')
  },
  data: () => ({
    homeAboutTitle: 'About the openbiox',
    homeAboutHtml: '<p><a href="https://github.com/openbiox">openbiox</a> is a community-driven global bioinformatics innovation collaboration group. It was founded in March 2019 and consist of undergraduate, master, doctoral, and postdoctoral students from well-known universities and research institutes around the world.</p><p>As of April 2019, openbiox had a total of 69 members, completed the formation of at least 11 project teams, and launched more than 10 bioinformatics innovation practice projects, with project funds exceeding 13,000 yuan and web/computing servers.</p>',
    customIntroductionCards: [
      {
        tag: 'GA4GH',
        src: 'https://s2.ax1x.com/2019/04/22/EAuPOO.jpg',
        title: 'We have a responsibility to enable this future for everyone.',
        subtitle: 'Ewan Birney, GA4GH Chair',
        detail: 'Detail from <a href="https://www.ga4gh.org/news/sAhZCeJjS96QHhVPIYwwWA.article">sharing data saves lives\' infographic on the GA4GH website</a>. This shows just a few examples of genomic-medicine programmes that were active in 2017.',
        height: '350px'
      },
      {
        tag: 'GeneTest',
        src: 'https://s2.ax1x.com/2019/04/23/EEhI7q.jpg',
        title: 'GLOBAL GENETIC TESTING MARKET FORECAST 2018-2026.',
        subtitle: 'Genetic Testing Market by Type (Predisposition Testing, Diagnostic Testing, Newborn Screening, Prenatal Testing) by Application (Cancer Genetic, Prenatal Genetic, Pharmacogenomics, Predisposition) & by Geography.',
        detail: 'Detail from <a href="https://www.inkwoodresearch.com/reports/genetic-testing-market/#report-summary">inkwoodresearch</a>.<p>The Global Genetic testing market is anticipated to grow at a CAGR of 13.56% between 2018 and 2026. Genetic testing includes observing the DNA, a chemical databank that transports directives for the body’s utilities. Genetic testing can reveal changes or alterations in the genes that may cause illness or disease. </p>',
        height: '700px'
      }
    ]
  })
}
</script>

<style>
.carton-row {
  min-height: 400px;
}
.flag-text {
  font-size: 300px;
}
.chart-flex {
  min-height: 400px;
  height: 100%;
}
.chart-flex-margin {
  margin-top: 70px;
}
</style>
