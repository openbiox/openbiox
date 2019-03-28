<template>
  <div>
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
    <v-toolbar fixed app clipped-left>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>
        <img :src="require('@/assets/logo.png')" height="30" style = "margin-top:10px;margin-right:15px">
      </v-toolbar-title>
      <div v-for="(link, href) in links" :key="link">
        <router-link v-if="link != 'Docs'"  :to="href" >
          <v-btn
            color="black"
            flat
            round
            class="without-text-transform"
            :class="isPageActive(link)"
          >{{ link }}</v-btn>
        </router-link>
        <v-btn v-else  color="black"
            flat
            round
            class="without-text-transform"
            :class="isPageActive(link)"
            target="_blank"
            :href="href">{{ link }}</v-btn>
      </div>
      <v-spacer></v-spacer>
      <router-link v-if="!token" to="/login">
        <v-btn flat round class="main-nav-button without-text-transform">Sign in</v-btn>
      </router-link>
      <router-link v-if="token" to="/logout">
        <v-btn flat round class="main-nav-button without-text-transform">Logout</v-btn>
      </router-link>
      <v-user-avator v-if="token"/>
    </v-toolbar>
  </div>
</template>

<script>
import headerNavLinks from '@/router/pages/BaseHeaderNav'
import { logoutCleanLocalStoreage } from '@/utils/auth'
import { mapMutations } from 'vuex'

export default {
  name: 'b-nav',
  components: {
    'v-custom-side-bar': () => import('@/components/base/sidebar/BaseFixedLeftNavList'),
    'v-user-avator': () => import('@/components/base/header/BaseAvator')
  },
  data () {
    return {
      sideNav: false,
      pageName: document.pageName,
      links: headerNavLinks
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
  mounted () {
    this.$nextTick(function () {
      setInterval(this.checkToken, 1000 * 120)
    })
  },
  methods: {
    ...mapMutations(['changeLogin']),
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
    checkToken: function () {
      if (this.token) {
        var _this = this
        _this.$ajax
          .post('/api/check/token')
          .then(function (response) {
            if (response.data.ret_code === 1) {
              _this.changeLogin({ token: null, uuid: null, userId: null })
              logoutCleanLocalStoreage()
              window.location.reload()
            }
          })
      }
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
  background: #d3d1d1;
}
div a {
  text-decoration: none;
  color: #000000;
}
div a:hover {
  color: #000000;
}
.without-text-transform {
  text-transform: none !important;
}
</style>
