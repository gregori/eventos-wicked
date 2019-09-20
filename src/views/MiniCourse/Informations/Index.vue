<template>
<v-layout>
  <div class="wrapper">
    <parallax class="section page-header header-filter fix-sizes header-resize" :style="headerStyle"></parallax>
    <!--Header-->
    <!-- End -->
    <div class="main main-raised">
      <div class="container">

        <div class="md-layout md-size-18 fix-content">

          <div class="md-layout-item mx-auto">

            <!--Slider tabs-->
            <md-tabs class="md-primary fix-content" md-alignment="centered">
              <md-tab style="width: 10% !important" id="tab-home" md-icon="home" @click="change('home')"><h3>Informações Gerais</h3><br></md-tab>
              <md-tab style="width: 10% !important" id="tab-hotel" class="btnInlineBlock" md-icon="help" @click="change('sobre')"><h3>Sobre</h3><br></md-tab>
              <md-tab style="width: 10% !important" id="tab-location" class="btnInlineBlock" md-icon="map" @click="change('localizacao')"><h3>Localização</h3><br></md-tab>
              <md-tab style="width: 10% !important" id="tab-awards" class="btnInlineBlock" md-icon="local_play" @click="change('premiacao')"><h3>Premiação</h3><br></md-tab>
              <md-tab style="width: 10% !important" id="tab-payment" class="btnInlineBlock" md-icon="attach_money" @click="change('taxaDeInscricao')"><h3>Taxa de Inscrição</h3><br></md-tab>
            </md-tabs>
            <!--End tabs about-->
            <!--<h1 class="title" style="font-size: 36px;">Sobre</h1>-->
            <div id="localizacao" v-if="atual==='localizacao'">
              <p style="text-align: center !important;">
                A competição irá acontecer nos dias 14/12/2018, 15/12/2018 e 16/12/2018 das 9h às 21h no campus da Católica de Santa Catarina em Jaraguá do Sul, blocos F e G.
              </p>
              <center>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.64076339259!2d-49.1154960627387!3d-26.46730626569736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94de940dbec22f4d%3A0xf2864ccc867a7dc1!2sCentro+Universit%C3%A1rio+-+Cat%C3%B3lica+de+Santa+Catarina+em+Jaragu%C3%A1+do+Sul!5e0!3m2!1spt-BR!2sbr!4v1541540744701"
                  frameborder="0"
                  style="
                  border:0;
                  height: 500px !important;
                  width: 600px !important;
                  display: block;
                  "
                  allowfullscreen>
                </iframe>
              </center>
              <br>

            </div>
          </div>
          <div v-if="atual==='home'" class="md-layout-item md-size-100"><h3 class="md-body-2" style="font-size: 25px; font-weight: bold !important; margin: 0 !important;">Programação do mini-curso
            <br></h3>
              <p class="title">12/12 - Quarta-feira</p>
              19h - Início do mini-curso<br>
              22h - Término mini-curso<br>

              <p class="title">13/12 - Quinta-feira</p>
              19h - Início do mini-curso<br>
              22h - Término mini-curso<br>

              <p class="title">14/12 - Sexta-feira</p>
              09h - Início do Check-in<br>
              10h - Início da inspeção de segurança<br>
              12h - Término da inspeção de segurança<br>
              14h - Início das competições<br>
              21h - Término das atividades do dia<br>

              <p class="title">15/12 - Sábado</p>
              09h - Início das competições<br>
              12h - Intervalo<br>
              14h - Reinício das competições<br>
              21h - Término das atividades do dia<br>

              <p class="title">16/12 - Domingo</p>
              09h - Início das competições<br>
              12h - Intervalo<br>
              14h - Reinício das competições<br>
              21h - Término das atividades do dia<br>
            <br>
          </div>
          <div v-if="atual==='premiacao'">
            <div style="margin-left: 32vh">
              <p style="text-align: center !important;">
                <b>Haverá prêmios, em todas as categorias para o 1º, 2º e 3º lugar.</b>
                <br></p>
              <br>
              <img src="/img/trofeu.jpg" alt="Premiação summit wickedbotz" style="height: 260px !important; width: 210px !important;" class="center" border="1">
              <br><i>A Católica se reserva ao direito de cancelar a competição de categorias que tenham menos de 3 times competindo!</i>
            </div>
            <br><br>
          </div>
          <div v-if="atual==='taxaDeInscricao'">
            <p>
              O valor da inscrição será de:<br>
              <b>&nbsp;R$ 25,00</b> por participante<br>
              <h5 style="color: red; font-weight: bold">O pagamento das inscrições dos participantes e dos projetos será através de um boleto bancário único, emitido após devidamente preenchimento do formulário de inscrição.</h5>
            <br><br>
          </div>
          <div v-if="atual==='sobre'">
            <center class="text-content">
              A católica SC juntamente com a equipe Wickedbotz está organizando um evento de robótica, no qual haverá mini-cursos para os alunos de Ensino médio, fundamental de qualquer escola,
              ou estudantes de engenharia elétrica e engenharia mecânica da instituição católica SC.
              O participante deve se cadastrar no evento clicando
              <router-link :to="{ name: 'minicourse.register.index' }">
                <span class="negrito">aqui.</span>
              </router-link>
              <h4>Para poder se cadastrar o participante deve fornecer as seguintes Informações:</h4>
              <ul>
                <li>Nome</li>
                <li>RG</li>
                <li>CPF</li>
                <li>Email</li>
                <li>Cidade</li>
                <li>Estado</li>
                <li>Cópia da matrícula</li>
              </ul>
            </center>
            <br>
          </div>
        </div>
      </div>
    </div>
  </div>
</v-layout>
</template>

<script>
import VLayout from '@/layout/MiniCourseLanding.vue';

export default {
  components: {
    VLayout,
  },
  data () {
    return {
      atual: 'home'
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
    },
    styling(){
      console.log("Stylinggg");
      document.getElementById("tab-home").parentNode.style.display = "inline-block";
    },
  },
   methods: {

    localizacao(){
      this.localizacao = '<p>TestAppend</p>';
      return '<p>TestAppend</p>';
    },
    change(tabName){
      this.atual = tabName;
    }
  },
};
</script>

<style lang="scss">
$width-small: 360px;
$width-small-medium: 500px;
$width-medium: 860px;
$height-small: 640px;
$height-medium: 800px;
$height-large: 1200px;


.fix-sizes {
  @media screen and (max-height: $height-small) {
    // padding-top: 32vh !important;
    height: auto;
  }
}

.header-resize {
  height: 38vh !important;
}

.text-content {
  text-align: justify;
  margin-left: 6vh;
  margin-right: 6vh;
}

/* The component problem is on the animation */
.md-ripple-wave {
  top: 0 !important;
  left: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.fix-content {
  @media screen and (max-width: $width-small) {
    width: 100% !important;
    margin-left: 0px !important;
  }
  @media screen and (max-width: $width-medium) {
    width: 100% !important;
    margin-left: 0px !important;
    display: inline-block !important;
  }
  // width: 100% !important;
}

.md-tabs-navigation {
  @media screen and (max-width: $width-small-medium) {
    display: inline-block !important;
  }

}

.md-ripple > span {
  position: relative;
}

.header-resize {
  height: 38vh !important;
}

.title {
  color: black;
  font-weight: bold;
  font-size: 17px;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.murara {
  margin-left: 45%;
  margin-right: auto;
}

.btnInlineBlock {
  display: inline-block !important;
}
.md-layout-item {
  width: 100% !important;
}

</style>
