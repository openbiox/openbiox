<template>
  <v-btn color="red lighten-2" dark class="text-capitalize" @click="exportCsv">CSV</v-btn>
</template>

<script>
import json2csv from 'json2csv'
import saveAs from 'file-saver'
import uniqueFilename from 'unique-filename'
export default {
  props: ['data'],
  data () {
    return {}
  },
  methods: {
    exportCsv () {
      if (this.data) {
        var csv = json2csv.parse(this.data)
        var blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
        saveAs(blob, uniqueFilename('') + '.csv')
      }
    }
  }
}
</script>
