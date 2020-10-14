<template>
  <div>
    <div id="top-paragraph">
      <p>Nedavna korona kriza je razgalila vrsto težav na stanovanjskem področju. Izpostavljamo največje korona kikse in predlagamo nekaj rešitev, ki bi jih veljalo upoštevati ob morebitnem zaostrovanju drugega vala epidemije.</p>
    </div>
    <div :ref="'accordion-' + arg.id"
         :id="'accordion-' + arg.id"
         v-for="arg in content" :key="arg.id"
         style="border-top: 5px solid black; padding: 0; font-family: 'quador-display', sans-serif; color: #252525; width: 100%">
      <b-row class="pr-0 mr-0 ml-0">
        <b-col cols="4" class="number-column not-visible-xs">
          <img :class="arg.expanded ? 'float-right' : 'float-right h-100'" :src="require('../assets/numbers/'+arg.id+'.svg')">
        </b-col>
        <b-col cols="3" class="number-column visible-xs">
          <img class="number-xs" :src="require('../assets/numbers/'+arg.id+'.svg')">
        </b-col>
        <b-col class="visible-xs">
          <h1 :class="arg.id !== 5 ? 'accordion-title' : 'accordion-title number-five-xs'">{{ arg.title }}</h1>
        </b-col>
        <b-col class="text-column not-visible-xs">
          <h1 class="accordion-title">{{ arg.title }}</h1>
          <p v-html="arg.lead_paragraph" class="lead-paragraph">
          </p>
          <div v-if="!arg.expanded"
               class="learn-more"
               @click="openLearnMore(arg.id, $event)"
          >Izvedi več</div>
          <b-collapse :id="'collapse-' + arg.id"
                      v-model="arg.expanded"
                      @shown="goToElement(arg.id)"
                      style="font-size: 1.1rem">
            <p v-for="par in arg.more_paragraphs"
               :key="'par-' + arg.more_paragraphs.indexOf(par)"
               v-html="par">
            </p>
            <h3>Kako ukrepati?</h3>
            <p v-html="arg.solution.paragraph"></p>
            <p v-for="bp in arg.solution.bullet_points"
               :key="'bp-' + arg.solution.bullet_points.indexOf(bp)"
               class="bullet-point"
               v-html="bp">
            </p>
          </b-collapse>
        </b-col>
      </b-row>
      <b-row class="visible-xs">
        <b-col class="text-column pt-0 pb-0">
          <p v-html="arg.lead_paragraph" class="lead-paragraph">
          </p>
          <div v-if="!arg.expanded"
               class="learn-more"
               @click="openLearnMore(arg.id, $event)"
          >Izvedi več</div>
          <b-collapse :id="'collapse-' + arg.id"
                      v-model="arg.expanded"
                      @shown="goToElement(arg.id)"
                      style="font-size: 1.1rem">
            <p v-for="par in arg.more_paragraphs"
               :key="'par-' + arg.more_paragraphs.indexOf(par)"
               v-html="par">
            </p>
            <h3>Kako ukrepati?</h3>
            <p v-html="arg.solution.paragraph"></p>
            <p v-for="bp in arg.solution.bullet_points"
               :key="'bp-' + arg.solution.bullet_points.indexOf(bp)"
               class="bullet-point"
               v-html="bp">
            </p>
          </b-collapse>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import accordionContent from '../assets/texts/accordion-text';

export default {
  name: 'Accordion',
  data() {
    return {
      content: accordionContent,
    };
  },
  methods: {
    getContent() {
      this.content = accordionContent;
    },
    openLearnMore(openedId, event) {
      event.preventDefault();
      for (const arg of this.content) {
        arg.expanded = arg.id === openedId;
      }
    },
    goToElement(id) {
      const ref = `accordion-${id}`;
      const element = document.getElementById(ref);
      element.scrollIntoView({ behavior: 'smooth' });
    },
  },
  mounted() {
    this.getContent();
  },
};
</script>

<style scoped>
  html {
    scroll-behavior: smooth;
  }
  #top-paragraph {
    padding: 1vw 1vw 1vw 1vw;
    font-size: 1.7vw;
    font-family: "quador-display", sans-serif;
  }
  .learn-more {
    text-decoration: underline;
    display: list-item;
    list-style-type: none;
    list-style-position: inside;
    font-size: 2vw;
    cursor: pointer;
    font-family: "quador-display", sans-serif;
  }
  .learn-more:before{
    content: url("../assets/icons/learn_more_arrow.svg");
    width: 4.5vw;
    vertical-align: middle;
    margin-right: 5px;
    display: inline-block;
  }
  .learn-more:hover:before {
    animation: shake 0.5s;
  }
  .lead-paragraph {
    font-family: "acumin-pro", sans-serif;
    font-weight: 300;
  }
  @keyframes shake {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(15deg); }
    75% { transform: rotate(-15deg); }
    100% { transform: rotate(0deg); }
  }
  .bullet-point {
    display: list-item;
    list-style-type: none;
    list-style-position: inside;
  }
  .bullet-point:before {
    content: url("../assets/icons/learn_more_arrow.svg");
    width: 3.5vw;
    vertical-align: middle;
    margin-right: 5px;
    display: inline-block;
  }
  .accordion-title {
    font-size: 4vw;
    -webkit-hyphens: auto;
    -ms-hyphens: auto !important;
    hyphens: auto;
  }
  div >>> a {
    color: #252525;
    text-decoration: underline;
  }
  div >>> a:hover {
    text-decoration-color: #ffac41;
  }
  p >>> a {
    color: #252525;
    text-decoration: underline;
  }
  p >>> a:hover {
    text-decoration-color: #ffac41;
  }
  .text-column {
    padding-top: 3vh;
    padding-bottom: 3vh;
    padding-right: 3rem !important;
  }
  .number-column {
    margin-left: -5vw;
    margin-right: 3vw;
  }
  .visible-xs {
    display: none;
  }
  .not-visible-xs {}
  .number-xs {}
  .number-five-xs {}

  @media (max-width: 991px) {                                /*  991px */
    .visible-xs {
      display: initial;
    }
    .not-visible-xs {
      display: none;
    }
    .number-column {
      margin-left: -4vw;
      margin-right: 0;
    }
    .number-xs {
      height: 100%;
      float: right;
    }
    .accordion-title {
      font-size: 6vw;
      margin-bottom: 0 !important;
    }
    #top-paragraph {
      font-size: 2.5vw;
    }
    .lead-paragraph {
      font-weight: 300;
      font-size: 2.5vw;
    }
    .learn-more {
      font-size: 3vw;
    }
    .learn-more:before{
      vertical-align: top;
    }
    .bullet-point:before {
      vertical-align: top;
    }
  }
  @media (max-width: 767px) {                                /*  767px */
    #top-paragraph {
      font-size: 3vw;
    }
    .learn-more {
      font-size: 3.5vw;
    }
    .learn-more:before{
      width: 5.5vw;
    }
    .accordion-title {
      font-size: 6vw;
    }
    .lead-paragraph {
      font-weight: 300;
      font-size: 2.3vw;
    }
    .bullet-point:before {
      width: 4vw;
    }
  }
  @media (max-width: 575px) {                                /*  575px */
    .number-column {
      margin-left: -7vw;
    }
    .number-xs {
      height: 100%;
      float: right;
    }
    .number-five-xs {
      font-size: 5vw !important;
    }
    #top-paragraph {
      font-size: 4vw;
    }
    .learn-more {
      font-size: 6vw;
    }
    .learn-more:before{
      width: 11vw;
    }
    .accordion-title {
      font-size: 6.5vw;
    }
    .lead-paragraph {
      font-weight: 300;
      font-size: 0.9rem;
    }
    .bullet-point:before {
      width: 8vw;
    }
  }
</style>
