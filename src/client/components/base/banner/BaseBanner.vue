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
  height: 350px;
  background:url(https://s2.ax1x.com/2019/04/25/Eevi4O.jpg) no-repeat left top;
  padding-top: 140px;
  font-size: 40px;
  color: white;
  text-align: center;
  box-shadow: 2px 2px 2px #0c0c0c;
}
</style>
