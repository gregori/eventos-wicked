<template>
<v-layout>
  <div class="wrapper">
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
          <dashboard-steps currentStep="robot.edit">
            <div class="md-layout teste" slot="content">
              <div class="md-layout-item md-size-15 mr-auto" slot="content">
                  <image-upload
                    :image-url="form.imageURL"
                    :on-success="commitLogo"
                    v-if="logoBaseDir"
                    :base-dir="logoBaseDir"
                  />
              </div>

              <div class="md-layout-item md-size-80 ml-auto" slot="content">
              <div class="container">
                <form novalidate @submit.prevent="validateForm">
                  <md-field :class="getValidationClass('name')">
                    <md-icon>group</md-icon>
                    <label for="name">Nome</label>
                    <md-input
                      v-model="form.name"
                      name="name"
                      autocomplete="off"
                      id="name"
                      :disabled="sending"
                    />
                    <span class="md-helper-text" v-if="showValidationErrors && !$v.form.name.required">Nome da Equipe é obrigatório</span>
                  </md-field>

                  <md-field slot="inputs">
                    <md-icon>adb</md-icon>
                    <label for="category">Categoria</label>
                    <md-select class="cat" required name="category" v-model="form.category" id="category">
                      <md-optgroup class="category-cgi" v-for="categoria in getCategories" :key="categoria.id" :label="categoria.label">
                        <md-option class="category-cty" v-for="cat in categoria.categorias" :key="cat.id" :value="cat.name">{{ cat.name }}</md-option>
                      </md-optgroup>
                    </md-select>
                  </md-field>


                  <md-progress-bar md-mode="indeterminate" v-if="sending" />
                  <md-card-actions>
                    <md-button type="submit" class="md-primary" :disabled="sending">
                      Adicionar <md-icon>add</md-icon>
                    </md-button>
                  </md-card-actions>
                </form>
              </div>
            </div>


                <div class="md-layout-item md-size-100 ml-auto mr-auto" v-if="Object.keys(this.robots).length >= 1" slot="content">
                  <md-table v-model="robots" md-sort="name" md-sort-order="asc" md-card>
                    <md-table-toolbar>
                      <h3 class="md-title" style="color: black !important">Robos da equipe</h3>
                    </md-table-toolbar>

                    <md-table-row slot="md-table-row" slot-scope="{ item }">
                      <md-table-cell md-label="O robo">
                        <md-avatar class="md-large">
                          <img :src="item.imageURL">
                        </md-avatar>
                      </md-table-cell>
                      <md-table-cell md-label="Nome" md-sort-by="name">{{ item.name }}</md-table-cell>
                      <md-table-cell md-label="Categoria" md-sort-by="category">{{ item.category }}</md-table-cell>
                      <md-table-cell md-label="">
                        <a href="javascript:void(0)" @click="removeRobot(item)"><md-icon>remove_circle</md-icon></a>
                      </md-table-cell>
                    </md-table-row>
                  </md-table>
                </div>

                <div v-else  class="md-layout-item md-size-100 ml-auto mr-auto">
                  <md-table>
                    <md-table-toolbar>
                      <h3 class="md-title" style="color: black !important">Robos da equipe</h3>
                    </md-table-toolbar>

                    <md-table-row slot="md-table-row">
                      <md-table-cell>
                        <p>Esta equipe não possui nenhum robô cadastrado</p>
                      </md-table-cell>
                    </md-table-row>
                  </md-table>
                </div>

              </div>
            </dashboard-steps>
          </div>
        </div>
      </div>
    </div>
    {{vuexObserver}}
  </div>
</v-layout>
</template>

<script>
import VLayout from '@/layout/Register.vue';
import firebase from '@/plugins/firebase';
import firestore from '@/plugins/firestore';
import { required, email } from 'vuelidate/lib/validators'
import DashboardSteps from '@/components/DashboardSteps.vue'
import ImageUpload from '@/components/ImageUpload.vue'
import store from '@/store';
import { mapActions, mapGetters } from 'vuex';
import {CATEGORY_JSON} from '@/config.js';

export default {
  name: 'robot-edit',

  components: {
    VLayout,
    DashboardSteps,
    ImageUpload,
  },

  bodyClass: 'dashboard-layout',

  data() {
    return {
      form: {
        name: null,
        category: null,
        imageURL: null,
        actualState: null
      },
      sending: false,
      showValidationErrors: false,
    };
  },

  computed: {
    ...mapGetters('robots', {
      robots: 'entries',
      // robotsObserver: 'observer',
      logoBaseDir: 'storageBaseDir',
    }),
    vuexObserver() { // Make sure to call method
      // if(this.robotsObserver) this.fetchData();
    },
    anyRobot() {
      return this.robots.length > 0;
    },
    getCategories(){
      return CATEGORY_JSON;
    }
  },

  validations: {
    form: {
      name: { required },
      category: { required },
    },
  },

  methods: {
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]
      if (field) {
        return {
          'md-form-group': true,
          'md-error': field.$invalid && field.$dirty
        }
      }
    },

    resetForm() {
      this.form = {
        name: null,
        category: null,
        imageURL: null,
        actualState: null
      }
      this.sending = false;
      this.showValidationErrors = false
      this.$v.$reset();
    },

    commitLogo(photoURL) {
      this.form.imageURL = photoURL;
      this.sending = false;
    },

    removeRobot(robot) {
      this.sending = true;
      if (robot.actualState === null) {
        store.dispatch('robots/deleteEntry', robot.id).then(() => {
          this.sending = false;
        }).catch((error) => {
          this.showError(error)
        })
      } else {
        store.dispatch('alert/error', "Este robô já está pago");
        setTimeout(() => store.dispatch('alert/clear'), 2500);
        this.sending = false
      }
    },

    commit() {
      let data = Object.assign({}, this.form);
      store.dispatch('robots/addEntry', data).then(() => {
        this.sending = false;
        this.resetForm();
      }).catch((error) => {
        this.showError(error)
      })
    },

    showError(error) {
      this.sending = false;
      let translationKey = `errors.${error.code}`;
      let msg = error.message;
      if (this.$te(translationKey)) msg = this.$t(translationKey);
      store.dispatch('alert/error', msg);
    },

    validateForm () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.sending = true;
        this.commit();
      } else {
        this.showValidationErrors = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.teste{
  margin-top: 3vh !important;
}

.md-menu-content{
  max-width: none !important;
}

.category-cty{
  margin-left: 20px;
}
</style>
