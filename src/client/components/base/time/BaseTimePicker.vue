<template>
  <div>
    <v-time-picker v-model="picker" :landscape="landscape"></v-time-picker>
  </div>
</template>

<script>
export default {
  data () {
    return {
      picker: null,
      landscape: true
    }
  }
}
</script>
