<template>
  <div>
    <v-custom-carousel/>
    <v-container>
      <v-layout align-start justify-space-around row wrap>
        <v-flex xs6 mb6>
          <div>
            <h1 class="display-2 font-weight-bold blue-color">
              About the openbiox
            </h1>
            <br/>
            <div class="content-p">
              <p>
                <a href="https://github.com/openbiox">openbiox</a> is a community-driven bioinformatics innovation collaboration group in China. It was founded in March 2019 and consist of undergraduate, master, doctoral, and postdoctoral students from well-known universities and research institutes around the world.
              </p>
              <p>As of April 2019, openbiox had a total of 69 members, completed the formation of at least 11 project teams, and launched more than 10 bioinformatics innovation practice projects, with project funds exceeding 13,000 yuan and web/computing servers.
              </p>
            </div>
          </div>
        </v-flex>
        <v-flex xs6 mb6>
          <div >
            <v-custom-introduction-card />
          </div>
        </v-flex>
        <v-flex xs12 mb12>
          <br/>
        </v-flex>
      </v-layout>
      <v-parallax
        height="350"
        src="https://s2.ax1x.com/2019/04/22/EAKu59.jpg"
      >
        <v-layout
          align-center
          column
          justify-center
        >
          <h1 class="display-2 font-weight-bold">Inventing, Optimizing, Sharing</h1>
        </v-layout>
      </v-parallax>
      <v-custom-timeline />
      <v-custom-hover-card :images="homeHoverImages"/>
    </v-container>
  </div>
</template>
<script>
// import Echarts from '@/components/Echarts'
export default {
  components: {
    'v-custom-carousel': () => import('@/components/home/Carousel'),
    'v-custom-timeline': () => import('@/components/home/Timeline'),
    'v-custom-introduction-card': () => import('@/components/home/IntroductionCard')
  },
  data: () => ({
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
