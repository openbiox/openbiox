<template>
  <div>
    <v-progress-circular
      :rotate="360"
      :size="120"
      :width="15"
      :value="value"
      :color="color"
    >{{ value }}</v-progress-circular>
    <p v-html="percentLabelFormatted"></p>
  </div>
</template>

<script>
export default {
  props: ['value', 'percentLabel', 'color'],
  data () {
    return {}
  },
  computed: {
    percentLabelFormatted () {
      if (this.percentLabel) {
        return this.percentLabel
      } else {
        return '- / -'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
