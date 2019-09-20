<template>
<v-layout>
  <div class="wrapper">
    <div class="main main-raised teste">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <dashboard-steps currentStep="payment.index">
              <div class="container" slot="content">
                <div class="md-layout-item md-size-80 ml-auto mr-auto"  v-if="anyMember || anyRobot">
                  <div class="md-layout-item md-size-100 md-alignment-right">
                    Valor total: {{formattedAmount}}
                  </div>
                  <div class="container">
                    <div class="md-card md-table md-theme-default">
                      <div class="md-toolbar md-table-toolbar md-transparent md-theme-default md-elevation-0">
                        <h3 class="md-title" style="color: black !important;">Selecione os membros a serem pagos</h3>
                      </div>
                      <div class="md-content md-table-content md-scrollbar md-theme-default">
                        <table>
                          <thead>
                            <tr>
                              <th class="md-table-head">
                                <div class="md-table-head-container md-ripple md-disabled">
                                  <div class="md-table-head-label">
                                    Nome
                                  </div>
                                </div>
                              </th>
                              <th class="md-table-head">
                                <div class="md-table-head-container md-ripple md-disabled">
                                  <div class="md-table-head-label">
                                    Email
                                  </div>
                                </div>
                              </th>
                              <th class="md-table-head">
                                <div class="md-table-head-container md-ripple md-disabled">
                                  <div class="md-table-head-label">
                                    Pago
                                  </div>
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="(item, index) in members"
                              @click="onMemberSelect(item)"
                              :key="index"
                              class="md-table-row md-has-selection"
                            >
                              <td class="md-table-cell md-table-cell-selection">
                                <md-icon v-if="isMemberSelected(item.id)">check_box</md-icon>
                                <md-icon v-else>check_box_outline_blank</md-icon>
                              </td>
                              <td class="md-table-cell">
                                <div class="md-table-cell-container">{{item.name}}</div>
                              </td>
                              <td class="md-table-cell">
                                <div class="md-table-cell-container">{{item.email}}</div>
                              </td>
                              <td class="md-table-cell status-cell">
                                <span v-if="item.actualState">
                                  <i v-if="item.actualState.state == 'Pendente'" class="fas fa-stopwatch"></i>
                                  <i v-else class="fas fa-check"></i>
                                  {{ item.actualState.state }} ({{ item.actualState.date }})
                                </span>
                                <span v-else>R$ {{memberUnitPrice}}</span>
                              </td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <td class="md-table-cell" colspan="3"></td>
                              <td class="md-table-cell"><strong>Total: R$ {{selectedMembersAmount}}</strong></td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>

                    <div class="md-card md-table md-theme-default">
                      <div class="md-toolbar md-table-toolbar md-transparent md-theme-default md-elevation-0">
                        <h3 class="md-title" style="color: black !important;">Selecione os robôs a serem pagos</h3>
                      </div>
                      <div class="md-content md-table-content md-scrollbar md-theme-default">
                        <table>
                          <thead>
                            <tr>
                              <th class="md-table-head">
                                <div class="md-table-head-container md-ripple md-disabled">
                                  <div class="md-table-head-label">
                                    Nome
                                  </div>
                                </div>
                              </th>
                              <th class="md-table-head">
                                <div class="md-table-head-container md-ripple md-disabled">
                                  <div class="md-table-head-label">
                                    Categoria
                                  </div>
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="(item, index) in robots"
                              @click="onRobotSelect(item)"
                              :key="index"
                              class="md-table-row md-has-selection"
                            >
                              <td class="md-table-cell md-table-cell-selection">
                                <md-icon v-if="isRobotSelected(item.id)">check_box</md-icon>
                                <md-icon v-else>check_box_outline_blank</md-icon>
                              </td>
                              <td class="md-table-cell">
                                <div class="md-table-cell-container">{{item.category}}</div>
                              </td>
                              <td class="md-table-cell status-cell">
                                <span v-if="item.actualState">
                                  <i v-if="item.actualState.state == 'Pendente'" class="fas fa-stopwatch"></i>
                                  <i v-else class="fas fa-check"></i>
                                  {{ item.actualState.state }} ({{ item.actualState.date }})
                                </span>
                                <span v-else>R$ {{robotUnitPrice}}</span>
                              </td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <td class="md-table-cell" colspan="2"></td>
                              <td class="md-table-cell"><strong>Total: R$ {{selectedRobotsAmount}}</strong></td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>

                    <div class="md-layout-item md-size-100 md-alignment-right">
                      Valor total: {{formattedAmount}}
                    </div>
                    <div class="md-layout md-gutter md-alignment-center md-button md-primary" :disabled="sending" @click="generateBoleto">
                      <div class="md-ripple">
                        <div class="md-button-content">Gerar boleto</div>
                      </div>
                    </div>
                    <!--
                    <PayPal
                      :amount="String(amount)"
                      currency="BRL"
                      :client="paypal"
                      :button-style="paypalStyle"
                      v-on:paypal-paymentCompleted="onPaymentComplete"
                      v-on:payment-completed="onPaymentComplete"
                      env="sandbox">
                    </PayPal>
                    -->
                    <md-progress-bar md-mode="indeterminate" v-if="sending" />
                  </div>
                </div>
                <div v-else class="md-layout-item md-size-80 ml-auto mr-auto" style="text-align: justify !important">
                  <div class="md-layout-item md-size-100 md-alignment-right">
                    <h4>
                      Sua equipe não possui nenhum membro ou robô cadastrado.<br>
                      Caso deseje cadastrar um novo membro clique <router-link :to="{ name: 'member.edit' }" class="">aqui.</router-link><br>
                      Caso queira cadastrar novos robôs clique <router-link :to="{ name: 'robot.edit' }" class="">aqui.</router-link>
                    </h4>
                  </div>
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
import { ROBOT_PRICE, PERSON_PRICE } from '@/config.js';
import VLayout from '@/layout/Register.vue'
import PayPal from 'vue-paypal-checkout';
import DashboardSteps from '@/components/DashboardSteps.vue'
import store from '@/store';
import { required, email } from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    PayPal,
    DashboardSteps,
    VLayout,
  },

  name: 'profile-edit',
  bodyClass: 'dashboard-layout',

  data () {
    return {
      sending: false,
      membersSelected: [],
      robotsSelected: [],
      paypal: {
        sandbox: process.env.VUE_APP_PAYPAL_SANDBOX,
        production: 'Colocar aqui'
      },
      paypalStyle: {
        label: 'checkout',
        size:  'responsive',    // small | medium | large | responsive
        shape: 'rect',     // pill | rect
        color: 'silver'      // gold | blue | silver | black
      },
      user: {
        name: null,
        cpf: null,
        phone: null,
        email: null,
        asaasId: null,
        hasHockey: null
      }
    }
  },

bodyClass: 'dashboard-layout',

  computed: {
    ...mapGetters('robots', {
      robots: 'entries',
    }),
    ...mapGetters('members', {
      members: 'entries',
    }),
    ...mapGetters('user', {
      userData: 'data',
      userObserver: 'observer',
    }),
    anyMember() {
      return this.members.length > 0;
    },
    anyRobot() {
      return this.robots.length > 0;
    },
    robotUnitPrice() {
      return ROBOT_PRICE;
    },
    memberUnitPrice() {
      return PERSON_PRICE;
    },
    selectedMembersAmount() {
      return Object.keys(this.membersSelected).length * this.memberUnitPrice;
    },
    selectedRobotsAmount() {
      return Object.keys(this.robotsSelected).length * this.robotUnitPrice;
    },
    setUserAsaasid(id) {
      this.user.asaasId = id;
    },
    amount() {
      return this.selectedMembersAmount + this.selectedRobotsAmount
    },
    formattedAmount() {
      if(this.amount == 0) return '-'
      return `R$ ${this.amount}`
    }
  },
  methods: {
    isMemberSelected(id) {
      return this.membersSelected.includes(id)
    },

    isRobotSelected(id) {
      return this.robotsSelected.includes(id)
    },

    onMemberSelect (item) {
      let id = item.id;
      if (this.isMemberSelected(id)) {
        this.membersSelected = this.membersSelected.filter(sId => sId !== id)
      } else {
        this.membersSelected.push(id)
      }
    },

    onRobotSelect (item) {
      if (item.category.toLowerCase() === 'hockey') {
        this.user.hasHockey = true;
      }
      let id = item.id;
      if (this.isRobotSelected(id)) {
        this.robotsSelected = this.robotsSelected.filter(sId => sId !== id)
      } else {
        this.robotsSelected.push(id)
      }
    },

    /** Asaas API */
    generateBoleto() {

      this.sending = true;
      let data = Object.assign({}, this.userData);
      Object.entries(data).forEach(([key, value]) => {
        this.user[key] = value;
      });

      let serviceID = 'gmail';
      let template = process.env.VUE_APP_EMAILJS_TEMPLATE;
      let content = {
        member_name: this.user.name,
        member_email: this.user.email,
        member_cpf: this.user.cpf,
        member_phone: this.user.phone,
        payment_value: `R$ ${this.amount},00`,
        members_to_pay: this.membersSelected,
        robots_to_pay: this.robotsSelected,
        has_hockey: (this.user.hasHockey ? 'Sim' : 'Não')
      };
      //
      emailjs.init(process.env.VUE_APP_EMAILJS_API);
      emailjs.send(serviceID, template, content)
        .then((response) => {
          if (response.status == 200) {
            this.sending = false;
            this.onPaymentComplete();
            store.dispatch('alert/success', 'Boleto gerado com sucesso! O mesmo será enviado por email em alguns dias.');
            setTimeout(() => store.dispatch('alert/clear'), 4000);
          }
        })
        .catch((error) => {
          this.sending = false;
          store.dispatch('alert/error', 'Hove um erro ao gerar seu boleto, por favor tente mais tarde');
          setTimeout(() => store.dispatch('alert/clear'), 4000);
        });


      /** Ignora essa parte por hora, talvez mais para frente possa ser utilizado */
      return ;
      if (this.user.asaasId === null) {
        this.registerUserOnAsaas();
        return ;
      }

      var request = new XMLHttpRequest();

      request.open('POST', 'https://www.asaas.com/api/v3/payments');

      request.setRequestHeader('Content-Type', 'application/json');
      request.setRequestHeader('access_token', process.env.VUE_APP_ASAAS_ID);

      request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          let data = JSON.parse(this.responseText);
          var win = window.open(data.invoiceUrl, '_blank');
          win.focus();
        }
      };

      var body = {
        'customer': this.user.asaasId,
        'billingType': 'BOLETO',
        'dueDate': this.getDayForward(5), // quantos dias a mais para o pagamento
        'value': this.amount,
        'description': 'Pedido 056984',
        'externalReference': '056984',
        'discount': {
          'value': 0,
          'dueDateLimitDays': 0
        },
        'fine': {
          'value': 1
        },
        'interest': {
          'value': 2
        }
      };

      request.send(JSON.stringify(body));
    },

    registerUserOnAsaas() {
      var request = new XMLHttpRequest();

      request.open('POST', 'https://www.asaas.com/api/v3/customers');
      request.setRequestHeader('Content-Type', 'application/json');
      request.setRequestHeader('access_token', process.env.VUE_APP_ASAAS_ID);

      request.onreadystatechange = (function (data, myApp) {
        return function () {
          if (data.readyState === 4) {
            let result = JSON.parse(data.responseText);
            myApp.user.asaasId = result.id;
            // myApp.saveUser(); Removi essa call
            myApp.generateBoleto();
          }
        }
      })(request, this);

      var body = {
        'name': this.user.name,
        'email': this.user.email,
        'phone': this.user.phone,
        'cpfCnpj': this.user.cpfCnpj,
      };
      request.send(JSON.stringify(body));
    },

    /** Paypal -------- */
    onPaymentSuccess(data) {
      console.log("aproved");
    },

    onPaymentComplete(data) {
      this.membersSelected.forEach(id => {
        store.dispatch('members/pendentPayment', id)
      });
      this.robotsSelected.forEach(id => {
        store.dispatch('robots/pendentPayment', id)
      });
      store.dispatch('alert/success', 'Pagamento realizado com sucesso!');
      setTimeout(() => store.dispatch('alert/clear'), 2500);
    },

    getActualDay() {
      // console.log(data);   // Talvez fazer um comprovante algo do gênero...
      let myDate = new Date();
      let day = myDate.getDate();
      let month = myDate.getMonth() + 1;
      let year = myDate.getFullYear();
      return (day <= 9 ? '0' + day : day)  + '-' + month + '-' + year;
    },

    getDayForward(days) {
      let myDate = new Date();
      myDate.setDate(myDate.getDate() + days);
      let day = myDate.getDate();
      let month = myDate.getMonth() + 1;
      let year = myDate.getFullYear();
      return  `${year}-${(month <= 9 ? '0' + month : month)}-${(day <= 9 ? '0' + day : day)}`;
    }
  },
};
</script>

<style lang="scss">
.blank-slate {
  color: #ccc;
}
.status-cell {
  width: 130px;
  text-align: center;
}
.md-title {
  color: #000000 !important;
}

.md-table-alternate-header {
  background-color: #000000 !important;
}
</style>
