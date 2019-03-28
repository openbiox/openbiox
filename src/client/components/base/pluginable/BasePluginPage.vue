<template>
  <div style="min-height:768px">
    <v-container>
      <v-layout wrap align-center justify-space-between row fill-height v-if="useFloatSideNav">
        <v-flex md4 class="float-left-nav">
          <v-custom-float-left-nav :sideNavData="sideNavData" :sideNavTitle="sideNavTitle"/>
        </v-flex>
        <v-flex xs12 md12 lg8 style="z-index:2" class="right-application-box">
          <v-flex xs12>
            <v-custom-subpage-top-nav :tabItems="tabItems"/>
            <br>
          </v-flex>
          <v-flex xs12 v-for="(toolData, key2) in tools" :key="'k2' + key2">
            <component :is="usedComponent" :tooldata="toolData"></component>
            <br>
          </v-flex>
        </v-flex>
      </v-layout>
      <v-layout wrap v-else>
        <v-flex xs12 md12 lg12 style="z-index:2" class="right-application-box">
          <v-flex xs12>
            <v-custom-subpage-top-nav :tabItems="tabItems"/>
            <br>
          </v-flex>
          <v-flex xs12 v-for="(toolData, key2) in tools" :key="'k2' + key2">
            <component :is="usedComponent" :tooldata="toolData"></component>
            <br>
            <div v-if="usedExtraComponentes">
              <component
                v-for="(usedExtraComponent, key3) in usedExtraComponentes"
                :is="usedExtraComponent"
                :tooldata="toolData"
                :key="'k3' + key3"
              ></component>
              <br>
            </div>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ['toolsData', 'usedComponent', 'usedExtraComponentes', 'routerPushPath', 'useFloatSideNav', 'sideNavTitle'],
  components: {
    'v-custom-subpage-top-nav': () =>
      import('@/components/base/tabs/BasePageTabsNav'),
    'v-custom-float-left-nav': () =>
      import('@/components/base/sidebar/BaseFloatLeftNav')
  },
  data: () => ({
    tabItems: [],
    sideNavData: [],
    tools: [],
    sectionName: null,
    itemName: null,
    query: null
  }),
  mounted () {
    this.sideNavData = this.toolsData
    this.getTabItems()
    this.fetchData()
    this.getCardItems()
    if (this.routerPushPath && !this.sectionName) {
      this.$router.push({ path: this.routerPushPath })
    }
  },
  watch: {
    $route () {
      this.fetchData()
      this.tools = []
      this.getTabItems()
      this.getCardItems()
      if (!this.sectionName) {
        this.$router.push({ path: this.routerPushPath })
      }
    }
  },
  methods: {
    getTabItems: function () {
      var userGroup = localStorage.getItem('userGroup') ? localStorage.getItem('userGroup') : []
      this.tabItems = []
      for (var i = 0; i < this.sideNavData.length; i++) {
        if (!this.isUserGroupNotAllow(this.sideNavData[i].userGroup, userGroup)) {
          this.tabItems.push({
            name: this.sideNavData[i].name,
            sectionName: this.sideNavData[i].sectionName,
            href: this.sideNavData[i].href
          })
        }
      }
    },
    getCardItems () {
      for (var i = 0; i < this.sideNavData.length; i++) {
        if (this.sideNavData[i].subItems) {
          for (var j = 0; j < this.sideNavData[i].subItems.length; j++) {
            if (
              this.sideNavData[i].subItems[j].component &&
              this.isShowTool(
                this.sideNavData[i].subItems[j].sectionName,
                this.sideNavData[i].subItems[j].itemName,
                this.sideNavData[i].subItems[j].userGroup
              )
            ) {
              this.tools.push(this.sideNavData[i].subItems[j])
            }
          }
        }
      }
    },
    fetchData () {
      // replace getPost with your data fetching util / API wrapper
      if (this.$route.params.sectionName) {
        this.sectionName = this.$route.params.sectionName
      } else {
        this.sectionName = null
      }
      if (this.$route.params.itemName) {
        this.itemName = this.$route.params.itemName
      } else {
        this.itemName = null
      }
      if (this.$route.query) {
        this.query = this.$route.query
      }
    },
    isUserGroupNotAllow (userGroupAllow, userGroup) {
      if (userGroupAllow) {
        if (userGroup === []) {
          return false
        } else if (userGroupAllow.length && userGroup.length) {
          for (var i = 0; i < userGroupAllow.length; i++) {
            for (var j = 0; j < userGroup.length; j++) {
              if (userGroupAllow[i] === userGroup[j]) {
                return false
              }
            }
          }
          return true
        } else if (userGroupAllow.length) {
          for (i = 0; i < userGroupAllow.length; i++) {
            if (userGroupAllow[i] === userGroup) {
              return false
            }
          }
          return true
        } else if (userGroup.length) {
          for (i = 0; i < userGroup.length; i++) {
            if (userGroup[i] === userGroupAllow) {
              return false
            }
          }
        } else if (userGroupAllow === userGroup) {
          return false
        } else {
          return true
        }
      }
    },
    isShowTool (sectionName, itemName, userGroupAllow) {
      var isUserGroupAllow = true
      var userGroup = localStorage.getItem('userGroup') ? localStorage.getItem('userGroup') : []
      isUserGroupAllow = !this.isUserGroupNotAllow(userGroupAllow, userGroup)
      if (sectionName === this.sectionName && this.itemName === null && isUserGroupAllow) {
        return true
      } else if (sectionName === this.sectionName && this.itemName === itemName && isUserGroupAllow) {
        return true
      } else {
        return false
      }
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
