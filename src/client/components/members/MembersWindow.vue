<template>
  <v-card
    class="mt-3 mx-auto"
  >
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="blue darken-2"
      elevation="12"
      max-width="calc(100% - 32px)"
    >
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="title font-weight-light mb-2">Increase of members</div>
      <div class="subheading font-weight-light grey--text">openbiox</div>
      <v-divider class="my-2"></v-divider>
      <v-icon
        class="mr-2"
        small
      >
        mdi-clock
      </v-icon>
      <span class="caption grey--text font-weight-light">2019/03/03 - today</span>
    </v-card-text>
  </v-card>
</template>
<style>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>

<script>
export default {
  data: () => ({
    labels: [
      'Past',
      ' ',
      ' ',
      ' ',
      'Current (n=82)',
      ' ',
      ' ',
      ' ',
      'Future'
    ],
    value: [
      0,
      10,
      30,
      40,
      50,
      69,
      79,
      85,
      100
    ]
  })
}
</script>
