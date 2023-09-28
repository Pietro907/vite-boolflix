<script>
import {state} from './state.js'


export default {

  data(){
    return {
      state,
    }

  },
 /*  created(){
    fetchData(res);
  } */

}


</script>

<template>
  <h1>{{ state.base_url }}</h1>
  
  <input type="search" id="state.base_url" v-model="state.search_site">
  <button>Click me</button>
  {{ state.testo }}

  <ul>
    <li>Titolo</li>
    <li>Titolo Originale</li>
    <li>Lingua</li>
    <li>Voto</li>
  </ul>




</template>

<style scoped>




</style>
