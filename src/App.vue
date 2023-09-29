<script>
import { state } from './state.js'


export default {

  data() {
    return {
      state,

    }

  },
  methods: {
    filterFilms(){

      const movie_url = this.state.base_url + this.state.search_site;
   
      let result = this.state.fecthData(movie_url);

      console.log(result);
      
    },
    /* changeToFlag(){
      const lang = this.state.base_url + 'original_language&query=' + this.state.search_site;
      let resultLang = this.state.fecthData(lang);
      console.log(resultLang);
      if (lang == it) {
        lang = 'IT';
      } else {
        console.log('fail');
      }
    }, */
  }

}


</script>

<template>

  <h1>{{ state.movie }}</h1>

  <input @keyup.enter="filterFilms()" type="search" id="research_site" placeholder="Search the site…" v-model="state.search_site">
  <button @click="filterFilms()">Click me</button>
  

  <ul v-for="film in this.state.films">
    <li>{{ film.title }}</li>
    <li>{{ film.original_title }}</li>
    <li>{{ film.original_language }}</li>
    <li>{{ Math.floor(film.vote_average)}}</li>
  </ul>

</template>

<style scoped>

.body{
  margin: 0;
}

</style>
