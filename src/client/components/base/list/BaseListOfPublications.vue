<template>
  <div id="about-me-publications">
    <v-card style="padding:20px" class="elevation-4">
      <h2 class="text-xs-center">{{ title }}</h2>
      <br>
      <v-divider></v-divider>
      <br>
      <div class="row featurette mainText" style="margin-top:0px;padding-top:0px;">
        <ul>
          <li v-for="(publication, key) in publications" v-bind:key="key">
            <i class="fas fa-landmark"></i>
            {{ publication.author }} {{ publication.title }}[J].
            <span
              style="text-decoration:underline;"
            >
              <em>
                <b>{{ publication.journal }}</b>
              </em>
            </span>
            , {{ publication.year }} {{ publication.date }}; {{ publication.volume }}
            <span
              v-if="publication.Issue != null"
            >({{ publication.Issue }})</span>
            :{{ publication.pages }}. [
            <b>DOI:</b>
            <a :href="'https://doi.org/' + publication.DOI" target="_blank">{{ publication.DOI }}</a>;
            <b>PMID:</b>
            <a :href="publication.url" target="_blank">{{ publication.PMID }}]</a>
          </li>
        </ul>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['publications', 'title'],
  data () {
    return {
    }
  }
}
</script>

<style>
#about-me-publications {
  text-align: left;
  text-justify: auto;
}
</style>
