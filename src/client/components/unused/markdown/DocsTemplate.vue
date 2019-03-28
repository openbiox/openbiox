<template>
  <div>
    <v-container style="min-height:1000px">
      <v-layout text-xs-center justify-center align-center>
        <v-flex md4 class="docs-left-nav-flex">
          <v-custom-left-nav :sideNavData="sideNavData" sideNavTitle="Core documents"/>
        </v-flex>
        <v-flex xs12 md8 style="margin-left:-10px;width:100%;z-index:2">
          <v-card class="elevation-4 mainText text-xs-justify markdown-body docs-right-contents">
            <b-markdown v-if="markownData != null" :text="markownData"></b-markdown>
          </v-card>
          <br>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import '@/assets/css/markdown.css'
export default {
  props: ['sideNavData'],
  components: {
    'v-custom-left-nav': () => import('@/components/base/sidebar/BaseFloatLeftNav'),
    'b-markdown': () => import('@/components/base/markdown/BaseMarkdown')
  },
  data: () => ({
    drawer: null,
    markownMeta: [],
    sideNavData: this.sideNavData,
    markownData: null,
    sectionName: null,
    itemName: null,
    query: null
  }),
  mounted () {
    this.fetchData()
    this.getMarkownData()
  },
  watch: {
    $route () {
      this.fetchData()
      this.getMarkownData()
    }
  },
  methods: {
    getMarkownData: function () {
      var vm = this
      if (vm.sectionName && vm.itemName) {
        this.$ajax
          .get('/api/docs/get/' + vm.sectionName + '/' + vm.itemName + '.md')
          .then(function (response) {
            vm.markownData = response.data
          })
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
      } else {
        this.query = null
      }
    }
  }
}
</script>

<style>
.mainText {
  font-size: 1.1em;
}

@media only screen and (max-width: 1200px) and (min-width: 1000px) {
  .docs-left-nav-flex {
    display: none;
  }
  .docs-right-contents {
    margin-left: -200px;
    margin-right: -220px;
  }
}
</style>
