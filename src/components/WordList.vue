<template>
    <div class="wordlist">
        <Word/>
    </div>
</template>

<script>
import Word from './Word';

export default {
   name: "WordList",
   components: {
       Word
   }
}
</script>

<style scoped>
  .wordlist {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
 }
</style>