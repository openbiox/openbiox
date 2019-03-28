<template>
  <div>
    <v-date-picker v-model="picker" :landscape="landscape" :reactive="reactive"></v-date-picker>
  </div>
</template>

<script>
export default {
  data () {
    return {
      picker: new Date().toISOString().substr(0, 10),
      landscape: true,
      reactive: false
    }
  }
}
</script>
