<template>
  <v-container grid-list-md class="text-xs-center">
    <v-layout wrap row align-center justify-space-between fill-height>
      <v-flex xs12>
        <v-card-title>
          <div class="text-xs-right" style="margin-right:20px">
            <v-users-add-btn/>
          </div>
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
                <td>{{ props.item.username }}</td>
                <td>{{ props.item.email }}</td>
                <td>{{ momentFormat(props.item.join_date) }}</td>
                <td>{{ isActiveFormat(props.item.is_active) }}</td>
                <td class="justify-center layout px-0">
                  <v-users-setting-dialog
                    :userData="props.item"
                    disabled
                    icon="search"
                    :showbtn="false"
                  />
                  <v-users-setting-dialog
                    :userData="props.item"
                    :password="true"
                    icon="edit"
                    showbtn="Update"
                  />
                  <v-icon small @click="deleteItem(props.item)">delete</v-icon>
                </td>
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
import { setTimeout } from 'timers'
import moment from 'moment'

export default {
  components: {
    'v-users-setting-dialog': () =>
      import('@/components/base/users/BaseUserProfileDialog'),
    'v-users-add-btn': () =>
      import('@/components/dashboard/plugins/users/UserAddBtn.vue')
  },
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
        descending: 'asc',
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
        { text: 'User Name', value: 'username', align: 'center' },
        { text: 'Email', value: 'email', align: 'center' },
        {
          text: 'Join Date',
          value: 'join_date',
          align: 'center',
          sortable: true
        },
        { text: 'Is Active', value: 'is_active', align: 'center' },
        { text: 'Action', align: 'center', sortable: false }
      ],
      tableData: [],
      usergroup: {},
      pages: []
    }
  },
  created () {
    this.getTableData().then(data => {
      this.tableData = data.items
      for (var i = 0; i < this.tableData.length; i++) {
        this.tableData[i].usergroup = this.usergroup[this.tableData[i].id]
      }
      setTimeout(() => {
        this.loading = false
      }, 1000)
    })
  },
  watch: {
    $route () {
      this.getTableData().then(data => {
        this.tableData = data.items
        for (var i = 0; i < this.tableData.length; i++) {
          this.tableData[i].usergroup = this.usergroup[this.tableData[i].id]
        }
        setTimeout(() => {
          this.loading = false
        }, 1000)
      })
    }
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
    getTableData () {
      this.loading = true
      return new Promise(resolve => {
        var _this = this
        _this.$ajax.post('/api/get/user/list').then(function (response) {
          var items = response.data
          _this.pagination.totalItems = items.length
          _this.getUserGroupData().then(data => {
            _this.usergroup = data.usergroup
            resolve({
              items
            })
            _this.loading = false
            return ''
          })
        })
      })
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
      return moment(x).format('YYYY-MM-DD HH:mm:ss')
    },
    isActiveFormat (x) {
      if (x === 1) {
        return 'Yes'
      } else {
        return 'No'
      }
    },
    editItem (item) {
      this.editedIndex = this.tableData.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.tableData.indexOf(item)
      if (confirm('Are you sure you want to delete this item?')) {
        this.tableData.splice(index, 1)
        this.deleteApi(item.id)
      }
    },
    deleteApi (userId) {
      var _this = this
      _this.$ajax.post('/api/del/user/' + userId).then(function (response) {
        if (response.data.ret_code === 0) {
          alert('Delete success.')
        }
      })
    },
    getUserGroupData: function () {
      return new Promise(resolve => {
        var _this = this
        _this.$ajax.post('/api/get/usergroup/list').then(function (response) {
          if (response.data) {
            var usergroup = response.data
            resolve({ usergroup })
          }
        })
      })
    }
  }
}
</script>

<style scoped>
.tableHeader {
  color: black;
}
.tableHeader table tr th {
  font-size: 1.1em;
  text-align: center;
}

.tableHeader table tr td {
  font-size: 1.1em;
  text-align: center;
}

.tableHeader table tr td:nth-child(3) {
  width: 220px;
}

.download-top-tabnav {
  height: 50px;
  padding-bottom: 30px;
}
</style>
