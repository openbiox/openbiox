<template>
  <v-container id="login" style="min-height:724px" v-show="show">
    <v-layout text-xs-center wrap justify-center align-center>
      <v-flex xs12 md12 style="margin-bottom:80px">
        <h1>
        </h1>
        <h1>A community-driven bioinformatics innovation collaboration group in China.</h1>
      </v-flex>
      <v-flex xs12 md7>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login openbiox</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-card-text>
              <v-text-field
                prepend-icon="person"
                :rules="nameRules"
                name="username"
                label="Username"
                type="text"
                v-model="loginForm.username"
                required
              ></v-text-field>
              <v-text-field
                id="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
                v-model="loginForm.password"
                :rules="passwordRules"
                required
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :disabled="!valid" @click="submit" color="primary">Login</v-btn>
              <v-btn @click="clear" color="primary">Clear</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
        <b-progress-message :loading="loadingDialog" :loadingText="loadingText"></b-progress-message>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
#login {
  margin-top: 80px;
}
</style>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Login',
  data: () => ({
    show: false,
    drawer: null,
    valid: true,
    loadingDialog: false,
    loadingText: 'Logining...',
    nameRules: [v => !!v || 'User name is required'],
    passwordRules: [v => !!v || 'Password is required'],
    loginForm: {
      username: '',
      password: ''
    }
  }),
  props: {
    source: String
  },
  computed: {},
  mounted () {
    var token = this.$store.state.permission.token
    if (token !== null && token !== '') {
      this.redirect()
    } else {
      this.show = true
    }
  },
  methods: {
    ...mapMutations(['changeLogin']),
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        var _this = this
        _this.$ajax
          .post('/api/login', _this.loginForm)
          .then(function (response) {
            if (response.data.ret_code === 0) {
              _this.loadingDialog = true
              setTimeout(() => {
                _this.loadingText = 'Suceess. Redirect...'
                _this.accessToken = response.data.accessToken
                _this.changeLogin({
                  token: _this.accessToken,
                  uuid: response.data.uuid,
                  userId: response.data.userId
                })
                _this.loadingText = 'Login successful, redirecting.'
              }, 700)
              setTimeout(() => {
                _this.redirect()
              }, 1400)
            } else {
              _this.loadingDialog = true
              setTimeout(() => {
                _this.loadingText = 'Username or password are not valid.'
              }, 700)
              setTimeout(() => {
                _this.loadingDialog = false
                _this.loadingText = 'Loging....'
              }, 2800)
            }
          })
      }
    },
    redirect () {
      if (this.$route.query.redirect) {
        this.$router.push({ path: this.$route.query.redirect })
      } else {
        this.$router.push({ path: '/dashboard' })
      }
    },
    clear () {
      this.$refs.form.reset()
      this.loginTips = ''
    }
  }
}
</script>
