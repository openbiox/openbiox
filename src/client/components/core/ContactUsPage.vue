<template>
  <div>
    <v-container grid-list-xl>
      <v-breadcrumbs :items="navItems" divider=">"></v-breadcrumbs>
      <v-members-card
        :members-data="membersData"
        title="Board committee"
        members-title-key="committee"
      />
    </v-container>
    <div class="text-xs-center">
      <v-rating v-model="rating" readonly></v-rating>
    </div>
    <v-container>
      <v-layout row wrap>
        <v-flex md12 style="text-align:center">
          <h2>Send message</h2>
          <br>
        </v-flex>
        <v-flex md12>
          <form>
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              label="Name"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
            <v-autocomplete
              ref="keyword"
              v-model="keyword"
              :error-messages="keywordErrors"
              :items="keywords"
              label="Keyword"
              placeholder="Select..."
              required
              multiple
              @change="$v.keyword.$touch()"
              @blur="$v.keyword.$touch()"
            ></v-autocomplete>
            <v-textarea
              v-model="text"
              :error-messages="textErrors"
              required
              @change="$v.text.$touch()"
              @blur="$v.text.$touch()"
            >
              <template v-slot:label>
                <div>Text</div>
              </template>
            </v-textarea>
            <div class="text-xs-center">
              <v-btn @click="submit" flat>submit</v-btn>
              <v-btn @click="clear" flat>clear</v-btn>
            </div>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import membersData from '@/assets/data/members/members.json'

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    keyword: { required },
    text: { required }
  },
  components: {
    'v-members-card': () => import('@/components/members/MembersCard')
  },
  data: () => ({
    rating: 5,
    name: '',
    email: '',
    keyword: null,
    text: '',
    keywords: ['application', 'feedback', 'suggestion', 'donation'],
    alert: true,
    membersData: membersData,
    navItems: [
      {
        text: 'Home',
        disabled: false,
        href: '/'
      },
      {
        text: 'Contact Us',
        disabled: true,
        href: '/contact'
      }
    ]
  }),

  computed: {
    textErrors () {
      const errors = []
      if (!this.$v.text.$dirty) return errors
      !this.$v.text.required && errors.push('Text is required')
      return errors
    },
    keywordErrors () {
      const errors = []
      if (!this.$v.keyword.$dirty) return errors
      !this.$v.keyword.required && errors.push('Keyword is required')
      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  },

  methods: {
    submit () {
      this.$v.$touch()
      window.open('mailto:committee@openbiox.org?subject=message from ' + this.name + 'send to openbiox committee (' + this.keyword + ')' + '&body=' + this.text, '_blank')
    },
    clear () {
      this.$v.$reset()
      this.text = ''
      this.name = ''
      this.email = ''
      this.keyword = null
    }
  }
}
</script>
