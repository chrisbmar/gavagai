<template>
    <div class="worddiv">
        <ul class="list">
            <li class="semanticword" @click="searchWordInfo"> {{ this.loading ? 'Loading...' : (semanticWord.semanticWord).toUpperCase() }}</li>
        </ul>
        <ul :class="[ isThereWordInfo ? 'show' : 'hide']">
            <li>Absolute Rank: <span>{{this.wordInformation.absoluteRank}}</span></li>
            <li>Document Frequency: <span>{{this.wordInformation.documentFrequency}}</span></li>
            <li>Frequency: <span>{{this.wordInformation.frequency}}</span></li>
            <li>Relative Rank: <span>{{this.wordInformation.relativeRank}}</span></li>
            <li>Vocabulary size: <span>{{this.wordInformation.vocabSize}}</span></li>
            <i @click="toggleShow" class="fas fa-times-circle"></i>
        </ul>
    </div>
</template>

<script>
import lexicon from '../util/lexicon';

export default {
    name: "Word",
    props: {
        semanticWord: Object
    },
    data() {
        return {
            wordInformation: {},
            isThereWordInfo: false,
            loading: false,
        }
    },
    methods: {
        async searchWordInfo(event) {
            this.loading = true;
            const wordInfo = await lexicon.wordInfoSearch(event.target.innerText);
            this.wordInformation = wordInfo;
            console.log(this.wordInformation);
            this.isThereWordInfo = true;
            this.loading = false;
        },
        toggleShow() {
            this.isThereWordInfo = false;
        },
    }
}
</script>

<style scoped>
.worddiv {
    padding: 10px;
    margin: 10px;
    width: 100%;
    text-align: center;
    display: inline-block;
    border-radius: 7px;
    background-color: grey;
    opacity: 0.8;
    color: white;
}

.list {
    list-style: none;
}

.semanticword { 
    margin-right: 35px;
    padding: 5px 0px;
    font-size: 25px;
}

.semanticword:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: .4s ease;
}

.hide {
    display: none;
}

.show {
    display: inline-block;
    list-style: none;
    margin: 0 auto;
    text-align: left;
    padding: 10px;
}

li:not(.semanticword){
    padding: 10px;
    border-left: 1px solid white;
    border-right: 1px solid white;
}

span {
    color: black;
    margin: 0px 5px;
    font-weight: bold;
}

.fas {
    margin-top: 20px;
    margin-left: 45%;
    font-size: 25px;
}

.fas:hover {
    cursor: pointer;
    opacity: 0.4;
}

@media only screen and (max-width: 425px){
    .worddiv {
        width: 95%;
    }
}
</style>