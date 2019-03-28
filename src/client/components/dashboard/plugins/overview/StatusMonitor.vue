<template>
  <v-layout wrap align-center justify-space-between row fill-height>
    <v-flex xs12 md12>
      <v-card class="elevation-4 dashbord-card-first">
        <h2>Status of Running/Queue Tasks</h2>
        <v-dashbord-tasks-bar value="70" label="Queue tasks" color="blue"/>
        <v-dashbord-tasks-bar value="50" label="Running tasks" color="red"/>
        <v-dashbord-tasks-bar value="30" label="Vistors" color="orange"/>
      </v-card>
    </v-flex>
    <v-flex xs12 md4>
      <v-card class="elevation-4 dashbord-card">
        <h2>Usage of CPU</h2>
        <v-dashbord-circle-bar
          :value="cpuUsage"
          color="indigo"
          :percentLabel="cpuUsagePercentLabel"
        />
      </v-card>
    </v-flex>
    <v-flex xs12 md4>
      <v-card class="elevation-4 dashbord-card dashbord-card-multiple">
        <h2>Usage of memory</h2>
        <v-dashbord-circle-bar
          :value="formatVal(memory.used / memory.total * 100)"
          color="blue"
          :percentLabel="memPercentLabel"
        />
      </v-card>
    </v-flex>
    <v-flex xs12 md4>
      <v-card class="elevation-4 dashbord-card dashbord-card-multiple">
        <h2>Network status</h2>
        <v-dashbord-circle-bar
          :value="formatVal((network.rx_sec + network.tx_sec) / 1024 / 36  / maxBandSpeed)"
          color="pink"
          :percentLabel="networkPercentLabel"
        />
      </v-card>
    </v-flex>
    <v-flex xs12 md4>
      <v-card class="elevation-4 dashbord-card">
        <h2>Usage of disk</h2>
        <v-dashbord-circle-bar
          :value="formatVal(disk.used / disk.total * 100)"
          color="teal"
          :percentLabel="diskPercentLabel"
        />
      </v-card>
    </v-flex>
    <v-flex xs12 md4>
      <v-card class="elevation-4 dashbord-card dashbord-card-multiple">
        <h2>Read Speed of disk</h2>
        <v-dashbord-circle-bar
          :value="formatVal(diskIO.rx_sec / 1024 / 1024  / 3.1)"
          color="purple"
          :percentLabel="diskReadPercentLabel"
        />
      </v-card>
    </v-flex>
    <v-flex xs12 md4>
      <v-card class="elevation-4 dashbord-card dashbord-card-multiple">
        <h2>Write Speed of disk</h2>
        <v-dashbord-circle-bar
          :value="formatVal(diskIO.wx_sec / 1024 / 1024  / 2.1)"
          color="red"
          :percentLabel="diskWritePercentLabel"
        />
      </v-card>
    </v-flex>
    <v-flex xs12 md12>
      <v-dashboard-env-list
        class="elevation-4 dashbord-card"
        title="Running Environment of Host System"
        :mapdata="basicInfo"
      ></v-dashboard-env-list>
    </v-flex>
    <v-flex xs12 md12>
      <v-card class="elevation-4 dashbord-card">
        <h2>Profile score</h2>
        <v-dashbord-echart-area id="dashbord-profile-score"/>
      </v-card>
    </v-flex>
    <v-flex xs12 md12>
      <v-card class="elevation-4 dashbord-card">
        <h2>Radar score</h2>
        <v-dashbord-echart-radar id="dashbord-radar-score"/>
      </v-card>
    </v-flex>
    <v-flex xs12 md12>
      <v-card class="elevation-4 dashbord-card">
        <h2>Bar score</h2>
        <v-dashbord-echart-group-bar id="dashbord-bar-score"/>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Vue from 'vue'
var formatFileSize = Vue.filter('formatFileSize')

export default {
  sockets: {
    getBasicStat: function (data) {
      this.basicInfo = data
    },
    getDiskStat: function (data) {
      this.disk = data.disk
      this.diskIO = data.diskIO
      this.diskPercentLabel = formatFileSize(this.disk.used) + ' / ' + formatFileSize(this.disk.total)
      this.diskReadPercentLabel = formatFileSize(this.formatVal(this.diskIO.rx_sec)) + '/s'
      this.diskWritePercentLabel = formatFileSize(this.formatVal(this.diskIO.wx_sec)) + '/s'
    },
    getMemStat: function (data) {
      this.memory = data
      this.memPercentLabel = formatFileSize(data.used) + ' / ' + formatFileSize(data.total)
    },
    getNetStat: function (data) {
      this.networkPercentLabel = 'Download: ' + formatFileSize(this.formatVal(data.rx_sec)) + '/s' +
        ' | Upload: ' + formatFileSize(this.formatVal(data.tx_sec)) + '/s'
      this.network = data
    },
    getCpuStat: function (data) {
      this.cpuUsage = this.formatVal(data)
      this.cpuUsagePercentLabel = this.cpuUsage + ' %'
    }
  },
  components: {
    'v-dashbord-tasks-bar': () =>
      import('@/components/dashboard/plugins/overview/LongBar'),
    'v-dashbord-circle-bar': () =>
      import('@/components/dashboard/plugins/overview/CircleBar'),
    'v-dashbord-echart-area': () =>
      import('@/components/dashboard/plugins/overview/EchartArea'),
    'v-dashbord-echart-radar': () =>
      import('@/components/dashboard/plugins/overview/EchartRadar'),
    'v-dashbord-echart-group-bar': () =>
      import('@/components/dashboard/plugins/overview/EchartGroupBar'),
    'v-dashboard-env-list': () => import('@/components/dashboard/plugins/overview/BasicInfoCard')
  },
  data () {
    return {
      basicInfo: {
      },
      disk: { used: 0, total: 0 },
      diskIO: {},
      diskPercentLabel: '',
      diskReadPercentLabel: {},
      diskWritePercentLabel: {},
      memory: { used: 0, total: 0 },
      memPercentLabel: '',
      network: {},
      networkPercentLabel: '',
      cpuUsage: 0,
      cpuUsagePercentLabel: 'n/a',
      maxBandSpeed: 6.5
    }
  },
  created () {
    var _this = this
    _this.queryData()
  },
  mounted () {
    this.$socket.connect()
  },
  destroyed () {
    this.$socket.close()
  },
  methods: {
    queryData () {
      this.$socket.emit('dashboard message', { 'query': 'overview' })
    },
    formatVal (val) {
      if (!val) {
        return '0'
      } else {
        return val.toFixed(2)
      }
    }
  }
}
</script>

<style>
@media only screen and (max-width: 1200px) {
  .float-left-nav {
    display: none;
  }
}
.dashbord-card-first {
  padding: 20px;
  text-align: center;
}
.dashbord-card {
  padding: 20px;
  margin-top: 20px;
  text-align: center;
}

.dashbord-card-multiple {
  margin-left: 4px;
}
</style>
