<template>
  <b-expand-card title="Table of openbiox members" subtitle="Registered members" :usedComponent="usedComponnent"/>
</template>

<script>
export default {
  components: {
    'b-expand-card': () => import('@/components/base/card/BaseExpandCard.vue')
  },
  data () {
    return ({
      usedComponnent: 'components/members/ContributionTable.vue'
    })
  }
}
</script>
