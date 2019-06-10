<template>
  <v-container grid-list-md class="text-xs-center">
    <v-layout wrap row align-center justify-space-between fill-height>
      <v-flex xs12>
        <v-card-title>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-progress-linear v-show="loading" :indeterminate="loading"></v-progress-linear>
      </v-flex>
      <v-flex xs12>
        <div class="tableHeader">
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="tableData"
            item-key="id"
            :search="search"
            :pagination.sync="pagination"
          >
            <template slot="headers" slot-scope="props">
              <tr>
                <th>
                  <v-checkbox
                    :input-value="props.all"
                    :indeterminate="props.indeterminate"
                    hide-details
                    @click="toggleAll"
                  ></v-checkbox>
                </th>
                <th
                  v-for="header in props.headers"
                  :key="header.text"
                  :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                  @click="changeSort(header.value)"
                >
                  <v-icon small v-if="header.text != 'Action'">arrow_upward</v-icon>
                  {{ header.text }}
                </th>
              </tr>
            </template>
            <template slot="items" slot-scope="props">
              <tr :active="props.selected" @click="props.selected = !props.selected">
                <td>
                  <v-checkbox :input-value="props.selected" primary hide-details></v-checkbox>
                </td>
                <td>{{ props.item.id }}</td>
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.title }}</td>
                <td>{{ props.item.org }}</td>
                <td>{{ props.item.join_date }}</td>
              </tr>
            </template>
            <v-alert
              slot="no-results"
              :value="true"
              color="error"
              icon="warning"
            >Your search for "{{ search }}" found no results.</v-alert>
          </v-data-table>
          <div class="text-xs-center pt-2">
            <v-pagination v-model="pagination.page" :length="getPages()"></v-pagination>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import moment from 'moment'
import membersData from '@/assets/data/members/members.json'

export default {
  data () {
    return {
      expand: true,
      dialog: false,
      userDataPart: {},
      userData: {},
      clickCounts: 0,
      search: '',
      loading: true,
      pagination: {
        sortBy: 'id',
        descending: null,
        rowsPerPage: 5,
        totalItems: null
      },
      selected: [],
      headers: [
        {
          text: 'ID',
          align: 'left',
          sortable: true,
          value: 'id'
        },
        { text: 'Name', value: 'name', align: 'center' },
        { text: 'Title', value: 'title', align: 'center' },
        { text: 'Org', value: 'org', align: 'center' },
        {
          text: 'Join Date',
          value: 'join_date',
          align: 'center',
          sortable: true
        }
      ],
      usergroup: {},
      tableData: [],
      pages: []
    }
  },
  created () {
    this.loading = true
    this.loading = false
    this.tableData = membersData
    this.pagination.totalItems = this.tableData.length
  },
  methods: {
    toggleAll () {
      this.clickCounts++
      if (this.clickCounts % 2 === 0) {
        return 0
      } else if (this.selected.length > 0) this.selected = []
      else {
        this.selected = this.tableData.slice()
      }
    },
    changeSort (column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    },
    getPages () {
      if (
        this.pagination.rowsPerPage === null ||
        this.pagination.totalItems === null
      ) { return 0 }
      return Math.ceil(
        this.pagination.totalItems / this.pagination.rowsPerPage
      )
    },
    momentFormat (x) {
      return moment(x).format('YYYY/MM/DD')
    }
  }
}
</script>
