<template>
  <v-layout justify-center>
    <v-flex xs12 sm12 md12 lg12>
      <v-card ref="form" class="elevation-0">
        <v-card-text>
          <v-text-field
            ref="username"
            v-model="username"
            :rules="[
              () => !!username || 'This field is required',
              () => !!username && username.length <= 40 || 'username must be less than 40 characters'
            ]"
            :error-messages="errorMessages"
            label="User Name"
            placeholder="[a-zA-Z_0-9]"
            counter="40"
            required
          ></v-text-field>
          <v-text-field
            ref="password"
            :rules="[
              () => !!password || 'This field is required',
              () => !!password && password.length <= 40 || 'password must be less than 40 characters'
            ]"
            v-model="password"
            label="Password"
            placeholder="******"
            counter="40"
            required
          ></v-text-field>
           <v-text-field
            ref="password2"
            :rules="[
              () => !!password2 || 'This field is required',
              () => !!password2 && password2.length <= 40 || 'password must be less than 40 characters',
              () => !!password2 && password2 === password || 'password not coninstant with above'
            ]"
            v-model="password2"
            label="Confirmed password"
            placeholder="******"
            counter="40"
            required
          ></v-text-field>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    errorMessages: '',
    username: null,
    password: null,
    password2: null
  }),

  computed: {
    form () {
      return {
        name: this.name,
        password: this.password
      }
    }
  },

  watch: {
    name () {
      this.errorMessages = ''
    }
  },

  methods: {
    addressCheck () {
      this.errorMessages = this.address && !this.name
        ? 'Hey! I\'m required'
        : ''

      return true
    },
    resetForm () {
      this.errorMessages = []
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        this.$refs[f].reset()
      })
    },
    submit () {
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true

        this.$refs[f].validate(true)
      })
    }
  }
}
</script>
