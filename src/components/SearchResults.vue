<template>
    <div class="search-results">
        <WordList :words="words"/>
    </div>
</template>

<script>
import WordList from './WordList';

export default {
    name: "SearchResults",
    props: {
        words: Array
    },
    components: {
        WordList
    }
}
</script>

<style scoped>
  .search-results {
    display: flex;
    justify-content: center;
    width: 550px;
    height: 700px;
    overflow: scroll;
    margin: 0 auto;
    margin-bottom: 100px;
    margin-top: 50px;
    padding: 40px 10px;
    border: 1px solid grey;
}

@media only screen and (max-width: 730px) {
  .search-results {
        width: 100%;
        padding: 0;
        margin-top: 20px;
        height: auto;
        border: none;
    }
}
</style>