<template>
<v-layout>
  <div class="wrapper">
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <dashboard-steps currentStep="member.edit">
              <div class="container" slot="content">
                <form novalidate @submit.prevent="validateForm">
                  <md-field :class="getValidationClass('name')">
                    <md-icon>group</md-icon>
                    <label for="name">Nome Completo</label>
                    <md-input
                      v-model="form.name"
                      name="name"
                      autocomplete="off"
                      id="name"
                      :disabled="sending"
                    />
                    <span class="md-helper-text" v-if="showValidationErrors && !$v.form.name.required">Nome da Equipe é obrigatório</span>
                  </md-field>
                  <md-field :class="getValidationClass('email')">
                    <md-icon>email</md-icon>
                    <label for="email">E-mail...</label>
                    <md-input
                      type="email"
                      id="email"
                      autocomplete="off"
                      v-model="form.email"
                      :disabled="sending"
                    />
                    <span class="md-helper-text" v-if="showValidationErrors && !$v.form.email.required">E-mail obrigatório</span>
                    <span class="md-helper-text" v-else-if="showValidationErrors && !$v.form.email.email">E-mail é invalido.</span>
                    <span class="md-helper-text" v-else-if="showValidationErrors && !$v.form.email.isUnique">Membro já incluso na lista.</span>
                  </md-field>
                  <md-field :class="getValidationClass('cpf')">
                    <md-icon>content_paste</md-icon>
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
                  <md-progress-bar md-mode="indeterminate" v-if="sending" />
                  <md-card-actions>
                    <md-button type="submit" class="md-primary" :disabled="sending">
                      Adicionar <md-icon>add</md-icon>
                    </md-button>
                  </md-card-actions>
                </form>
                <div class="md-layout-item md-size-100 ml-auto mr-auto" v-if="Object.keys(this.members).length >= 1">
                  <md-table v-model="members" md-sort="name" md-sort-order="asc" md-card>
                    <md-table-toolbar>
                      <h3 class="md-title" style="color: black !important">Membros da Equipe</h3>
                    </md-table-toolbar>

                    <md-table-row slot="md-table-row" slot-scope="{ item }">
                      <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
                      <md-table-cell md-label="E-mail" md-sort-by="email">{{ item.email }}</md-table-cell>
                      <md-table-cell md-label="" v-if="canRemoveMember(item)">
                        <a href="javascript:void(0)" @click="removeMember(item)"><md-icon>remove_circle</md-icon></a>
                      </md-table-cell>
                    </md-table-row>
                  </md-table>
                </div>
                <div v-else class="md-layout-item md-size-100 ml-auto mr-auto">
                  <md-table>
                    <md-table-toolbar>
                      <h3 class="md-title" style="color: black !important">Membros da equipe</h3>
                    </md-table-toolbar>

                    <md-table-row slot="md-table-row">
                      <md-table-cell>
                        <p>Esta equipe não possui nenhum membro cadastrado</p>
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
  </div>
</v-layout>
</template>

<script>
import VLayout from '@/layout/Register.vue';
import firebase from '@/plugins/firebase';
import firestore from '@/plugins/firestore';
import { required, email } from 'vuelidate/lib/validators'
import DashboardSteps from '@/components/DashboardSteps.vue'// import ImageUpload from '@/components/ImageUpload.vue'
import store from '@/store';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'member-edit',

  components: {
    VLayout,
    DashboardSteps,
  },

  bodyClass: 'dashboard-layout',

  data() {
    return {
      form:{
        name: null,
        email: null,
        actualState: null,
        cpf: null,
        dateOfBirth: null
      },
      sending: false,
      showValidationErrors: false,
    };
  },

  computed: {
    ...mapGetters('user', {
      userID: 'id',
    }),
    ...mapGetters('members', {
      members: 'entries',
    }),
    anyMember() {
      return this.members.length > 0;
    },
  },

  validations: {
    form: {
      name: { required },
      email: {
        required,
        email,
        isUnique(value) {
          if (value === '') return true
          return this.members.filter(member => (member.email === value)).length == 0
        },
      },
      cpf: { required },
      dateOfBirth: { required }
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

    canRemoveMember(member) {
      return member.id !== this.userID
    },

    resetForm() {
      this.form = {
        name: null,
        email: null,
        imageURL: null,
        actualState: null,
        cpf: null,
        dateOfBirth: null
      }
      this.sending = false;
      this.showValidationErrors = false
      this.$v.$reset();
    },

    removeMember(member) {
      this.sending = true;
      if (member.actualState === null) {
        store.dispatch('members/deleteEntry', member.id).then(() => {
          this.sending = false;
       }).catch((error) => {
         this.showError(error)
       })
      } else {
        store.dispatch('alert/error', 'Este membro já está pago');
        setTimeout(() => store.dispatch('alert/clear'), 2500);
        this.sending = false
      }
    },

    commit() {
      let data = Object.assign({}, this.form);
      store.dispatch('members/addEntry', data).then(() => {
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

</style>
