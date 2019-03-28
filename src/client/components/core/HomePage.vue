<template>
  <div>
    <v-custom-carousel/>
    <v-container>
      <v-layout text-xs-center wrap row>

        <v-flex xs12 mb-12>
          <h1 class="display-2 font-weight-bold mb-3">
            Welcome to
            <b>openbiox</b>
          </h1>
          <p class="subheading font-weight-regular">
            For help and collaboration with other openbiox users,
            <br>please join our online
            <a
              href="https://community.medstudio.com"
              target="_blank"
            >Flarum Community</a>
          </p>
          <p>Simple for all of us.</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
// import Echarts from '@/components/Echarts'
export default {
  components: {
    'v-custom-carousel': () => import('@/components/home/Carousel')
  },
  data: () => ({})
}
</script>

<style>
.carton-row {
  min-height: 400px;
}
.flag-text {
  font-size: 300px;
}
.orange-color {
  color: #fa6621;
}
.blue-color {
  color: #3b7bee;
}
.chart-flex {
  min-height: 400px;
  height: 100%;
}
.chart-flex-margin {
  margin-top: 70px;
}
</style>
