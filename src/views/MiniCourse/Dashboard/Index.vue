<template>
<v-layout>
  <div class="wrapper">
    <div class="main main-raised">
      <div class="my-title">
        <h3>Dados pessoais</h3>
      </div>
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-15 ml-auto" >
              <image-upload
                :image-url="profileImage"
                :on-success="commitProfileImage"
                :base-dir="storageBaseDir"
              />
            </div>
            <div class="md-layout-item md-size-80 ml-auto mr-auto">
              <div class="container">
                <form novalidate @submit.prevent="validateForm">
                  <md-field :class="getValidationClass('email')">
                    <md-icon>email</md-icon>
                    <label>E-mail</label>
                    <md-input
                      id="email"
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

                  <md-field :class="getValidationClass('state')">
                    <md-icon>place</md-icon>
                    <label for="website">Estado...</label>
                    <md-input
                      v-model="form.state"
                      name="state"
                      id="state"
                      :disabled="sending"
                    />
                    <span class="md-helper-text" v-if="showValidationErrors && !$v.form.country.required">Estado é obrigatório</span>
                  </md-field>

                  <md-field :class="getValidationClass('city')">
                    <md-icon>my_location</md-icon>
                    <label for="city">Cidade</label>
                    <md-input
                      v-model="form.city"
                      type="text"
                      name="city"
                      id="city"
                      :disabled="sending"
                    />
                    <span class="md-helper-text" v-if="showValidationErrors && !$v.form.city.required">Cidade é obrigatório</span>
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

                  <md-field slot="inputs">
                    <md-icon>adb</md-icon>
                    <label for="category">Categoria que deseja participar</label>
                    <md-select :disabled='form.miniCourse !== null && false' class="cat" required name="category" v-model="form.miniCourse" id="category">
                      <md-optgroup class="category-cgi" v-for="categoria in categories" :key="categoria.id" :label="categoria.label">
                        <md-option class="category-cty" :value="categoria.id">{{ categoria.name }} Vagas: {{ 20 - categoria.participants }}</md-option>
                      </md-optgroup>
                    </md-select>
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
                <div class="md-layout md-gutter md-alignment-center md-button md-primary" :disabled="sending" @click="sendEmail">
                  <div class="md-ripple">
                    <div class="md-button-content">Gerar boleto</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {{vuexObserver}}
    </div>
  </div>
</v-layout>
</template>

<script>
import VLayout from '@/layout/MiniCourseRegister.vue';
import { mapGetters } from "vuex";
import { Tabs } from "@/components";
import DashboardSteps from '@/components/DashboardSteps.vue'
import store from '@/store';
import { required, email } from 'vuelidate/lib/validators'
import ImageUpload from '@/components/ImageUpload.vue'
import { CATEGORY_JSON } from '@/config.js';

export default {
  components: {
    VLayout,
    DashboardSteps,
    ImageUpload
  },
  data () {
    return {
      team: {
        name: ''
      },
      form: {
        name: null,
        rg: null,
        cpf: null,
        dateOfBirth: null,
        phone: null,
        email: null,
        city: null,
        state: null,
        miniCourse: 'none',
        actualState: null
      },
      categories: [],
      sending: false,
      passLenght: 6,
      showValidationErrors: false,
    }
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
      phone: { required },
      city: { required },
      state: { required },
      miniCourse: { required }
    },
  },

  computed: {
    ...mapGetters('auth', {
      profileEmail: 'profileEmail',
      profileImage: 'profileImage',
      storageBaseDir: 'storageBaseDir',
      uid: 'uid'
    }),
    ...mapGetters('user', {
      userData: 'data',
      userObserver: 'observer',
      id: 'id'
    }),
    vuexObserver() { // Make sure to call method
      if(this.userObserver) this.fetchData();
    },
    getCategories() {
      return CATEGORY_JSON;
    },
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
  },

  methods: {
    fetchData() {
      let data = Object.assign({}, this.userData);
      Object.entries(data).forEach(([key, value]) => {
        this.form[key] = value
      });
    },

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
      }).catch()
    },

    commit (){
      let data = Object.assign({}, this.form);
      store.dispatch('user/updateData', data).then(() => {
        this.sending = false;
      }).catch()
    },

    sendEmail() {
      let user = this.userData;
      this.sending = true;

      if (!user.name || !user.cpf || !user.phone || !user.city || !user.state) {
        this.sending = false;
        store.dispatch('alert/error', 'Favor preencher e salvar todos os dados antes de gerar seu boleto');
        setTimeout(() => store.dispatch('alert/clear'), 4000);
        return ;
      }

      let serviceID = 'gmail';
      let template = 'img_test';
      let content = {
        uid: this.id,
        name: user.name,
        email: this.profileEmail,
        cpf: user.cpf,
        phone: user.phone,
        payment_value: `R$ 25,00`,
        imgURL: this.profileImage
      };

      emailjs.init(process.env.VUE_APP_EMAILJS_API);
      emailjs.send(serviceID, template, content)
        .then((response) => {
          if (response.status == 200) {
            store.dispatch('members/pendentPayment', this.id);
            this.sending = false;
            store.dispatch('alert/success', 'Seus dados estão sendo processados. Enviaremos um email confirmando sua inscrição, juntamente com o boleto a ser pago.');
            setTimeout(() => store.dispatch('alert/clear'), 4000);
          }
        })
        .catch((error) => {
          console.log(error);
          this.sending = false;
          store.dispatch('alert/error', 'Hove um erro ao gerar seu boleto, por favor tente mais tarde');
          setTimeout(() => store.dispatch('alert/clear'), 4000);
        });
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
  },


  mounted() {
  },


  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  bodyClass: 'dashboard-layout',
};
</script>

<style lang="scss" >
.md-stepper-header {
  width:  3vh !important;
}

.my-title {
  margin-left: auto;
  margin-right: auto;
  width: 48vh;
  text-align: center;
  padding-top: 2vh;
}

.md-menu-content{
  max-width: 60vh !important;
}

.category-cty{
  margin-left: 20px;
}
</style>
