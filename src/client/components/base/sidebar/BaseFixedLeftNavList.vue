<template>
  <v-list light one-line>
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>
          <span class="headline">openbiox v0.1.0</span>
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>
          <span>Main</span>
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <b-sidebar-list-group :sideNavData="sideNavData"/>
    <br>
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>
          <span>Extra links</span>
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <b-sidebar-list-group :sideNavData="sideNavDataExta"/>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    sideNavData: require('@/router/pages/BaseSideNavMainSite.json'),
    sideNavDataExta: require('@/router/pages/BaseSideNavExtraSite.json')
  })
}
</script>
