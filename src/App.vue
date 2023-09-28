<script>
import { state } from './state.js'


export default {

  data() {
    return {
      state,

    }

  },


   

}


</script>

<template>

  <h1>{{ state.base_url }}</h1>

  <input type="search" id="state.base_url" placeholder="Search the site…" >
  <button @click="state.fecthData">Click me</button>
  

  <ul v-for="card in state.cards">
    <li>{{ card.title }}</li>
    <li>{{ card.original_title }}</li>
    <li>{{ card.original_language }}</li>
    <li>{{ Math.floor(card.vote_average)}}</li>
  </ul>

</template>

<style scoped></style>
