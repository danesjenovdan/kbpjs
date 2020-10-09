<template>
  <span>
    <div class="container">
      <img class="quotation-mark" style="align-self: start" src="../assets/quotation_mark.png"/>
      <div id="quote-box">
        <span id="quote-text" class="text-wrapper">{{ currentQuote.text }}</span>
      </div>
      <transition name="slide-fade" mode="out-in">
        <div :key="quoteIndex" id="quote-reference" style="text-align: left">
          <span style="text-align: start">{{ currentQuote.person }},
            <a v-if="currentQuote.reference"
               :href="currentQuote.reference.link"
               rel="noreferrer noopener"
               target="_blank"
               style="color: #343434; text-decoration: underline; font-style: italic"
            >{{ currentQuote.reference.label }}</a>
          </span>
        </div>
      </transition>
      <button id="quote-btn"
              @click="getQuote()">
        <b-icon icon="arrow-repeat"
                font-scale="1.5"
                class="repeat-arrow"
                style="color: #252525; margin-right: 5px">
        </b-icon>
        <span style="vertical-align: top;">Naloži novo izjavo</span>
      </button>
      <div class="container-side-panel-2">
        <p class="side-panel-text">
          Bedno, okej.<br>
          Ampak, a lahko
          vsaj prepričamo
          vlado, da v
          naslednji rundi
          ne ignorira
          stanovanjske
          problematike?
        </p>
        <div class="side-panel-link">
          <router-link to="/argumenti"
                       @click.native="stopTimeout()"
                       style="color: #252525; line-height: 1">
            <p class="m-0">Ja, prosim!</p>
            <img class="arrow" src="../assets/icons/learn_more_arrow.svg">
          </router-link>
        </div>
      </div>
    </div>
    <div class="container-side-panel-1">
      <p class="side-panel-text">
        Bedno, okej.<br>
        Ampak, a lahko
        vsaj prepričamo
        vlado, da v
        naslednji rundi<br>
        ne ignorira
        stanovanjske
        problematike?
      </p>
      <div class="side-panel-link">
        <router-link to="/argumenti"
                     @click.native="stopTimeout()"
                     style="color: #252525; line-height: 1">
          <p class="m-0">Ja, prosim!</p>
          <img style="width: 8vh" src="../assets/icons/learn_more_arrow.svg">
        </router-link>
      </div>
    </div>
  </span>
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
      myTimeout: -1,
    };
  },

  methods: {
    getQuote() {
      let rand = this.quoteIndex;
      while (this.quoteIndex === rand) {
        rand = Math.floor(Math.random() * this.allQuotes.length);
      }
      this.currentQuote = this.allQuotes[rand];
      document.querySelector('.text-wrapper').innerHTML = this.currentQuote.text;
      this.animateLetters(rand);
      this.resetInterval();
    },
    resetInterval() {
      if (this.myTimeout !== -1) {
        clearTimeout(this.myTimeout);
        this.myTimeout = -1;
      }
      this.myTimeout = setTimeout(this.getQuote, this.currentQuote.text.split(' ').length * 1.5 * 1000);
    },
    animateLetters(index) {
      const textWrapper = document.querySelector('.text-wrapper');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      this.$anime.timeline()
        .add({
          targets: '.text-wrapper .letter',
          opacity: [0, 1],
          easing: 'easeInOutQuad',
          duration: 1000,
          delay: (el, i) => 10 * (i + 1),
        });
      this.quoteIndex = index;
    },
    stopTimeout() {
      clearTimeout(this.myTimeout);
      this.myTimeout = -1;
    },
  },

  mounted() {
    this.myTimeout = setTimeout(this.getQuote, this.currentQuote.text.split(' ').length * 1.5 * 1000);
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
  }
  .container-side-panel-1 {
    position: absolute;
    padding: 5%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 26%;
    height: 90vh;
    right: 5vh;
    top: 5vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #ffac41;
    text-align: left;
  }
  .container-side-panel-2 {
    display: none;
  }

  #quote-box{
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    padding-top: 3vh;
    padding-bottom: 3vh;
    align-content: center;
  }

  #quote-text{
    font-size: 2vw;
    font-family: quador-display;
    color: #252525;
    overflow: hidden;
  }

  #quote-reference{
    margin-top: 10px;
    font-size: 1.5vw;
    font-family: acumin-pro;
    color: #343434;
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
  .repeat-arrow {
    transition: 1s ease;
  }
  #quote-btn:hover > .repeat-arrow{
    transform: rotate(180deg);
  }
  .quotation-mark{
    height: 15%;
    margin-top: auto;
    transition: all 3s ease;
  }

  .side-panel-text {
    font-size: 2vw;
    font-family: quador-display;
    font-weight: 500;
    line-height: 50px;
    color: #252525;
  }

  .side-panel-link {
    margin-top: 2vw;
    font-size: 3vw;
    text-decoration: underline;
    cursor: pointer;
    font-family: quador-display;
    font-weight: 500;
  }
  .side-panel-link:hover img {
    animation: shake 0.5s;
  }
  @keyframes shake {
    0% { transform: translate(0, 0); }
    25% { transform: translate(15px, 0); }
    50% { transform: translate(0, 0); }
    75% { transform: translate(15px, 0); }
    100% { transform: translate(0, 0); }
  }
  .arrow {
    width: 8vh;
  }

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all 2s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-to {
    transform: translateX(500px);
    opacity: 0;
  }
  .slide-fade-enter {
    transform: translateX(-100px);
    opacity: 0;
  }

  @media (max-width: 991px) {                                /*  991px */
    .container {
      width: 100%;
      height: 100%;
      max-width: 100%;
      left: 0;
      padding: 5%;
    }
    .container-side-panel-1 {
      display: none;
    }
    .container-side-panel-2 {
      padding: 2% 4%;
      right: 5vh;
      top: 5vh;
      width: 100%;
      display: block;
      background-color: #ffac41;
    }
    #quote-box{
      width: 100%;
    }
    #quote-text{
      font-size: 3vw;
    }
    #quote-reference{
      margin-top: 10px;
      font-size: 3vw;
    }
    #quote-btn{
      font-size: 2vw;
    }
    .quotation-mark{
      height: 10% !important;
    }
    .side-panel-text {
      font-size: 3vw;
      line-height: 1.5;
    }
    .side-panel-link {
      margin-top: 10px;
      font-size: 4vw;
    }
    .arrow {
      width: 7vw;
    }
  }
  @media (max-width: 767px) {                                /*  767px */
    #quote-text{
      font-size: 3.5vw;
    }
    #quote-reference{
      font-size: 3vw;
    }
    #quote-btn{
      font-size: 3vw;
    }
    .side-panel-text {
      font-size: 3vw;
      margin: 0;
    }
    .side-panel-link {
      font-size: 4.5vw;
    }
    .arrow {
      width: 7.5vw;
    }
  }
  @media (max-width: 575px) {                                /*  575px */
    #quote-text{
      font-size: 4vw;
    }
    #quote-reference{
      font-size: 3.5vw;
    }
    #quote-btn{
      font-size: 3.2vw;
    }
    .side-panel-text {
      font-size: 4vw;
    }
    .side-panel-link {
      font-size: 7vw;
    }
    .arrow {
      width: 10vw;
    }
  }
</style>
