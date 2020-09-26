<template>
  <b-container fluid class="p-0 m-0">
    <div id="side-bar">
      <div class="poziv">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div class="icons">
        <b-button class="icon"><img src="../assets/icons/facebook.svg"></b-button>
        <b-button class="icon"><img src="../assets/icons/twitter.svg"></b-button>
        <b-button class="icon"><img src="../assets/icons/mail.svg"></b-button>
      </div>
      <div class="authors">
        <span>
          <p class="m-0">Kampanjo sta pripravila</p>
          <a href="https://danesjenovdan.si/"
             rel="noreferrer noopener"
             target="_blank">Danes je nov dan</a>
          <span> in </span>
          <a href="https://www.facebook.com/kjebomopajutrispali/"
             rel="noreferrer noopener"
             target="_blank">Kje bomo pa jutri spali?</a>
        </span>
      </div>
      <div class="donate">
        <span style="display: table-cell; vertical-align: middle">
          <span style="font-family: acumin-pro">Želiš podpreti naše delo?</span>
          <b-button id="donate-btn">
            <span style="font-weight: bold; font-family: quador-display;">Doniraj</span>
            <b-icon icon="suit-heart-fill"
                    style="margin-left: 10px"
                    class="heart">
            </b-icon>
          </b-button>
        </span>
      </div>
    </div>
    <div class="accordion-container">
      <accordion></accordion>
    </div>
  </b-container>
</template>

<script>
import Accordion from '../components/Accordion.vue';

export default {
  name: 'Arguments',
  components: { Accordion },
  data() {
    return {
      heartBeat: false,
    };
  },
};
</script>

<style scoped>
  #side-bar{
    background-color: #ffac41;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    position: fixed;
    align-items: stretch;
    right: 0;
    top: 0;
    height: 100vh;
    z-index: 3000;
    width: 30%;
    border-left: 5px solid black;
  }
  .icons {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: auto;
    margin-top: auto;
  }
  .icon {
    padding: 0;
    border: 0;
    background-color: transparent;
  }
  .icon > img {
    width: 6vw;
  }
  .icon:hover > img {
    animation: bounce 1s;
  }
  @keyframes bounce {
    25% {
      transform: scale(0.9);
    }
    75% {
      transform: scale(1);
    }
  }
  .authors {
    width: 100%;
    height: 10%;
    border-top: 5px solid black;
    align-self: baseline;
    text-align: center;
    display: table;
  }
  .authors > span {
    display: table-cell;
    vertical-align: middle;
    font-family: quador-display;
    font-weight: 500;
  }
  .authors p {
    font-family: acumin-pro;
    font-weight: 500;
  }
  .donate {
    width: 100%;
    height: 10%;
    border-top: 5px solid black;
    align-self: baseline;
    text-align: center;
    display: table;
  }
  #donate-btn {
    background-color: transparent;
    border: 5px solid black;
    color: black;
    margin-left: 1vw;
  }
  #donate-btn:hover > .heart{
    animation: heart-beat 1s;
  }
  @keyframes heart-beat {
    25% {
      transform: scale(1.5);
    }
    75% {
      transform: scale(1);
    }
  }
  .poziv {
    align-self: center;
    font-size: 1.5vw;
    margin: auto 2rem 0 2rem;
    text-align: justify;
    font-family: quador-display;
    font-weight: 500;
    color: #252525;
  }
  .accordion-container {
    width: 70%;
    height: 100vh;
    margin: 0;
  }
  span > a {
    font-size: 2vh;
    text-decoration: underline;
    color: #252525;
  }

</style>
