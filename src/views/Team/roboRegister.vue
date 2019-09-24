<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-40 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">
            <login-card header-color="red">
              <h1 slot="title" class="card-title" style="font-size: 18px;">Cadastro de robôs</h1>

              <form novalidate class="md-layout" @submit.prevent="registerRobot" slot="inputs">
               <md-field slot="inputs">
                  <md-icon>account_circle</md-icon>
                  <label for="name">Nome</label>
                  <md-input required name="name" id="name" v-model="form.name"></md-input>
                </md-field>

                <md-field slot="inputs">
                  <md-icon>adb</md-icon>
                  <label for="category">Categoria</label>
                  <md-select class="cat" required name="category" v-model="form.category" id="category">
                    <md-optgroup v-for="categoria in categorias" :key="categoria.id" :label="categoria.label">
                      <md-option v-for="cat in categoria.categorias" :key="cat.id" :value="cat.name">{{ cat.name }}</md-option>
                    </md-optgroup>
                  </md-select>
                </md-field>

                <md-progress-bar id="prgBar" md-mode="indeterminate" v-if="true" slot="inputs"></md-progress-bar>

                <md-field slot="inputs">
                  <label>Imagem do robo</label>
                  <md-file required id="Img" @change="uploadImg" v-model="form.Img" accept="image/*"/>
                </md-field>

                <div class="clearBoth" slot="inputs"></div>

                <md-button :disabled='!this.showB' slot="footer" type="submit" class="md-simple md-success md-lg">
                  Cadastrar
                </md-button>
                <md-button href="/dashboard" slot="footer" class="md-simple md-danger md-lg">
                  Voltar
                </md-button>
              </form>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import { required } from 'vuelidate/lib/validators';
import store from '@/store';

export default {
  components: {
    LoginCard
  },

  bodyClass: "login-page",

  data() {
    return {
      prg: false,
      showB: false,
      form:{
        Img: null,
        name: null,
        category: null
      },
      categorias: [
        {
        label: "Sumô",
        categorias: [
          {name: "Sumô Junior"},
          {name: "Sumô 1kg Lego"},
          {name: "Sumô 500g Autônomo"},
          {name: "Sumô 3kg Autônomo"},
          {name: "Sumô 3kg Radio Controlado"},
        ]},

        {
        label: "Seguidor de Linha",
        categorias:[
          {name: "Seguidor Júnior"},
          {name: "Seguidor Pro"},
        ]},

        {
        label: "Trekking",
        categorias:[
          {name: "Trekking Pro"},
        ]},

        {
        label: "Combate",
        categorias:[
          {name: "Antweight Junior (454g)"},
          {name: "Antweight - 1lb (454g)"},
          {name: "Beetleweight - 3lb (1,36kg)"},
          {name: "Beetleweight - 3lb (1,36kg)"},
        ]},

        {
        label: "ArtBot",
        categorias:[
          {name: "Kinetic"},
        ]},

        {
        label: "Futebol",
        categorias:[
          {name: "Simulation 2D"},
          {name: "Mini"},
        ]},

        {
        label: "Hóquei",
        categorias:[
          {name: "Hóquei"},
        ]},

      ]
    };
  },

  props: {
    header: {
      type: String,
      default: require("@/assets/img/hero/img2.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },

  methods:{
    uploadImg(e) {
    },
    registerRobot (){
    },

  }
};
</script>

<style lang="css">


@media only screen and (max-width: 650px) {
  .sidePosition{
    width: 100% !important;
    float: left;
  }
}

@media only screen and (min-width: 800px) {
  .sidePosition{
    width: 50% !important;
    float: left;
  }
}
.clearBoth{
  clear: both !important;
}
.md-subheader {
  padding: 1.5vh;
}

.cat{
  width: 300px;
}

.md-menu-content{
  max-width: none;
}
</style>
