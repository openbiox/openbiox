<template>
  <v-dialog v-model="loading" hide-overlay persistent width="450" heigth="450">
    <v-card color="primary" dark>
      <v-card-text style="font-size:1.2em">
        {{ loadingText }}
        <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['loadingText', 'loading'],
  data () {
    return {}
  }
}
</script>
