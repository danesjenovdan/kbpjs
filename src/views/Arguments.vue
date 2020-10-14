<template>
  <b-container fluid class="p-0 m-0">
    <div id="side-bar-1">
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
             target="_blank">Kje&nbsp;bomo&nbsp;pa&nbsp;jutri&nbsp;spali?</a>
        </span>
      </div>
      <div class="donate">
        <span style="display: table-cell; vertical-align: middle">
          <span style="font-family: 'acumin-pro', sans-serif;">Želiš podpreti naše delo?</span>
          <b-button id="donate-btn">
            <span style="font-weight: bold; font-family: 'quador-display', sans-serif;">Doniraj</span>
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
      <div id="side-bar-2">
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
             target="_blank">Danes&nbsp;je&nbsp;nov&nbsp;dan</a>
          <span> in </span>
          <a href="https://www.facebook.com/kjebomopajutrispali/"
             rel="noreferrer noopener"
             target="_blank">Kje&nbsp;bomo&nbsp;pa&nbsp;jutri&nbsp;spali?</a>
        </span>
        </div>
        <div class="donate">
        <span>
          <span>Želiš podpreti naše delo?</span>
          <b-button id="donate-btn">
            <span style="font-weight: bold; font-family: 'quador-display', sans-serif;">Doniraj</span>
            <b-icon icon="suit-heart-fill"
                    style="margin-left: 10px"
                    class="heart">
            </b-icon>
          </b-button>
        </span>
        </div>
      </div>
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
  #side-bar-1{
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
  #side-bar-2{
    display: none;
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
    font-family: "quador-display", sans-serif;
    font-weight: 500;
  }
  .authors p {
    font-family: "acumin-pro", sans-serif;
    font-weight: 500;
  }
  .donate {
    width: 100%;
    height: 10%;
    border-top: 5px solid black;
    align-self: baseline;
    text-align: center;
    display: table;
    font-family: "acumin-pro", sans-serif;
    font-weight: 500;
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
    font-family: "quador-display", sans-serif;
    font-weight: 500;
    color: #252525;
  }
  .accordion-container {
    width: 70%;
    margin: 0;
  }
  span > a {
    font-size: 2vh;
    text-decoration: underline;
    color: #252525;
  }
  .visible-xs {
    display: none;
  }

  @media (max-width: 991px)  {                                /*  991px*/
    #side-bar-1 {
      display: none;
    }
    #side-bar-2{
      background-color: #ffac41;
      border-top: 5px solid black;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      align-items: stretch;
    }
    .icons {
      padding-bottom: 20px;
    }
    .icon > img {
      width: 12vw;
    }
    .authors {
      padding: 20px 0 20px 0;
    }
    .authors > span {
      font-size: 2.5vw;
    }
    .authors p {
      font-size: 2.5vw;
    }
    .donate {
      padding: 20px 0 20px 0;
      font-size: 2.5vw;
    }
    #donate-btn {
      margin-left: 15px;
    }
    .poziv {
      font-size: 2.5vw;
      margin: 15px 2rem 0 2rem;
    }
    .accordion-container {
      width: 100%;
    }
    span > a {
      font-size: 2.5vw;
    }
  }

  @media (max-width: 767px) {                                /*  767px */
    .icon > img {
      width: 12vw;
    }
    .authors > span {
      font-size: 3vw;
    }
    .authors p {
      font-size: 3vw;
    }
    .donate {
      font-size: 3vw;
    }
    .poziv {
      font-size: 3vw;
    }
    span > a {
      font-size: 3vw;
    }
  }
  @media (max-width: 575px) {                                /*  575px */
    .icon > img {
      width: 15vw;
    }
    .authors > span {
      font-size: 4vw;
    }
    .authors p {
      font-size: 4vw;
    }
    .donate {
      font-size: 4vw;
    }
    .poziv {
      font-size: 4vw;
    }
    span > a {
      font-size: 4vw;
    }
  }
</style>
