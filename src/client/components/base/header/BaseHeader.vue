<template>
  <div class="nav-div">
    <v-navigation-drawer
      class="gray lighten-5 elevation-4"
      v-model="sideNav"
      enable-resize-watcher
      disable-route-watcher
      app
      clipped
      hide-overlay
    >
      <v-custom-side-bar app></v-custom-side-bar>
    </v-navigation-drawer>
    <v-toolbar fixed app clipped-left dark>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" dark></v-toolbar-side-icon>
      <v-toolbar-title style = "margin-right:15px">
        <!--<img :src="require('@/assets/logo.png')" height="30" style = "margin-top:10px;margin-right:15px">-->
        <a href="/" style="color:white"><span>openbiox</span></a>
      </v-toolbar-title>
      <div v-for="(link, href, index) in links" :key="index" >
        <router-link v-if="!isExternalSite(link)" :to="href">
          <v-btn
            dark
            flat
            round
            class="without-text-transform"
            :class="isPageActive(link)"
            style="color:white"
          >{{ link }}</v-btn>
        </router-link>
        <v-btn v-else
            dark
            flat
            round
            class="without-text-transform"
            :class="isPageActive(link)"
            target="_blank"
            style="color:white"
            :href="href">{{ link }}</v-btn>
      </div>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>

<script>
import headerNavLinks from '@/router/pages/BaseHeaderNav'
import externalSite from '@/router/pages/ExternalSites.json'

export default {
  name: 'b-nav',
  components: {
    'v-custom-side-bar': () => import('@/components/base/sidebar/BaseFixedLeftNavList')
  },
  data () {
    return {
      sideNav: false,
      pageName: document.pageName,
      links: headerNavLinks,
      externalSite: externalSite
    }
  },
  computed: {
    token () {
      return this.$store.state.permission.token
    }
  },
  watch: {
    $route () {
      this.updatePageName()
    }
  },
  methods: {
    isPageActive: function (i) {
      if (this.pageName === i) {
        return 'main-nav-button main-nav-button-activated'
      } else {
        return 'main-nav-button'
      }
    },
    updatePageName: function () {
      this.pageName = document.pageName
    },
    isExternalSite: function (link) {
      for (const i in this.externalSite) {
        if (link === this.externalSite[i]) {
          return true
        }
      }
      return false
    }
  }
}
</script>

<style>
@media (max-width: 962px) {
  .main-nav-button {
    display: none;
  }
}
.main-nav-button-activated {
  background: #434242;
}
</style>
