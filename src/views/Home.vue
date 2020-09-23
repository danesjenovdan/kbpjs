<template>
  <div>
    <div class="container" style="transition: 1s;">
      <img class="quotation-mark" style="align-self: start" src="../assets/quotation_mark.png"/>
        <div id="quote-box">
          <transition name="slide-fade">
            <div :key="quoteIndex">
              <span id="quote-text">{{ currentQuote.text }}</span>
            </div>
          </transition>
        </div>
      <transition name="slide-fade">
        <div id="quote-reference" style="text-align: left" :key="quoteIndex">
          <span style="text-align: start">{{ currentQuote.person }},
            <a v-if="currentQuote.reference"
               :href="currentQuote.reference.link"
               rel="noreferrer noopener"
               target="_blank"
               style="color: #ffac41">{{ currentQuote.reference.label }}</a>
          </span>
        </div>
      </transition>
      <button id="quote-btn" @click="getQuote()">
        <b-icon icon="arrow-repeat" font-scale="1.5" style="color: #252525; margin-right: 5px"></b-icon>
        <span style="vertical-align: top;">Naloži novo izjavo</span>
      </button>
    </div>
    <div class="container-side-panel">
      <p id="side-panel-text">
        Bedno, okej.<br>
        Ampak, a lahko
        vsaj prepričamo
        vlado, da v
        naslednji rundi<br>
        ne ignorira
        stanovanjske
        problematike?
      </p>
      <div id="side-panel-link">
        <router-link to="/argumenti"
                     style="color: #252525; line-height: 1">
          <p class="m-0">Ja, prosim!</p>
          <img src="../assets/icons/arrow_icon.png">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import quotes from '../assets/texts/quotes';

export default {
  name: 'Home',

  data() {
    return {
      allQuotes: quotes,
      currentQuote: quotes[0],
      quoteIndex: 0,
      timeInterval: 0,
    };
  },

  methods: {
    getQuote() {
      let rand = this.quoteIndex;
      while (this.quoteIndex === rand) {
        rand = Math.floor(Math.random() * this.allQuotes.length);
      }
      this.currentQuote = this.allQuotes[rand];
      this.quoteIndex = rand;
      this.resetInterval();
    },
    resetInterval() {
      clearInterval(this.timeInterval);
      this.timeInterval = setInterval(this.getQuote, 5000);
    },
  },

  mounted() {
    this.timeInterval = setInterval(this.getQuote, 5000);
  },
};
</script>

<style scoped>
  .container {
    position: absolute;
    width: 50%;
    height: 95%;
    left: 5%;
    padding: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    text-align: start;
    flex-direction: column;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    /*border: 1px solid blue;*/
  }
  .container-side-panel {
    position: absolute;
    padding: 5%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 26%;
    height: 95%;
    right: 5%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #ffac41;
    text-align: left;
  }

  #quote-box{
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    padding-top: 25px;
    padding-bottom: 25px;
  }

  #quote-text{
    font-size: 2vw;
    font-family: quador-display;
    color: #252525;
    overflow: hidden;
  }

  #quote-reference{
    margin-top: 10px;
    font-size: 1.2vw;
    font-family: acumin-pro;
    color: #252525;
    overflow: hidden;
  }

  #quote-btn{
    background-color: #ffac41;
    border: none;
    text-align: center;
    align-content: center;
    text-decoration: underline;
    font-family: quador-display;
    padding: 12px;
    border-radius: 25px;
    margin-top: 20px;
    margin-bottom: auto;
    color: #252525;
  }

  .quotation-mark{
    height: 15%;
    margin-top: auto;
  }

  #side-panel-text {
    font-size: 2vw;
    font-family: quador-display;
    font-weight: 500;
    line-height: 50px;
    color: #252525;
  }

  #side-panel-link {
    margin-top: 2vw;
    font-size: 3vw;
    text-decoration: underline;
    cursor: pointer;
    font-family: quador-display;
    font-weight: 500;
  }
  #side-panel-link:hover img {
    animation: shake 0.5s;
  }
  @keyframes shake {
    0% { transform: translate(0, 0); }
    25% { transform: translate(15px, 0); }
    50% { transform: translate(0, 0); }
    75% { transform: translate(15px, 0); }
    100% { transform: translate(0, 0); }
  }

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all 2s ease;
  }
  .slide-fade-leave-active {
    transition: all 2s ease;
  }
  .slide-fade-leave-to {
    transform: translateX(500px);
    opacity: 0;
  }
  .slide-fade-enter {
    transform: translateX(-2000px);
    opacity: 0;
  }
</style>
