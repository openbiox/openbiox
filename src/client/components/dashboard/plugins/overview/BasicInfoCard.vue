<template>
  <v-card color="white lighten-1" white class="elevation-4">
    <h2>{{ title }}</h2>
    <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-progress-linear v-show="loading" :indeterminate="loading"></v-progress-linear>
    <v-data-iterator
      v-if="keyValueData"
      :items="keyValueData"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      row
      :search="search"
      select-all
    >
      <v-flex slot="item" slot-scope="props" xs12 sm12 md12 lg12 text-xs-left>
        <v-card-title>
          <h4>{{ props.item.key }}</h4>
        </v-card-title>
        <v-divider></v-divider>
        <v-list
          dense
          style="overflow-y:scroll;overflow-x:hidden;vertical-align:middle;padding-top:15px"
          align-center
          justify-space-between
          row
          fill-height
        >
          <v-list-tile>{{ props.item.value }}</v-list-tile>
        </v-list>
      </v-flex>
    </v-data-iterator>
    <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="getPages()"></v-pagination>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ['mapdata', 'title'],
  data: () => ({
    loading: true,
    keyValueData: null,
    rowsPerPageItems: [5, 10, 20, 50, 100, 200, { 'text': '$vuetify.dataIterator.rowsPerPageAll', 'value': -1 }],
    pagination: {
      rowsPerPage: 5
    },
    search: []
  }),
  mounted () {
    this.loading = true
    this.formatMapData()
  },
  watch: {
    mapdata () {
      this.formatMapData()
      this.loading = false
    }
  },
  methods: {
    formatMapData () {
      if (this.mapdata) {
        let keyValueData = Object.keys(this.mapdata).map(key => {
          return {
            key,
            value: this.mapdata[key] || 'n/a',
            section: 'systeminformation'
          }
        })
        this.pagination.totalItems = keyValueData.length
        this.keyValueData = keyValueData
      }
    },
    getPages () {
      if (
        this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) {
        return 0
      }
      return Math.ceil(
        this.pagination.totalItems / this.pagination.rowsPerPage
      )
    }
  }
}
</script>
