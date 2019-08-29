<template>
    <div class="worddiv">
        <ul class="list">
            <li class="semanticword" @click="searchWordInfo"> {{ (semanticWord.semanticWord).toUpperCase() }}</li>
        </ul>
        <ul :class="[ isThereWordInfo ? 'show' : 'hide']">
            <li>Absolute Rank: <span>{this.state.wordInformationResults.length !== 0 ? this.state.wordInformationResults.absoluteRank : 'N/A'}</span></li>
            <li>Document Frequency: <span>{this.state.wordInformationResults.length !== 0 ? this.state.wordInformationResults.documentFrequency : 'N/A'}</span></li>
            <li>Frequency: <span>{this.state.wordInformationResults.length !== 0 ? this.state.wordInformationResults.frequency : 'N/A'}</span></li>
            <li>Relative Rank: <span>{this.state.wordInformationResults.length !== 0 ? this.state.wordInformationResults.relativeRank : 'N/A'}</span></li>
            <li>Vocabulary size: <span>{this.state.wordInformationResults.length !== 0 ? this.state.wordInformationResults.vocabSize : 'N/A'}</span></li>
            <i onClick={this.toggleStateCloseWordInfo} class="fas fa-times-circle"></i>
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
            isThereWordInfo: false
        }
    },
    methods: {
        async searchWordInfo(event) {
            const wordInfo = await lexicon.wordInfoSearch(event.target.innerText);
            this.wordInformation = wordInfo;
            console.log(this.wordInformation);
            this.isThereWordInfo = true;
        }
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
    border: 1px solid red;
}

.list {
    list-style: none;
}

.semanticword { 
    margin-right: 35px;
    padding: 5px 0px;
    font-size: 25px;
    border: 1px solid green;
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