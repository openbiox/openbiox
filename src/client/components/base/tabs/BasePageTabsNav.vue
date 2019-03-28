<template>
  <div class="elevation-4 top-tabnav">
    <v-tabs grow show-arrows fixed-tabs style="text-align:center" centered :value="activeTab()">
      <router-link
        :to="item.href"
        v-for="(item,index) in tabItems"
        :key="index"
        style="width:100%"
      >
        <v-tab multiple show-arrows grow class="without-text-transform" style="height:100%">
          <span :id="'v-top-tab-' + index">{{ item.name }}</span>
        </v-tab>
      </router-link>
    </v-tabs>
  </div>
</template>

<script>
export default {
  props: ['tabItems'],
  data () {
    return {
      sectionName: null,
      itemName: null
    }
  },
  watch: {
    $route () {
      this.fetchData()
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    activeTab () {
      for (var i = 0; i < this.tabItems.length; i++) {
        if (this.tabItems[i].sectionName === this.sectionName) {
          return i
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
    }
  }
}
</script>

<style>
.top-tabnav {
  height: 50px;
  padding-bottom: 30px;
}
.without-text-transform {
  text-transform: none !important;
}
</style>
