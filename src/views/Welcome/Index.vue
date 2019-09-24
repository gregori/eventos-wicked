<template>
<v-layout>
  <div class="wrapper">
    <parallax class="section page-header header-filter fix-sizes" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
    			<div class="md-layout-item md-size-70 md-small-size-70 md-xsmall-size-100">
            <h2 class="title">
              2º Summit de Robótica da Católica SC
            </h2>
            <h4>
              O que fazer com seus robôs parados? Já está quase terminando o ano!
              Já pensou em participar de um dos maiores eventos de robótica do sul do país?
              Então prepare-se! Vem aí o 2º Summit de Robótica da Católica SC, em Joinville!
              Um evento apoiado pela Católica de Santa Catarina e idealizado pela Equipe de Robótica Wickedbotz e
              pelo Grupo Estudantil de Robótica Móvel - GERM e a Liga Brasileira de Robótica.
            </h4>
            <h4>
              <p style="text-align: left;" class="md-body-2">
                A competição irá acontecer nos dias 15, 16 e 17 de
                Novembro de 2019, ocorrendo das 9:00 às 21:00 no campus da Católica de Santa Catarina em Joinville, blocos A.
              </p>
            </h4>
            <br>
            <router-link tag="button" :to="{ name: '' }" class="md-list-item-button md-list-item-container md-button-clean">
              <md-button href="/team/edit" class="md-success md-lg">
                Incrições em breve
              </md-button>
            </router-link>
            <!-- <router-link tag="button" :to="{ name: 'minicourse.register.index' }" class="md-list-item-button md-list-item-container md-button-clean">
              <md-button href="/team/edit" class="md-success md-lg">
                Participar do mini-curso
              </md-button>
            </router-link> -->
    			</div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised fix-button">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
              <h2 class="title text-center">
                2º Summit de Robótica da Católica SC
              </h2>
              <h4 class="description">
                O Summit de Robótica da Católica SC é um projeto integrador dos cursos de Engenharia de Software e
                Sistemas de Informação da Católica de Santa Catarina e este evento é um campeonato de robótica, contemplando
                seguintes categorias: Seguidor de linha pro, Seguidor de linha júnior, Sumô mini (500g) auto, Sumô 3kg auto,
                Sumô 3kg RC, Sumô 1kg Lego, Trekking, Combate: Fairyweight, Antweight, Bettleweight, Hobbyweight,
                Futebol Very Small Size League, Futebol VSS RC, Artbot e Hockey.
                <br />

                <router-link :to="{name: 'categories.index'}">
                  Clique aqui
                </router-link>
                para ver mais informações sobre as categorias
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Local do evento</h2>
          <div class="team">
            <div class="col-md-3">
              <div class="team-player">
                <md-card class="md-card-plain">
                  <div class="md-layout-item md-size-25 md-small-size-100 mx-auto">
                    <img :src="sponsorImg2" class="img-raised rounded-circle img-fluid"><br><br>
                    Católica de Santa Catarina<br> Câmpus Joinville
                  </div>
                  <h4 class="card-title">
                    Como chegar?
                  </h4>
                  <md-card-actions class="text-center">
                    <md-button target="_blank" href="https://goo.gl/maps/jRL8e1So5yhZMmbSA" class="md-just-icon md-simple">
                      <i class="fas fa-map-marked-alt fa-2x"></i>
                    </md-button>
                  </md-card-actions>
                </md-card>
              </div>
            </div>
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
  bodyClass: 'landing-page',
  components: {
    VLayout,
  },
  props: {
    header: {
      type: String,
      default: require('@/assets/img/hero/DSC00352.jpg')
    },
    sponsorImg1: {
      type: String,
      default: 'https://loremflickr.com/300/300/1',
    },
    sponsorImg2: {
      type: String,
      default: require('@/assets/img/logo-icon-with-border.png'),
    },
    sponsorImg3: {
      type: String,
      default: 'https://loremflickr.com/300/300/3',
    }
  },

  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
$height-small: 640px;
$height-medium: 800px;
$height-large: 1200px;

.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.description {
  text-align: justify !important;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}

.md-card img{
  width: 65% !important;
}

.fix-sizes {
  @media screen and (max-height: $height-small) {
    // padding-top: 32vh !important;
    height: auto;
  }
}

.fix-button {
  @media screen and (max-height: $height-medium) {
    margin-top: -3vh !important;
  }
}
</style>
