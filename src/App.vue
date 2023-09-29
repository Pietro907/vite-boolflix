<script>
import { state } from './state.js'


export default {

  data() {
    return {
      state,

    }

  },
  methods: {

    //Metodo per filtrare i film
    filterFilms() {

      const movie_url = this.state.base_url + this.state.search_site;

      //Alla varibile result gli assegno la funzione di filtro con il parametro da filtrare
      let result = this.state.fecthData(movie_url);

      //Funziona!!!
      console.log(result);

      this.state.search_site = '';

    },



    /* changeToFlag(){          
      const lang = this.state.base_url + 'original_language&query=' + this.state.search_site;     //Una prova e forse ci sono vicino??????
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
  <!-- Una prova per vedere lo state collegato -->
  <h1>{{ state.movie }}</h1>

  <!-- Input qui faccio la ricerca con nome per cercare un film  -->
  <!-- Posso inviare la richiesta premendo il tasto enter -->
  <input @keyup.enter="filterFilms()" type="search" id="research_site" placeholder="Search the site…" v-model="state.search_site">

  <!-- Btn per inviare la richiesta di filtraggio film -->
  <button @click="filterFilms()">Click me</button>

  <!-- Lista non ordinata in loop per creare una lista per film trovato -->
  <ul v-for="film in this.state.films">

    <!-- TItolo -->
    <li>{{ film.title }}</li>

    <!-- Titolo originale -->
    <li>{{ film.original_title }}</li>

    <!-- Language -->
    <li>{{ film.original_language }}</li>

    <!-- Votazione del film arrotondata -->
    <li>{{ Math.floor(film.vote_average) }}</li>

  </ul>
</template>

<style scoped>
.body {
  margin: 0;
}
</style>
