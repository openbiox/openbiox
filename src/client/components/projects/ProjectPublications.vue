<template>
  <b-list-publications :publications="publications" :title="title"></b-list-publications>
</template>

<script>
import bibtexParse from 'bibtex2json'
export default {
  components: {
    'b-list-publications': () => import('@/components/base/list/BaseListOfPublications.vue')
  },
  data () {
    return {
      publications: this.getPublications(),
      title: 'Publications of openbiox projects'
    }
  },
  methods: {
    getPublications: function () {
      // vm is required
      var vm = this
      this.$ajax
        .get('/api/v1/projects/publications')
        .then(function (response) {
          var bib = bibtexParse.toJSON(response.data)
          var final = []
          for (var j = 0; j < bib.length; j++) {
            final.push(bib[j].entryTags)
          }
          vm.publications = final
        })
    }
  }
}
</script>
