<template>
  <div>
    <v-menu bottom offset-x>
      <v-avatar slot="activator" @click="dialog = true" size="36px">
        <img
          v-if="userData.avatar != ''"
          :src="userData.avatar || 'https://raw.githubusercontent.com/Miachol/ftp/master/files/design/logos/MedStudio/emptyAvatar.jpg'"
          alt="Avatar"
        >
      </v-avatar>
    </v-menu>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      style="height:100%"
    >
      <v-card tile>
        <v-toolbar card dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>User settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="dialog = false">Close</v-btn>
          </v-toolbar-items>
          <v-menu bottom right offset-y>
            <v-btn slot="activator" dark icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile v-for="(item, i) in items" :key="i">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-toolbar>
        <v-users-setting-form
          :user-data="userData"
          :password="true"
          :isavatar="true"
          showbtn="Update"
        />
        <div style="flex: 1 1 auto;"></div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { logoutCleanLocalStoreage } from '@/utils/auth'

export default {
  components: {
    'v-users-setting-form': () =>
      import('@/components/base/users/BaseUserProfileDialogForm')
  },
  data () {
    return {
      dialog: false,
      userData: {},
      select: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
        { text: 'State 5' },
        { text: 'State 6' },
        { text: 'State 7' }
      ],
      items: [
        {
          title: 'Click Me'
        },
        {
          title: 'Click Me'
        },
        {
          title: 'Click Me'
        },
        {
          title: 'Click Me 2'
        }
      ]
    }
  },
  mounted () {
    this.getUserData().then(data => {
      this.userData = data.userData
    })
  },
  watch: {
    $route () {
      this.getUserData().then(data => {
        this.userData = data.userData
      })
    }
  },
  methods: {
    ...mapMutations(['changeUserGroup', 'changeLogin']),
    getUserGroupData: function () {
      return new Promise(resolve => {
        var _this = this
        _this.$ajax.post('/api/get/usergroup').then(function (response) {
          if (response.data) {
            var userGroup = response.data
            if (userGroup.ret_code) {
              _this.changeLogin({ token: null, uuid: null, userId: null })
              logoutCleanLocalStoreage()
              return ''
            }
            localStorage.setItem('userGroup', userGroup)
            _this.changeUserGroup(userGroup)
            resolve({
              userGroup
            })
          }
        })
      })
    },
    getUserData: function () {
      return new Promise(resolve => {
        var _this = this
        _this.$ajax.post('/api/get/user').then(function (response) {
          var userData = response.data[0]
          _this.getUserGroupData().then(data => {
            userData.usergroup = data.userGroup
            resolve({
              userData
            })
          })
        })
      })
    }
  }
}
</script>
