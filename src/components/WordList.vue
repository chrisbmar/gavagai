<template>
    <div class="wordlist">
        <div v-for="(semanticWord, index) in words" v-bind:key="index">
            <Word :semanticWord="semanticWord"/>
        </div>
    </div>
</template>

<script>
import Word from './Word';

export default {
   name: "WordList",
   props: {
       words: Array
   },
   components: {
       Word
   }
}
</script>

<style scoped>
  .wordlist {
    display: inline-block;
    width: 90%;
    margin-left: 6px;
    flex-wrap: wrap;
    justify-content: center;
 }
</style>