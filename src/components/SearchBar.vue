<template>
        <div class="SearchBar">
            <input 
            class="input"
            type="text"
            placeholder="Enter a word"
            v-model="word" />
            <select v-model="selected"
            class="language-option">
                <option value="">Language</option>
                <option value="AZ">Abkhazian</option>
                <option value="SQ">Albanian</option>
                <option value="AR">Arabic</option>
                <option value="BN">Bengali</option>
                <option value="BG">Bulgaria</option>
                <option value="CA">Catalan</option>
                <option value="ZH">Chinese</option>
                <option value="HR">Croatian</option>
                <option value="CS">Czech</option>
                <option value="DA">Danish</option>
                <option value="NL">Dutch</option>
                <option value="EN">English</option>
                <option value="ET">Estonian</option>
                <option value="FI">Finnish</option>
                <option value="FR">French</option>
                <option value="DE">German</option>
                <option value="EL">Greek</option>
                <option value="HE">Hebrew</option>
                <option value="HI">Hindi</option>
                <option value="HU">Hungarian</option>
                <option value="IS">Icelandic</option>
                <option value="ID">Indonesian</option>
                <option value="IT">Italian</option>
                <option value="JA">Japanese</option>
                <option value="JV">Javanese</option>
                <option value="KO">Korean</option>
                <option value="LV">Latvian</option>
                <option value="LT">Lithuanian</option>
                <option value="MS">Malay</option>
                <option value="NO">Norwegian</option>
                <option value="FA">Persian</option>
                <option value="PL">Polish</option>
                <option value="PT">Portuguese</option>
                <option value="RO">Romanian</option>
                <option value="RU">Russian</option>
                <option value="SK">Slovak</option>
                <option value="SL">Slovenian</option>
                <option value="ES">Spanish</option>
                <option value="SW">Swahili</option>
                <option value="SV">Swedish</option>
                <option value="TL">Tagalog</option>
                <option value="TH">Thai</option>
                <option value="TR">Turkish</option>
                <option value="UK">Ukranian</option>
                <option value="UR">Urdu</option>
                <option value="VI">Vietanamese</option>
            </select>  
            <button 
            class="search-button">SEARCH</button>
        </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      word: '',
      selected: '',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.SearchBar {
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
  opacity: 0.7;
  background: black;
  padding: 20px;
  width: 670px;
  border-radius: 5px;
}

.input, .language-option, .search-button {
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  height: 50px;
}

.input, .language-option {
  width: 250px;
  margin-right: 20px;
  padding-left: 20px;
}

.search-button {
  width: 100px;
  padding: 10px;
  background-color: blue;
  color: white;
  border: 2px solid white;
}

.search-button:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: 0.3s ease;
}

@media only screen and (max-width: 730px) {
  .SearchBar {
    width: 80%;

  }

  .input, .language-option, .search-button {
    margin: 0;
    width: 100%;
    margin: 15px;
  }

  .search-button:hover {
    transform: none;
  }
}

@media only screen and (max-width: 450px) {
  .SearchBar {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .input, .language-option, .search-button {
    margin: 10px;
  }
}
</style>