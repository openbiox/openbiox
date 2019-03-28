<template>
  <div id="base-side-nav">
    <v-navigation-drawer
      value="true"
      class="elevation-4 docs-left-nav"
      style="min-height:400px"
      disable-route-watcher
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-title>{{ sideNavTitle }}</v-list-tile-title>
        </v-list-tile>
        <v-divider/>
        <b-sidebar-list-group :sideNavData="sideNavData"/>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: ['sideNavData', 'sideNavTitle'],
  data: () => ({}),
  created () {
    window.addEventListener('scroll', this.fixSideNav, true)
  },
  methods: {
    fixSideNav: function () {
      var baseSideNav = document.getElementById('base-side-nav')
      var t = document.documentElement.scrollTop || document.body.scrollTop
      if (t >= 275 && baseSideNav) {
        baseSideNav.style.position = 'fixed'
        baseSideNav.style.top = '80px'
      } else if (baseSideNav) {
        baseSideNav.style.position = 'absolute'
        baseSideNav.style.top = '275px'
      }
    }
  }
}
</script>

<style>
#base-side-nav {
  position: absolute;
  width: 100%;
  z-index: 2;
  top: 275px;
}

@media only screen and (max-width: 1100px) {
  .docs-left-nav {
    display: none;
  }
}

html,
body {
  width: 100%;
  margin: 0px auto;
  padding: 0px auto;
}
</style>
