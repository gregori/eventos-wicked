<template>
<v-layout :headerColorOnScroll="400">
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">
            <login-card header-color="red">
              <h4 slot="title" class="card-title">Login</h4>
              <div slot="buttons">
                <provider-buttons slot="buttons"></provider-buttons>
              </div>
              <p slot="description" class="description">
                Autentique-se usando login e senha. Não possui uma conta?
                Então <router-link :to="{ name: 'register.index' }">
                  clique aqui
                </router-link> para se cadastrar
              </p>
              <form novalidate class="md-layout" @submit.prevent="validateUser" slot="inputs">
                <md-field :class="getValidationClass('email')">
                  <md-icon>email</md-icon>
                  <label>E-mail...</label>
                  <md-input
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="email"
                    v-model="form.email"
                    :disabled="sending"
                  />
                  <span class="md-helper-text" v-if="showValidationErrors && !$v.form.email.required">E-mail obrigatório</span>
                  <span class="md-helper-text" v-else-if="showValidationErrors && !$v.form.email.email">E-mail é invalido.</span>
                </md-field>
                <md-field :class="getValidationClass('password')">
                  <md-icon>lock_outline</md-icon>
                  <label>Senha...</label>
                  <md-input
                    type="password"
                    id="password"
                    v-model="form.password"
                    :disabled="sending"
                  />
                  <span class="md-helper-text" v-if="showValidationErrors && !$v.form.password.required">Favor preencher a senha</span>
                  <span class="md-helper-text" v-else-if="showValidationErrors && !$v.form.password.minLength">Senha muito curta, no minímo {{ passLenght }} caracteres</span>
                </md-field>
                <md-progress-bar md-mode="indeterminate" v-if="sending" />
                <md-card-actions>
                  <md-button type="submit" class="md-primary" :disabled="sending">
                    Entrar <md-icon>send</md-icon>
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
import VLayout from '@/layout/Landing.vue';
import ProviderButtons from '@/components/ProviderButtons.vue'
import LoginCard from '@/components/cards/LoginCard.vue'
import { required, email, minLength } from 'vuelidate/lib/validators'
import store from '@/store';

export default {
  components: {
    VLayout,
    LoginCard,
    ProviderButtons,
  },

  bodyClass: 'login-page',

  data() {
    return {
      form: {
        email: null,
        password: null
      },
      sending: false,
      passLenght: 6,
      showValidationErrors: false,
    };
  },

  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },

  props: {
    header: {
      type: String,
      default: require('@/assets/img/hero/DSC00689.jpg')
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
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-form-group': true,
          'md-error': field.$invalid && field.$dirty
        }
      }
    },

    loginWithEmailAndPassword () {

    },

    validateUser () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.sending = true;
        this.loginWithEmailAndPassword({
          email: this.form.email,
          password: this.form.password,
        })
      } else {
        this.showValidationErrors = true;
      }
    },
  },
};
</script>

<style lang="scss">
  .md-progress-bar {
    width: 100%;
  }
</style>
