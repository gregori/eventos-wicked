<template>
<v-layout>
  <div class="wrapper">
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <dashboard-steps currentStep="profile.edit">
              <div class="md-layout" slot="content">
                <div class="md-layout-item md-size-15 ml-auto" >
                  <!-- <image-upload
                    :image-url="profileImage"
                    :on-success="commitProfileImage"
                  /> -->
                </div>
                <div class="md-layout-item md-size-80 ml-auto mr-auto">
                  <div class="container">
                    <form novalidate @submit.prevent="validateForm">
                      <md-field :class="getValidationClass('email')">
                        <md-icon>email</md-icon>
                        <label>E-mail</label>
                        <md-input
                          id="email"
                          name="email"
                          :value="profileEmail"
                          :disabled="true"
                        />
                      </md-field>
                      <md-field :class="getValidationClass('name')">
                        <md-icon>account_circle</md-icon>
                        <label for="name">Nome Completo </label>
                        <md-input
                          v-model="form.name"
                          name="name"
                          id="name"
                          :disabled="sending"
                        />
                        <span class="md-helper-text" v-if="showValidationErrors && !$v.form.name.required">Nome Completo é obrigatório</span>
                      </md-field>
                      <md-field :class="getValidationClass('rg')">
                        <md-icon>content_paste</md-icon>
                        <label for="name">RG</label>
                        <md-input
                          v-model="form.rg"
                          name="rg"
                          id="rg"
                          :disabled="sending"
                        />
                        <span class="md-helper-text" v-if="showValidationErrors && !$v.form.rg.required">RG é obrigatório</span>
                      </md-field>

                      <md-field :class="getValidationClass('cpf')">
                        <md-icon>assignment_ind</md-icon>
                        <label for="cpf">CPF</label>
                        <md-input
                          v-model="form.cpf"
                          name="cpf"
                          id="cpf"
                          :disabled="sending"
                        />
                        <span class="md-helper-text" v-if="showValidationErrors && !$v.form.cpf.required">CPF é obrigatório</span>
                      </md-field>
                      <md-field :class="getValidationClass('dateOfBirth')">
                        <md-icon>event</md-icon>
                        <label for="dateOfBirth">Data de Nascimento</label>
                        <md-input
                          v-model="form.dateOfBirth"
                          type="date"
                          name="dateOfBirth"
                          id="dateOfBirth"
                          :disabled="sending"
                        />
                        <span class="md-helper-text" v-if="showValidationErrors && !$v.form.dateOfBirth.required">Data de Nascimento é obrigatório</span>
                      </md-field>
                      <md-field :class="getValidationClass('phone')">
                        <md-icon>phone</md-icon>
                        <label for="phone">Telefone</label>
                        <md-input
                          v-model="form.phone"
                          name="phone"
                          id="phone"
                          :disabled="sending"
                        />
                        <span class="md-helper-text" v-if="showValidationErrors && !$v.form.phone.required">Telefone é obrigatório</span>
                      </md-field>

                      <md-progress-bar md-mode="indeterminate" v-if="sending" />
                      <md-card-actions>
                        <a
                          href="javascript:void(0)"
                          @click="sendPasswordResetEmail"
                          class="md-button md-white"
                          :disabled="sending"
                        >
                          <div class="md-ripple">
                            <div class="md-button-content">Alterar a Senha</div>
                          </div>
                        </a>
                        <md-button type="submit" class="md-primary" :disabled="sending">
                          Salvar <md-icon>save</md-icon>
                        </md-button>
                      </md-card-actions>
                    </form>
                  </div>
                </div>
              </div>
            </dashboard-steps>
          </div>
        </div>
      </div>
    </div>
    <!-- {{vuexObserver}} -->
  </div>
</v-layout>
</template>

<script>
import VLayout from '@/layout/Register.vue';
import Vue from 'vue';
import { required, maxLength, minLength } from 'vuelidate/lib/validators'
import DashboardSteps from '@/components/DashboardSteps.vue'
import ImageUpload from '@/components/ImageUpload.vue'
import store from '@/store';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'profile-edit',

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
        rg: null,
        cpf: null,
        dateOfBirth: null,
        phone: null,
        email: null,
      },
      sending: false,
      passLenght: 6,
      showValidationErrors: false,
    };
  },

  validations: {
    form: {
      name: { required },
      rg: { required },
      cpf: {
        required,
        // minLength: minLength(11),
        // maxLength: maxLength(11),
      },
      dateOfBirth: { required },
      phone: { required }
    },
  },

  computed: {
    ...mapGetters('auth', {
      profileEmail: 'profileEmail',
      profileImage: 'profileImage',
      teamCaptainID: 'teamCaptainID',
      // storageBaseDir: 'storageBaseDir',
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
    // fetchData() {
      // let data = Object.assign({}, this.userData);
      // Object.entries(data).forEach(([key, value]) => {
      //   this.form[key] = value
      // });
    // },

    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-form-group': true,
          'md-error': field.$invalid && field.$dirty
        }
      }
    },

    sendPasswordResetEmail() {
      this.sending = true
    },

    commitProfileImage(photoURL) {
      this.sending = true
      store.dispatch('auth/updateProfile', { photoURL: photoURL }).then(() => {
        this.sending = false
      }).catch()
    },

    commit (){
      let data = Object.assign({}, this.form);
      console.log(data)
      // console.log(teste())
      console.log()
      console.log(this.teamCaptainID)
      data = {
        "person_type_id": (this.teamCaptainID ? 3 : 1),
        "name": data.name,
        "email": this.profileEmail,
        "cpf:": data.cpf,
        "rg": data.rg,
        "date_of_birth": data.dateOfBirth + " 00:00:00",
        "phone": data.phone
      }
      console.log(data)
      this.$axios.post(process.env.VUE_APP_WICKED_API_HOST + 'people', data)
      .then((res) => {
        this.sending = false;
        console.log(res)
      })
      .catch(err => {
        this.sending = false;
        console.log(err);

      })
    },

    validateForm (event) {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.sending = true;
        this.commit();
      } else {
        this.showValidationErrors = true;
      }
    },
  }
};
</script>

<style lang="scss">
</style>
