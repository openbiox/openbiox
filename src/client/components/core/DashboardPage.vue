<template>
  <b-plugin-page :tools-data=toolsData :used-component="usedComponent" :routerPushPath="routerPushPath" :useFloatSideNav="false" :usedExtraComponentes="usedExtraComponentes" sideNavTitle="List of Dashboard"></b-plugin-page>
</template>

<script>
import toolsData from '@/router/pages/DashboardPagePlugins.json'
import usedComponent from '@/components/base/pluginable/BaseUseComonent'
export default {
  components: {
    'b-plugin-page': () =>
      import('@/components/base/pluginable/BasePluginPage')
  },
  data () {
    return {
      toolsData: toolsData,
      usedComponent: usedComponent,
      usedExtraComponentes: [null],
      routerPushPath: '/dashboard/overview'
    }
  }
}
</script>

<style>
@media only screen and (max-width: 1200px) {
  .float-left-nav {
    display: none;
  }
}
</style>
