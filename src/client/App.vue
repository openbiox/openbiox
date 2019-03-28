<template>
  <v-app>
    <b-nav/>
    <v-content>
      <b-svg
        v-if="invalidRoute"
        style="min-height:800px;margin-top:200px"
        class="text-xs-center"
        :src="svg404"
        width="60%"
      />
      <div v-else style="min-height:800px">
        <b-banner :bannerText="shortTitle" v-if="useBanner"/>
        <router-view></router-view>
      </div>
      <b-back-to-top/>
      <b-footer/>
    </v-content>
  </v-app>
</template>

<script>
import svg404 from '@/assets/img/error/404.svg'

export default {
  name: 'App',
  data () {
    return {
      useBanner: document.useBanner,
      shortTitle: document.shortTitle,
      svg404: svg404
    }
  },
  watch: {
    $route () {
      this.updateUseBanner()
      this.updateShortTitle()
    }
  },
  computed: {
    invalidRoute () {
      return !this.$route.matched || this.$route.matched.length === 0
    }
  },
  methods: {
    updateUseBanner: function () {
      this.useBanner = document.useBanner
    },
    updateShortTitle: function () {
      this.shortTitle = document.shortTitle
    }
  }
}
</script>
