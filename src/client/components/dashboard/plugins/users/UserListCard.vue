<template>
  <b-expand-card title="Management of users" subtitle="Table of User Accounts" :usedComponent="usedComponnent"/>
</template>

<script>
export default {
  components: {
    'b-expand-card': () => import('@/components/base/card/BaseExpandCard.vue')
  },
  data () {
    return ({
      usedComponnent: 'components/dashboard/plugins/users/UserListTable'
    })
  }
}
</script>
