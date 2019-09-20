<template>
<v-layout>
  <div class="wrapper">
    <parallax class="section page-header header-filter header-resize" :style="headerStyle"></parallax>

    <div class="raised">
      <nav-tabs-card no-label class="info-tabs-card">
        <template slot="content">
          <md-tabs md-alignment="centered">
            <md-tab id="tab-home" md-label="Informações Gerais" md-icon="home">
              <h1>Informações Gerais</h1>
              <h3>Programação</h3>
              <h4>14/12 - Sexta-feira</h4>
              09h - Início do Check-in<br>
              10h - Início da inspeção de segurança<br>
              12h - Término da inspeção de segurança<br>
              14h - Início das competições<br>
              21h - Término das atividades do dia<br>
              <h4>15/12 - Sábado</h4>
              09h - Início das competições<br>
              12h - Intervalo<br>
              14h - Reinício das competições<br>
              21h - Término das atividades do dia<br>

              <h4>16/12 - Domingo</h4>
              09h - Início das competições<br>
              12h - Intervalo<br>
              14h - Reinício das competições<br>
              21h - Término das atividades do dia<br>
            </md-tab>
            <md-tab id="tab-location" md-label="Localização" md-icon="map">
              <h1>Localização</h1>
              <center>
                <p>
                  A competição irá acontecer nos dias 14/12/2018, 15/12/2018 e 16/12/2018 das 9h às 21h no campus da Católica de Santa Catarina em Jaraguá do Sul, blocos F e G.
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.64076339259!2d-49.1154960627387!3d-26.46730626569736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94de940dbec22f4d%3A0xf2864ccc867a7dc1!2sCentro+Universit%C3%A1rio+-+Cat%C3%B3lica+de+Santa+Catarina+em+Jaragu%C3%A1+do+Sul!5e0!3m2!1spt-BR!2sbr!4v1541540744701"
                  frameborder="0"
                  style="
                  border:0;
                  height: 500px !important;
                  width: 600px !important;
                  display: block;
                  "
                  allowfullscreen>
                </iframe>
              </center>
            </md-tab>
            <md-tab id="tab-hotel" md-label="Transporte" md-icon="commute">
              <h1>Transporte</h1>
              <center>
                <img src="https://viajare.com.br/wp-content/uploads/2017/06/logo-MAIN.png" alt="Viajare Turismo" class="img-responsive"/>
              </center>
              <p>
                A agência de turismo Viajare oferece preços diferenciados aos competidores, permitindo até que equipes dividem os custos. Interessados devem contatar o Murara.
              </p>
              <p>
                Rua Maximiliano Hendlmayer, 11 Esquina com a rua Max Wilhelm – Vila Baependi, Jaraguá do Sul, SC - CEP: 89256-010
              </p>
              <p>
                Phone: (47) 3370-9115
              </p>
              <p>
                <a href="mailto:murara@viajare.com.br">murara@viajare.com.br</a>
              </p>
            </md-tab>
            <md-tab id="tab-food" md-label="Alimentação" md-icon="local_dining">
              <h1>Alimentação</h1>
              <p>
                <center>
                  Para alimentação, o <b>Restaurante e Lanchonete SS Gomes</b>, que se localiza no próprio campus, estará aberto durante o evento e fornecerá almoço aos competidores por um preço especial.
                  <br><b>R$13,00</b> para um prato livre, <span style="color: red">não incluso sobremesa e bebida</span>.
                </center>
              </p>
              <p>
                <center>
                  <img src="/img/gomes.jpg" alt="Restaurante e Lanchonete Gomes" class="center img-responsive" border="1">
                </center>
              </p>
            </md-tab>
            <md-tab id="tab-awards" md-label="Premiação" md-icon="local_play">
              <h1>Premiação</h1>
              <center>
                <p>
                  <strong>Haverá premiação em todas as categorias de 1º, 2º e 3º lugar.</strong>
                </p>
                <p>
                  <img src="/img/trofeu.jpg" alt="Premiação summit wickedbotz" style="height: 260px !important; width: 210px !important;" class="center img-responsive" border="1">
                </p>
                <p>
                  <i>A Católica se reserva ao direito de cancelar a competição da categoria que tenha menos de 3 times competindo!</i>
                </p>
              </center>
            </md-tab>
            <md-tab id="tab-transp" md-label="Estadia" md-icon="hotel">
              <h1>Estadia</h1>
              <p>
                <strong>Para as equipes que virão de mais longe, foi formada uma parceria com hotéis, os quais irão fornecer preços especiais aos competidores. Estão participando desse convênio os seguintes hotéis:</strong>
              </p>
              <h4>Hotel Itajara</h4>
              <p>
                Rua Exp. Gumercindo da Silva 237 – Centro – Jaraguá do Sul - (47) 2107-3799
              </p>
              <p>
                <a href="http://www.hotelitajara.com.br">www.hotelitajara.com.br</a>
              </p>
              <p>
                Faça sua reserva até o dia 13/12/18 através do nosso site e obtenha valores a partir de:
              </p>
              <p>
                R$ 150,00 para apartamento individual
              </p>
              <p>
                R$ 210,00 para apartamento casal / duplo
              </p>
              <p>Acesse: https://goo.gl/XP3Mfy e insira o código da promoção: Wickedbotz</p>

              <h4>Hotel Harbor Inn Jaragua</h4>
              <p>Rua Max Wilhelm, 39 - Vila Baependi - Jaraguá do Sul - (47) 3371-2133</p>
              <p>jaragua-do-sul.harborhoteis.com.br</p>
              <p>R$ 127,00 para apartamento individual</p>
              <p>R$ 150,00 para apartamento duplo / casal</p>
              <p>R$ 210,00 para apartamento triplo</p>

              <h4>Hotel Nelo</h4>
              <p>Av. Mal. Deodoro da Fonseca, 104 - Centro, Jaraguá do Sul - (47) 3055-4100</p>
              <p><a href="http://www.hotelnelo.com.br">www.hotelnelo.com.br</a></p>
              <p>R$ 125,00 para apartamento econômico single</p>
              <p>R$ 180,00 para apartamento econômico duplo</p>
              <p>R$ 270,00 para apartamento standard triplo</p>
              <p>R$ 342,00 para apartamento standard quadruplo</p>
              <p>R$ 410,00 para apartamento standard quíntuplo</p>

              <h4>Barra Parque Hotel</h4>
              <p>Rua José, R. Paulo Papp, 15 - Barra do Rio Cerro, Jaraguá do Sul - (47) 3376-0700</p>
              <p><a href="http://www.barraparquehotel.com.br">www.barraparquehotel.com.br</a></p>
              <p>R$ 165,86 para apartamento individual</p>
              <p>R$ 228,46 para apartamento duplo</p>
              <p>R$ 301,48 para apartamento triplo</p>

              <h4>Alojamento na escola Julius Karsten</h4>
              <p>R. Waldemar Rau, 222 - Rau, Jaraguá do Sul - SC - (47) 99171-5494</p>
              <!-- <p><a href="http://www.barraparquehotel.com.br">www.barraparquehotel.com.br</a></p> -->
              <p>Sem custo, vagas limitadas</p>

              <br>
            </md-tab>
            <md-tab id="tab-payment" md-label="Taxa de Inscrição" md-icon="attach_money">
              <h1>Taxa de Inscrição</h1>
              <h4>O valor da inscrição é de R$ 25,00 por participante e R$ 50,00 por projeto (robô)</h4>
              A equipe que inscrever seu time de  hockey no 1° Summit de Robótica da Católica de SC terá dois benefícios. <br />
              <ul>
                <li>1° benefício: o time de hockey composto por um projeto e três competidores serão gratuito, para inscrição até 07/12/2018</li>
                <li>2° benefício: terá a isenção da taxa de inscrição de um (1) competidor e de um (1)  projeto, totalizando R$75,00 reais de economia em suas inscrições.</li>
              </ul>
              Estes benefícios foram concedidos pelo apoio da Menegotti que doou para a equipe Wickedbotz as chapas de aço para fazer a arena de hockey. <br /><br />
              <p><b>&nbsp;Obs.:</b> Após a data <b>12/12</b> às inscrições terão outros valores R$50,00 por participante e R$100,00 por projeto (robô),
              <span style="color: red; font-weight: bold"> não poderá ser inscrito após o dia 14/12 </span></p> <br />
              <p>
                Acesso ao público para ver as competições é <strong>gratuíto.</strong> <br /><br />
              </p>
              <h5 style="color: red; font-weight: bold">O pagamento das inscrições dos participantes e dos projetos será através de um boleto bancário único, emitido após devidamente preenchimento do formulário de inscrição.</h5>
            <br><br>
            </md-tab>
          </md-tabs>
        </template>
      </nav-tabs-card>
    </div>
  </div>
</v-layout>
</template>

<script>
import VLayout from '@/layout/Landing.vue'
import NavTabsCard from '@/components/cards/NavTabsCard.vue'

export default {
  components: {
    VLayout,
    NavTabsCard,
  },

  data () {
    return {
      atual: 'home'
    }
  },

  bodyClass: 'about-page',

  props: {
    header: {
      type: String,
      default: require('@/assets/img/hero/DSC00412.jpg')
    }
  },

  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
  },

  methods: {
    change(tabName){
      this.atual = tabName;
    }
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 25px;
}
h3 {
  font-size: 25px;
  font-weight: bold;
  margin: 0 0 25px 0;
}
h4 {
  color: black;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  margin: 25px 0px;
}
img.img-responsive {
  display: block;
  max-width: 100%;
  width: auto;
}

p {
  font-size: 16px;
  line-height: 20px;
}

.page-header {
  height: 30vh !important;
}

.md-tabs-navigation + .md-tabs-content .md-tab {
  text-align: left;
}
</style>
