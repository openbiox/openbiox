<template>
  <v-btn color="red lighten-2" dark class="text-capitalize" @click="exportJson">JSON</v-btn>
</template>

<script>
import saveAs from 'file-saver'
import uniqueFilename from 'unique-filename'
export default {
  props: ['data'],
  data () {
    return {}
  },
  methods: {
    exportJson () {
      if (this.data) {
        var blob = new Blob([JSON.stringify(this.data)], { type: 'text/json;charset=utf-8' })
        saveAs(blob, uniqueFilename('') + '.json')
      }
    }
  }
}
</script>
