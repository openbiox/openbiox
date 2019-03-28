<template>
<div>

</div>
</template>

<script>
import { mapMutations } from 'vuex'
import { logoutCleanLocalStoreage } from '@/utils/auth'
export default {
  data () {
    return {}
  },
  mounted () {
    this.changeLogin({ token: null, uuid: null, userId: null })
    logoutCleanLocalStoreage()
    this.$router.push({ path: '/login' })
  },
  methods: {
    ...mapMutations(['changeLogin'])
  }
}
</script>
