<template>
  <div id="app">
      <h1 class="heading">Find out what Semantic Words there are for any word in your language by harvesting the power of Gavagai's Living Lexicon that is continously learning new words.</h1>
      <h3>Clicking on a word will show specific information relating to that word.</h3>
      <div>
          <SearchBar @clicked="search" :words="semanticWordResults"/>
          <div class="display-results"> 
            <h2 class="results-label">Semantically similar words will appear below</h2>
            <SearchResults :words="semanticWordResults"/>
          </div>
      </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import lexicon from './util/lexicon';
import SearchResults from './components/SearchResults'

export default {
  name: 'app',
  data() {
    return {
      semanticWordResults: []
    }
  },
  components: {
    SearchBar,
    SearchResults
  },
  methods: {
    async search(term, value) {
        this.semanticWordResults = [];
        const data = await lexicon.search(term, value);
        this.semanticWordResults = data;
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

html {
  font-size: 18px;
  font-family: 'Raleway', sans-serif;
  color: white;
}

body {
  background-image: url("./assets/backgroundimage-min.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.heading {
  width: 670px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 75px;
  color: black;
  opacity: 0.7;
}

h2 {
  width: 670px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 50px;
  opacity: 0.4;
}

h3 {
  width: 670px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 10px;
  color: white;
  font-weight: 800;
  opacity: 0.6;
}

@media only screen and (max-width: 730px) { 
  .heading {
    font-size: 27px;
    width: 90%;
  }

  h3 {
    color: grey;
    opacity: 0.8;
  }

  body {
    background-image: none;
  }

 .results-label {
    display: none;
  }

  h3 {
    width: 90%;
    margin-top: 10px;
  }
}

@media only screen and (max-width: 730px) {
  .heading {
  margin-top: 10px;
  }
}
</style>
