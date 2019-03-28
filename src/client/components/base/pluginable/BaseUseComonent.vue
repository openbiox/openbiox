<template>
  <component :is="usedComponent" :tooldata="tooldata"></component>
</template>

<script>
export default {
  props: ['tooldata'],
  data: () => ({
    dialog: false,
    usedComponent: null,
    useParams: false
  }),
  watch: {
    dialog (val) {
      val || this.close()
    },
    $route () {
      if (this.tooldata.component) {
        this.usedComponent = () => import('@/' + this.tooldata.component)
      }
    }
  },
  mounted () {
    if (this.tooldata.component) {
      this.usedComponent = () => import('@/' + this.tooldata.component)
    }
    if (!this.tooldata.params) {
      this.tooldata.params = {}
    }
  }
}
</script>
