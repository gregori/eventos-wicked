<template>
<v-layout>
  <div class="wrapper">
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <dashboard-steps currentStep="team.edit">
              <div class="md-layout" slot="content" v-if="hasTeam">
                <div class="md-layout-item md-size-15 ml-auto">
                  <image-upload
                    :image-url="form.logoURL"
                    :on-success="commitLogo"
                    v-if="logoBaseDir || !isCapitain"
                    :base-dir="logoBaseDir"
                  />
                </div>
                <div class="md-layout-item md-size-80 ml-auto mr-auto">
                  <div class="container">
                    <form novalidate @submit.prevent="validateForm">
                      <md-field :class="getValidationClass('name')">
                        <md-icon>group</md-icon>
                        <label for="name">Nome da Equipe</label>
                        <md-input
                          v-model="form.name"
                          name="name"
                          id="name"
                          :disabled="sending || !isCapitain"
                        />
                        <span class="md-helper-text" v-if="showValidationErrors && !$v.form.name.required">Nome da Equipe é obrigatório</span>
                      </md-field>

                      <md-field :class="getValidationClass('slogan')">
                        <md-icon>toys</md-icon>
                        <label for="slogan">Slogan...</label>
                        <md-input
                          v-model="form.slogan"
                          name="slogan"
                          id="slogan"
                          :disabled="sending || !isCapitain"
                        />
                      </md-field>

                      <md-field :class="getValidationClass('institution')">
                        <md-icon>domain</md-icon>
                        <label for="institution">Instituição...</label>
                        <md-input
                          v-model="form.institution"
                          name="institution"
                          id="institution"
                          :disabled="sending || !isCapitain"
                        />
                        <span class="md-helper-text" v-if="showValidationErrors && !$v.form.institution.required">Instituição é obrigatório</span>
                      </md-field>

                      <md-field :class="getValidationClass('email')">
                        <md-icon>email</md-icon>
                        <label for="email">E-mail...</label>
                        <md-input
                          type="email"
                          id="email"
                          autocomplete="email"
                          v-model="form.email"
                          :disabled="sending || !isCapitain"
                        />
                        <span class="md-helper-text" v-if="showValidationErrors && !$v.form.email.required">E-mail obrigatório</span>
                        <span class="md-helper-text" v-else-if="showValidationErrors && !$v.form.email.email">E-mail é invalido.</span>
                      </md-field>

                      <md-field :class="getValidationClass('website')">
                        <md-icon>link</md-icon>
                        <label for="website">Website...</label>
                        <md-input
                          v-model="form.website"
                          name="website"
                          id="website"
                          :disabled="sending || !isCapitain"
                        />
                      </md-field>

                      <md-field :class="getValidationClass('country')">
                        <md-icon>map</md-icon>
                        <label for="website">País...</label>
                        <md-input
                          v-model="form.country"
                          name="country"
                          id="country"
                          :disabled="sending || !isCapitain"
                        />
                        <span class="md-helper-text" v-if="showValidationErrors && !$v.form.country.required">País é obrigatório</span>
                      </md-field>

                      <md-field :class="getValidationClass('state')">
                        <md-icon>place</md-icon>
                        <label for="website">Estado...</label>
                        <md-input
                          v-model="form.state"
                          name="state"
                          id="state"
                          :disabled="sending || !isCapitain"
                        />
                        <span class="md-helper-text" v-if="showValidationErrors && !$v.form.country.required">Estado é obrigatório</span>
                      </md-field>

                      <md-field :class="getValidationClass('city')">
                        <md-icon>my_location</md-icon>
                        <label for="city">Cidade...</label>
                        <md-input
                          v-model="form.city"
                          name="city"
                          id="city"
                          :disabled="sending || !isCapitain"
                        />
                        <span class="md-helper-text" v-if="showValidationErrors && !$v.form.country.required">Cidade é obrigatória</span>
                      </md-field>

                      <md-progress-bar md-mode="indeterminate" v-if="sending" />
                      <md-card-actions>
                        <md-button type="submit" class="md-primary" :disabled="sending">
                          Salvar <md-icon>save</md-icon>
                        </md-button>
                      </md-card-actions>
                    </form>
                  </div>
                </div>
              </div>
              <div v-else class="md-layout" slot="content" >
                <h3> Você não pertence a um time no momento. </h3>
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
import Vue from 'vue'
import { required, email } from 'vuelidate/lib/validators'
import DashboardSteps from '@/components/DashboardSteps.vue'
import ImageUpload from '@/components/ImageUpload.vue'
import store from '@/store';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'team-edit',

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
        slogan: null,
        institution: null,
        email: null,
        website: null,
        country: null,
        state: null,
        city: null,
        logoURL: null,
      },
      sending: false,
      passLenght: 6,
      showValidationErrors: false,
      hasTeam: false,
      isCapitain: true
    };
  },

  computed: {
    ...mapGetters('user', {
      userData: 'data',
      userObserver: 'observer',
      logoBaseDir: 'logoStorageBaseDir',
    }),
    vuexObserver() { // Make sure to call method
      if(this.userObserver) this.fetchData();
    },
  },

  validations: {
    form: {
      name: { required },
      institution: { required },
      email: {
        required,
        email,
      },
      city:{ required },
      country: { required },
      state: { required },
    },
  },

  computed: {
    ...mapGetters('team', {
      teamData: 'data',
      teamObserver: 'observer',
      logoBaseDir: 'logoStorageBaseDir',
    }),
    ...mapGetters('user', {
      userData: 'data',
      userObserver: 'observer',
    }),
    vuexObserver() { // Make sure to call method
      if (this.teamData) {
        if (this.teamData.captainUserID) {
          this.fetchData();
          this.hasTeam = true;
          // console.log(this.teamData.captainUserID)
          // console.log(this.userData.uid);
          if (this.teamData.captainUserID == this.userData.uid) {
            this.isCapitain = true;
          }
        }
      }
    },
  },

  methods: {
    fetchData() {
      let data = Object.assign({}, this.teamData);
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

    currentTeamDoc() {
      if (this.teamDoc) return this.teamDoc;
      if (!this.teamCaptainID) return;

      return this.teamDoc;
    },

    commitLogo(photoURL) {
      this.sending = true;
      this.form.logoURL = photoURL;
      store.dispatch('team/updateData', { logoURL: photoURL }).then(() => {
        this.sending = false
      }).catch()
    },

    commit() {
      let data = Object.assign({}, this.form);
      store.dispatch('team/updateData', data).then(() => {
        this.sending = false;
        Vue.router.push({ name: 'member.edit' })
      }).catch()
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

<style lang="scss">

</style>
