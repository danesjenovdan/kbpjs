<template>
  <div>
    <div id="top-paragraph">
      <p>Nedavna korona kriza je razgalila vrsto težav na stanovanjskem področju. Izpostavljamo največje korona kikse in predlagamo nekaj rešitev, ki bi jih veljalo upoštevati ob morebitnem zaostrovanju drugega vala epidemije.</p>
    </div>
    <div :ref="'accordion-' + arg.id"
         :id="'accordion-' + arg.id"
         v-for="arg in content" :key="arg.id"
         style="border-top: 5px solid black; padding: 0; font-family: quador-display; color: #252525">
      <b-row>
        <b-col cols="4" style="margin-left: -5vw; margin-right: 3vw">
          <img :class="arg.expanded ? 'float-right' : 'float-right h-100'" :src="require('../assets/numbers/'+arg.id+'.svg')">
        </b-col>
        <b-col class="pr-5" style="padding-top: 3vh; padding-bottom: 3vh">
          <h1 class="accordion-title" style="-ms-hyphens: auto">{{ arg.title }}</h1>
          <p v-html="arg.lead_paragraph"
             style="font-family: acumin-pro; font-weight: 300;">
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
    font-family: quador-display;
  }
  .learn-more {
    text-decoration: underline;
    display: list-item;
    list-style-type: none;
    list-style-position: inside;
    font-size: 4vh;
    cursor: pointer;
    font-family: quador-display;
  }
  .learn-more:before{
    content: url("../assets/icons/learn_more_arrow.svg");
    width: 5.5vh;
    vertical-align: top;
    margin-right: 5px;
    display: inline-block;
  }
  .learn-more:hover:before {
    animation: shake 0.5s;
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
    width: 5.5vh;
    vertical-align: top;
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
</style>
