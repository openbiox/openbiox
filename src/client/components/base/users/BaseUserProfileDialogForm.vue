<template>
  <v-form ref="userSettingForm">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 md12>
          <span class="headline">Account information</span>
        </v-flex>
        <v-flex xs12 sm12 md12 v-if="showbtn != 'Submit'">
          <v-text-field
            v-validate="'required'"
            v-model="userDataFormated.uuid"
            :error-messages="errors.collect('uuid')"
            label="User UUID"
            data-vv-name="uuid"
            disabled
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md12>
          <v-text-field
            v-validate="'required|max:40'"
            v-model="userDataFormated.username"
            :counter="40"
            :error-messages="errors.collect('username')"
            label="Username"
            data-vv-name="username"
            required
            :disabled="disabled"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md12 v-if="password && showbtn === 'Submit'">
          <v-text-field
            v-validate="'required'"
            v-model="userDataFormated.password"
            :error-messages="errors.collect('password')"
            label="Password"
            data-vv-name="password"
            type="password"
            :disabled="disabled"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md12 v-if="password && showbtn === 'Submit'">
          <v-text-field
            v-validate="'required'"
            v-model="userDataFormated.confirmPassword"
            :error-messages="errors.collect('confirmPassword')"
            label="Confirmed password"
            data-vv-name="confirmPassword"
            type="password"
            :disabled="disabled"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-text-field
            v-validate="'max:40'"
            v-model="userDataFormated.name"
            :counter="40"
            :error-messages="errors.collect('name')"
            label="Name"
            data-vv-name="name"
            :disabled="disabled"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-text-field
            v-validate="'required|email'"
            v-model="userData.email"
            :error-messages="errors.collect('email')"
            label="E-mail"
            data-vv-name="email"
            :disabled="disabled"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-select
            v-model="userDataFormated.usergroup"
            :items="userGroupItems"
            attach
            chips
            label="User Group"
            :error-messages="errors.collect('usergroup')"
            data-vv-name="usergroup"
            multiple
            required
            :disabled="userGroupDisabled"
          ></v-select>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-select
            v-model="userDataFormated.gender"
            :items="genderItems"
            attach
            chips
            label="Gender"
            :error-messages="errors.collect('gender')"
            data-vv-name="gender"
            required
            :disabled="disabled"
          ></v-select>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-switch :label="enabled" :disabled="disabled" v-model="userDataFormated.is_active"></v-switch>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-text-field
            v-model="userDataFormated.age"
            :error-messages="errors.collect('age')"
            label="Age"
            data-vv-name="age"
            type="number"
            :disabled="disabled"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md12>
          <v-text-field
            v-model="userDataFormated.avatar"
            :error-messages="errors.collect('avatar')"
            label="Avatar"
            data-vv-name="avatar"
            :disabled="disabled"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md12>
          <v-text-field
            v-model="userDataFormated.department"
            :error-messages="errors.collect('department')"
            label="Department"
            data-vv-name="department"
            :disabled="disabled"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md12>
          <v-text-field
            v-model="userDataFormated.institution"
            :error-messages="errors.collect('institution')"
            label="Institution"
            data-vv-name="institution"
            :disabled="disabled"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md12>
          <v-text-field
            v-model="userDataFormated.location"
            :error-messages="errors.collect('location')"
            label="Location"
            data-vv-name="location"
            :disabled="disabled"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-text-field
            v-model="userDataFormated.phone"
            :error-messages="errors.collect('phone')"
            label="Phone"
            data-vv-name="phone"
            :disabled="disabled"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-text-field
            v-model="userDataFormated.wechat"
            :error-messages="errors.collect('wechat')"
            label="Wechat"
            data-vv-name="wechat"
            :disabled="disabled"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6 v-if="showbtn != 'Submit'">
          <v-text-field
            v-validate="'required'"
            v-model="userDataFormated.last_login_time"
            :error-messages="errors.collect('last_login_time')"
            label="Last login time"
            data-vv-name="last_login_time"
            disabled
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6 v-if="showbtn != 'Submit'">
          <v-text-field
            v-model="userDataFormated.last_login_ip"
            :error-messages="errors.collect('last_login_ip')"
            label="Last login ip"
            data-vv-name="last_login_ip"
            disabled
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md12 v-if="showbtn != 'Submit'">
          <v-text-field
            v-model="userDataFormated.join_date"
            :error-messages="errors.collect('join_date')"
            label="Join date"
            data-vv-name="join_date"
            disabled
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md12 v-if="password && showbtn === 'Update'">
          <span class="headline">Change Password</span>
          <v-text-field
            v-model="userDataFormated.oldpassword"
            :error-messages="errors.collect('oldpassword')"
            label="Old password"
            data-vv-name="oldpassword"
            type="password"
            :disabled="disabled"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md12 v-if="password && showbtn === 'Update'">
          <v-text-field
            v-model="userDataFormated.newpassword"
            :error-messages="errors.collect('newpassword')"
            label="New password"
            data-vv-name="newpassword"
            type="password"
            :disabled="disabled"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md12 v-if="password && showbtn === 'Update'">
          <v-text-field
            v-model="userDataFormated.confirmNewPassword"
            :error-messages="errors.collect('confirmNewPassword')"
            label="Confirmed new password"
            data-vv-name="confirmNewPassword"
            type="password"
            :disabled="disabled"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 class="text-xs-center" v-if="showbtn">
          <v-btn
            :disabled="loadingDialog"
            :loading="loadingDialog"
            @click="update"
            color="primary"
          >{{ showbtn }}</v-btn>
        </v-flex>
        <b-progress-message :loading="loadingDialog" :loadingText="loadingText"></b-progress-message>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import moment from 'moment'
import crypto from 'crypto'

Vue.use(VeeValidate)

export default {
  name: 'v-users-setting-form',
  $_veeValidate: {
    validator: 'new'
  },
  props: ['userData', 'disabled', 'password', 'showbtn', 'isavatar'],
  data: () => ({
    dialog: false,
    loadingDialog: false,
    loadingText: '',
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    userGroupItems: ['Admin', 'User', 'Visitor'],
    genderItems: ['Male', 'Female'],
    checkbox: null,
    dictionary: {
      attributes: {
        email: 'E-mail Address'
        // custom attributes
      },
      custom: {
        name: {
          required: () => 'Name can not be empty',
          max: 'The name field may not be greater than 40 characters'
          // custom messages
        },
        username: {
          required: () => 'Username can not be empty',
          max: 'The name field may not be greater than 40 characters'
          // custom messages
        }
      }
    }
  }),
  mounted () {
    this.$validator.localize('en', this.dictionary)
    if (this.showbtn === 'Update') {
      this.loadingText = 'Updating......'
    } else {
      this.loadingText = 'Submiting......'
    }
  },
  computed: {
    enabled: function () {
      if (this.userDataFormated.is_active) {
        return 'Account is enabled'
      } else {
        return 'Account is disabled'
      }
    },
    userGroupDisabled () {
      if (this.isavatar) {
        return true
      } else {
        return this.disabled
      }
    },
    userDataFormated: function () {
      return this.formatUserData(this.userData)
    }
  },
  methods: {
    momentFormat (x) {
      return moment(x).format('YYYY-MM-DD HH:mm:ss')
    },
    userGroupFormat (x) {
      var userGroup = []
      for (var i = 0; i < x.length; i++) {
        if (x[i] === 1 || x[i] === 'Admin') {
          userGroup.push('Admin')
        } else if (x[i] === 2 || x[i] === 'User') {
          userGroup.push('User')
        } else {
          userGroup.push('Visitor')
        }
      }
      return userGroup
    },
    formatUserData (userData) {
      if (userData.join_date) {
        userData.join_date = this.momentFormat(userData.join_date)
      }
      if (userData.last_login_time) {
        userData.last_login_time = this.momentFormat(userData.last_login_time)
      }
      if (userData.usergroup) {
        userData.usergroup = this.userGroupFormat(userData.usergroup)
      }
      if (userData.last_login_ip) {
        userData.last_login_ip = userData.last_login_ip.replace(/'/g, '')
      }
      return userData
    },
    cryptoPassword: function (password) {
      let md5 = crypto.createHash('md5')
      return md5.update(password).digest('hex')
    },
    update () {
      this.$validator.validateAll().then(() => {
        if (
          this.showbtn === 'Submit' &&
          (!this.userDataFormated.email || !this.userDataFormated.username)
        ) {
          return ''
        }
        this.loadingDialog = true
        var _this = this
        if (!_this.userDataFormated.usergroup) {
          _this.userDataFormated.usergroup = ['User']
        }
        var api = ''
        if (_this.showbtn === 'Update') {
          api = '/api/set/user'
        } else {
          api = '/api/add/user'
        }
        _this.$ajax
          .post(api, {
            userData: _this.userDataFormated
          })
          .then(function (response) {
            if (response.data.ret_code === 0) {
              setTimeout(() => {
                _this.loadingText = 'Success.'
              }, 700)
              setTimeout(() => {
                _this.loadingDialog = false
                _this.$router.push({ query: { r: Math.random() } })
              }, 1500)
            } else {
              setTimeout(() => {
                _this.loadingText = 'Failed: ' + response.data.msg
              }, 700)
              setTimeout(() => {
                _this.loadingDialog = false
              }, 3000)
            }
            if (_this.showbtn === 'Update') {
              _this.loadingText = 'Updating......'
            } else {
              _this.loadingText = 'Submiting......'
            }
          })
      })
    }
  }
}
</script>

<style>
.user-setting-form {
  color: black;
}
</style>
