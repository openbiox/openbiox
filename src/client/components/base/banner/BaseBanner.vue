<template>
  <div id="nav-banner">{{bannerText}}</div>
</template>

<script>
export default {
  name: 'b-banner',
  data () {
    return {}
  },
  props: ['bannerText']
}
</script>

<style scoped>
#nav-banner {
  height: 250px;
  background: #3b7bee;
  padding-top: 90px;
  font-size: 40px;
  color: white;
  text-align: center;
}
</style>
