/*Storing global variables to be used throughout */

const apiKey = '3acdef1f01cbceb88b132158abd466da';
const endpoint = 'https://api.gavagai.se/v3/lexicon/';
const query = 'additionalFields=ASSOCIATIONS&additionalFields=SEMANTICALLY_SIMILAR_WORDS';
const corsUrl = 'https://cors-anywhere.herokuapp.com/'
let languageValue;

const lexicon = {


    /*The first method is to find the Semantically Similar Words. Call to the appropriate endpoint with the term and value passed in as well as the 
    apiKey which is a global scope variable above (the apiKey is curently an environment variable and is stored in the .env file).
    The response is then converted to json. Then the response is checked to ensure it contains semanticallySimilarWords as this is what I'm looking for.
    If it does, map the jsonResponse.semanticallySimilarWords and return a new array with objects containing only the semantic word from each object in the inital array. 
    This response is then used in App.js to update the searchResults state. 
     */
    search(term, value) {
        languageValue = value;
        return fetch(`${corsUrl}${endpoint}${value}/${term}?${query}&apiKey=${apiKey}&polarizeWord=false`, {
            headers: {
                Authorization: "Accept: application/json;charset=UTF-8"
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (!jsonResponse.semanticallySimilarWords){
                return [];
            } else {
                return jsonResponse.semanticallySimilarWords.map(item => {
                    return {
                        semanticWord: item.word,
                    };
                });
            }
        }).catch(error => console.info(error));
    },


    /*This method is to find word information for a specific semantic word. Call to the appropriate endpoint with the semanticWord passed in as an argument
    from the Word.js file and use the stored languageValue variable from above to get the language. Then build the full url and fetch.
    The response is then converted to json. Then the response is checked to ensure it contains wordInformation as this is what I'm looking for.
    If it does, return a single object with 5 pieces of information that have been selected from the response. 
    This response is then used in Word.js to display the word information for the semantic word that was clicked on.
    */
    wordInfoSearch(semanticWord) {
        return fetch(`${corsUrl}${endpoint}${languageValue}/${semanticWord}?${query}&apiKey=${apiKey}&polarizeWord=false`, {
            headers: {
                Authorization: "Accept: application/json;charset=UTF-8"
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (!jsonResponse.wordInformation){
                return [];
            } else {
                return {
                    absoluteRank: jsonResponse.wordInformation.absoluteRank,
                    documentFrequency: jsonResponse.wordInformation.documentFrequency,
                    frequency: jsonResponse.wordInformation.frequency,
                    relativeRank: jsonResponse.wordInformation.relativeRank,
                    vocabSize: jsonResponse.wordInformation.vocabularySize   
                }
            }
        }).catch(error => console.info(error));
    }

} //end of lexicon object

export default lexicon;