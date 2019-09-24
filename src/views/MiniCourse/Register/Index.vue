<template>
<v-layout :headerColorOnScroll="400">
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">
            <login-card header-color="red">
              <h1 slot="title" class="card-title" style="font-size: 18px;">Cadastre-se no mini-curso</h1>

              <form novalidate enctype="multipart/form-data" method="post" class="md-layout" @submit.prevent="validateUser" slot="inputs">
                <md-field :class="getValidationClass('email')">
                  <md-icon>email</md-icon>
                  <label>E-mail...</label>
                  <md-input
                    type="email"
                    id="email"
                    autocomplete="email"
                    v-model="form.email"
                    :disabled="sending"
                  />
                  <span class="md-helper-text" v-if="showValidationErrors && !$v.form.email.required">E-mail obrigatório</span>
                  <span class="md-helper-text" v-else-if="showValidationErrors && !$v.form.email.email">E-mail é invalido.</span>
                </md-field>
                <md-field :class="getValidationClass('password')">
                  <md-icon>email</md-icon>
                  <label>Senha...</label>
                  <md-input
                    type="password"
                    id="password"
                    autocomplete="password"
                    v-model="form.password"
                    :disabled="sending"
                  />
                  <span class="md-helper-text" v-if="showValidationErrors && !$v.form.password.required">Senha obrigatória</span>
                  <span class="md-helper-text" v-else-if="showValidationErrors && !$v.form.password.email">Senha invalida.</span>
                </md-field>
                <md-progress-bar md-mode="indeterminate" v-if="sending" />
                <md-card-actions>
                  <md-button type="submit" class="md-primary" :disabled="sending">
                    Cadastrar <md-icon>send</md-icon>
                  </md-button>
                  <router-link :to="{ name: 'login.recoverPassword' }" class="md-button md-white">
                    <div class="md-ripple">
                      <div class="md-button-content">Recuperar a senha?</div>
                    </div>
                  </router-link>
                </md-card-actions>
              </form>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</v-layout>
</template>

<script>
import VLayout from '@/layout/MiniCourseLanding.vue';
import Vue from 'vue';
import ProviderButtons from '@/components/ProviderButtons.vue'
import LoginCard from '@/components/cards/LoginCard.vue'
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'
import store from '@/store';
import { mapGetters } from "vuex";
import ImageUpload from '@/components/ImageUpload.vue'

export default {
  components: {
    VLayout,
    LoginCard,
    ProviderButtons,
    ImageUpload,
  },

  bodyClass: 'minicourse-register-page',

  data() {
    return {
      form: {
        email: null,
        password: null,
        name: null,
        miniCourse: null,
      },
      sending: false,
      passLenght: 6,
      showValidationErrors: false,
    };
  },

  validations: {
    form: {
      email: { required },
      password: { required },
    },
  },

  props: {
    header: {
      type: String,
      default: require('@/assets/img/hero/DSC01055.jpg')
    }
  },

  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
    ...mapGetters('members', {
      members: 'entries',
    }),
    ...mapGetters('auth', {
      teamCaptainID: 'teamCaptainID',
      uid: 'uid',
    }),
    ...mapGetters('user', {
      userData: 'data',
      userObserver: 'observer',
    }),
    vuexObserver() { // Make sure to call method
      if(this.userObserver) this.fetchData();
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

    createUserEmailAndPassword () {
    },

    validateUser () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.sending = true;
        this.createUserEmailAndPassword({
          email: this.form.email,
          password: this.form.password,
        });
      } else {
        this.showValidationErrors = true;
      }
    }
  }
};
</script>

<style lang="scss">
.md-progress-bar {
  width: 100%;
}
.flash-messages {
  position: fixed;
  bottom: 0px;
  z-index: 9999;
  width: 100%;
  padding: 15px;
  .alert {
    margin-bottom: 0px;
  }
}
</style>
