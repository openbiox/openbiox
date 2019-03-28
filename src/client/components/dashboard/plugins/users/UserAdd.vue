<template>
  <v-card class="elevation-4" style="padding:10px">
  <span class="headline">Add new account</span>
  <v-stepper v-model="e1" class="elevation-0">
    <v-stepper-header class="elevation-0">
      <v-stepper-step :complete="e1 > 1" step="1">Basic information</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Advance information</v-stepper-step>

      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-user-add-basic-input/>
        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
         <v-user-add-adv-input/>
         <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Prev
        </v-btn>
        <v-btn
          color="primary"
        >
          Submit
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  </v-card>
</template>

<script>
export default {
  components: {
    'v-user-add-adv-input': () => import('@/components/dashboard/plugins/users/UserAddAdvInput'),
    'v-user-add-basic-input': () => import('@/components/dashboard/plugins/users/UserAddBasicInput')
  },
  data () {
    return {
      e1: 0
    }
  }
}
</script>
