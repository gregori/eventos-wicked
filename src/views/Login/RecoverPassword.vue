<template>
<v-layout :headerColorOnScroll="400">
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">
            <login-card header-color="red">
              <h4 slot="title" class="card-title">Recuperar a Senha</h4>
              <div slot="buttons">
                <provider-buttons slot="buttons"></provider-buttons>
              </div>
              <p slot="description" class="description">
                Preencha seu email para receber um email para redefinir sua senha. Não possui uma conta?
                Então <router-link :to="{ name: 'register.index' }">
                  clique aqui
                </router-link> para se cadastrar
              </p>
              <form novalidate class="md-layout" @submit.prevent="validateForm" slot="inputs">
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
                <md-progress-bar md-mode="indeterminate" v-if="sending" />
                <md-card-actions>
                  <md-button type="submit" class="md-primary" :disabled="sending">
                    Enviar <md-icon>send</md-icon>
                  </md-button>
                  <router-link :to="{ name: 'login.index' }" class="md-button md-white">
                    <div class="md-ripple">
                      <div class="md-button-content">Fazer login</div>
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
import { required, email } from 'vuelidate/lib/validators'
import firebase from '@/plugins/firebase';
import store from '@/store';

export default {
  name: 'login-recoverPassword',

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

    commitForm () {
      firebase.auth().sendPasswordResetEmail(this.form.email).then(() => {
        this.sending = false
        store.dispatch('alert/success', this.$t('auth.successfuly-send-recover-email'));
      }).catch((error) => {
        this.sending = false
        let translationKey = `errors.${error.code}`;
        let msg = error.message;
        if (this.$te(translationKey)) msg = this.$t(translationKey);
        store.dispatch('alert/error', msg);
      });
    },

    validateForm () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.sending = true;
        this.commitForm({
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
