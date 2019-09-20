<template>
<v-layout>
  <div class="wrapper">
    <parallax class="section page-header header-filter fix-sizes" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
    			<div class="md-layout-item md-size-70 md-small-size-70 md-xsmall-size-100">
            <h2 class="title">
              1º Summit de Robótica da Católica SC
            </h2>
            <h4>
              O que fazer com seus robôs parados? Já está quase terminando o ano!
              Já pensou em participar de um dos maiores eventos de robótica do sul do país? Então prepare-se!
              Vem aí o 1º Summit de Robótica da Católica SC, em Jaraguá do Sul! Um evento apoiado pela Católica de Santa Catarina e
              idealizado pela Equipe de Robótica Wickedbotz.
            </h4>
            <h4>
              <p style="text-align: left;" class="md-body-2">A competição irá acontecer nos dias 14, 15 e 16 de Dezembro de 2018, ocorrendo das 9:00 às 21:00 no campus da Católica de Santa Catarina em Jaraguá do Sul, blocos F e G.</p>
            </h4>
            <br>
            <router-link tag="button" :to="{ name: 'team.edit' }" class="md-list-item-button md-list-item-container md-button-clean">
              <md-button href="/team/edit" class="md-success md-lg">
                Inscrição do 1º Summit de robótica da Católica SC
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
              <h2 class="title text-center">1º Summit de Robótica da Católica SC</h2>
              <h4 class="description">
                O Summit de Robótica da Católica SC é um projeto integrador dos cursos de Engenharia de Software e Sistemas de Informação da Católica de Santa Catarina e este evento é dividido em dois projetos:
                <ul>
                  <li>
                  Minicursos são para qualquer pessoa que tenha interesse na área de robótica e 
                  não tem condições de montar seu robô, estes minicursos irão acontecer nos dias 12/12, 13/12 das 19h até as 22h,
                  a idéia dos minicursos é fomentar a robótica nos tempos atuais e promover a construção de robôs
                  que irão para participar no 1º Summit de Robótica da Católica SC
                  <router-link :to="{ name: 'minicourse.register.index' }">
                    <span class="negrito">inscreva-se.</span>
                  </router-link>
                  </li>
                  <br>
                  <li>
                    O campeonato de robótica, contemplando seguintes categorias: Seguidor de linha pro, Seguidor de linha júnior, Sumô mini (500g) auto,
                    Sumô mini (500g) auto júnior, Sumô 3kg auto, Sumô 3kg RC, Sumô 1kg Lego, Trekking, Combate: Antweight, Bettleweight,
                    Hobbyweight e Antweight júnior, Futebol simulação 2D, Futebol Very Small Size League, Futebol VSS RC, Artbot & Hockey
                    <router-link :to="{ name: 'register.index' }">
                      <span class="negrito">inscreva-se.</span>
                    </router-link>
                    <br>
                    <br>
                    <a href="/categories">Clique aqui</a> para ver mais informações sobre as categorias
                  </li>
                </ul>
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
                    Católica de Santa Catarina<br> Câmpus Jaraguá do Sul
                  </div>
                  <h4 class="card-title">
                    Como chegar?
                  </h4>
                  <md-card-actions class="text-center">
                    <md-button target="_blank" href="https://www.google.com.br/maps/place/Centro+Universit%C3%A1rio+-+Cat%C3%B3lica+de+Santa+Catarina+em+Jaragu%C3%A1+do+Sul/@-26.4676542,-49.1151968,17z/data=!4m13!1m7!3m6!1s0x94de9412aa982205:0xa2f1d76860e6aaa3!2sR.+dos+Imigrantes,+500+-+Rau,+Jaragu%C3%A1+do+Sul+-+SC,+89254-700!3b1!8m2!3d-26.4702377!4d-49.1116563!3m4!1s0x94de940dbec22f4d:0xf2864ccc867a7dc1!8m2!3d-26.46731!4d-49.113708" class="md-just-icon md-simple">
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
import firestore from '@/plugins/firestore';

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
    let usersRef = firestore.collection('users');
    var allCities = usersRef.get()
    .then(snapshot => {
      console.log(Object.values(snapshot.docs).length)
      // snapshot.forEach(doc => {
      //   console.log(doc.id, '=>', doc.data());
      // });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
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
