<template>
  <v-footer height="auto" color="grey darken-3">
    <v-layout justify-center row wrap>
      <v-custom-license></v-custom-license>
       <div v-for="(link, href, index) in links" :key="index" class="nav-div">
        <router-link v-if="!isExternalSite(link)"  :to="href" >
          <v-btn
            dark
            flat
            round
            color="white"
            class="without-text-transform"
          >{{ link }}</v-btn>
        </router-link>
        <v-btn v-else
            dark
            flat
            round
            target="_blank"
            color="white"
            class="without-text-transform"
            :href="href">{{ link }}</v-btn>
      </div>
      <v-flex
        dark
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >openbiox is intended for research purposes only
        <br>
        <strong>&copy;2019 openbiox</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
import footerNavLinks from '@/router/pages/BaseFooterNav'
import externalSite from '@/router/pages/ExternalSites.json'

export default {
  name: 'BaseFooter',
  components: {
    'v-custom-license': () => import('@/components/base/button/BaseLicense')
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      links: footerNavLinks,
      externalSite: externalSite
    }
  },
  methods: {
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

<style scoped>
#footer {
  width: 100%;
  text-align: center;
}
.without-text-transform {
  text-transform: none !important;
}
</style>
