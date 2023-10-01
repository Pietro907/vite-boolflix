<script>
import { state } from './state.js'
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  components: {
    Header,
    Main,
  },
  data() {
    return {
      state,

    }

  },



}


</script>

<template>
  <!-- Una prova per vedere lo state collegato -->
  <!-- <h1>Chiamata DB film: <p style="font-size: 25px;">{{ state.base_url }}</p></h1> -->

  <!-- Header: logo & search input -->
  <Header />


  <Main />


</template>

<style scoped>
.body {
  margin: 0;
}


</style>
