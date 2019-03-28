<template>
    <div class="text-xs-left">
    <span><b><p>{{label}}</p></b></span>
    <v-progress-linear
      :size="50"
      :height="20"
      :value="value"
      :color="color"
    >
      {{ value }}
    </v-progress-linear>
  </div>
</template>

<script>
export default {
  props: ['value', 'label', 'color'],
  data () {
    return {
      interval: {}
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
