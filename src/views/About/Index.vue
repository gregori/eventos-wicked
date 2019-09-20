<template>
<v-layout>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="container">
        <div class="md-layout md-size-18 fix-content">
          <div class="md-layout-item md-size-100">
            <h2 class="title">Sobre o site</h2>
            <h3 class="md-body-2" style="font-size: 18px; font-weight: normal !important;">
              Desafio proposto para a Fábrica de Software I, matéria pertencente a graduação de Engenheria de Software da Católica, desenvolvido por:<br>
              <ul>
                <li><a target="_blank" href="https://www.linkedin.com/in/altieri-ricardo-d-01b657121/">Altiéri Ricardo Dalagnollo</a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/esdras-xavier">Esdras Xavier</a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/marcosz/">Marcos Zimmermann</a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/martin-ruediger-15055511a/">Martin Ruediger</a></li>
              </ul>

              Sistema desenvolvido com as seguintes tecnologias:
              <ul>
                <li><a target="_blank" href="https://vuejs.org/">Vue.js</a></li>
                <li><a target="_blank" href="https://vuematerial.io/">Vue Material</a></li>
                <li><a target="_blank" href="https://vuex.vuejs.org/">Vuex</a></li>
                <li><a target="_blank" href="https://firebase.google.com/?hl=pt-br">Firebase</a></li>
                <li><a target="_blank" href="https://www.w3schools.com/html/html5_intro.asp">HTML5</a></li>
                <li><a target="_blank" href="https://materializecss.com">Materialize</a></li>
              </ul>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</v-layout>
</template>

<script>
import VLayout from '@/layout/Landing.vue';

export default {
  components: {
    VLayout,
  },
  data () {
    return {
      atual: 'home',
    }
  },
  bodyClass: 'about-page',
  props: {
    header: {
      type: String,
      default: require('@/assets/img/hero/DSC00412.jpg')
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
   methods: {
    localizacao(){
      this.localizacao = '<p>TestAppend</p>';
      return '<p>TestAppend</p>';
    },
    change(tabName){
      console.log(tabName);
      this.atual = tabName;
    }
  },
};
</script>

<style lang="scss" scoped>
.fix-content {
  width: 100% !important;
  margin-left: 0px !important;
}

.md-ripple > span {
  position: relative;
}

.page-header {
  height: 38vh !important;
}
</style>
