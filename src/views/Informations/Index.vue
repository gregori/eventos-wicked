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
              <h4>15/12 - Sexta-feira</h4>
              09h - Início do Check-in<br>
              10h - Início da inspeção de segurança<br>
              12h - Término da inspeção de segurança<br>
              14h - Início das competições<br>
              21h - Término das atividades do dia<br>
              <h4>16/12 - Sábado</h4>
              09h - Início das competições<br>
              12h - Intervalo<br>
              14h - Reinício das competições<br>
              21h - Término das atividades do dia<br>

              <h4>17/12 - Domingo</h4>
              09h - Início das competições<br>
              12h - Intervalo<br>
              14h - Reinício das competições<br>
              21h - Término das atividades do dia<br>
            </md-tab>
            <md-tab id="tab-location" md-label="Localização" md-icon="map">
              <h1>Localização</h1>
              <center>
                <p>
                  A competição irá acontecer nos dias 14/12/2018, 15/12/2018 e 16/12/2018 das 9h às 21h no campus da Católica de Santa Catarina em Joinville, blocos A.
                </p>
                <!-- <iframe src="" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe> -->
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.6849155931427!2d-48.8533378849678!3d-26.304312583393312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb047b2a98c67%3A0x8101cf18a613c42a!2sCentro%20Universit%C3%A1rio%20-%20Cat%C3%B3lica%20de%20Santa%20Catarina%20em%20Joinville!5e0!3m2!1spt-BR!2sbr!4v1569365638144!5m2!1spt-BR!2sbr"
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
              <!-- FIXME: Remove isso, não precisa mais -->
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
              <!-- FIXME: Remove isso, não precisa mais -->
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
              <h4>Hotel Ibis Joinville</h4>
              <p>R. 9 de Março, 806 - Centro, Joinville - SC, 89201-400 </p>
              <h4>Mercure Joinville Prinz Hotel</h4>
              <p>R. Otto Boehm, 525 - América, Joinville - SC, 89201-700 </p>
              <h4>Comfort Hotel Joinville</h4>
              <p>R. Sen. Felipe Schmidt, 460 - Centro, Joinville - SC, 89201-440 </p>
              <h4>Hotel Tannenhof</h4>
              <p>R. Visc. de Taunay, 340 - Atiradores, Joinville - SC, 89203-005 </p>
              <h4>Bourbon Joinville Hotel</h4>
              <p>R. Visc. de Taunay, 275 - Centro, Joinville - SC, 89201-420 </p>
              <h4>Hotel Trocadero</h4>
              <p>R. Visc. de Taunay, 185 - Centro, Joinville - SC, 89201-420 </p>
              <h4>Alven Palace Hotel</h4>
              <p>R. Eng. Niemeyer, 215 - Centro, Joinville - SC, 89201-130 </p>
              <center>
                <iframe src="https://www.google.com/maps/d/embed?mid=187QSn418vgJ__kfV_ElFFcXf3h-wQrur&hl=pt-BR"
                  frameborder="0"
                    style="
                    border:0;
                    height: 500px !important;
                    width: 600px !important;
                    display: block;
                    "
                  allowfullscreen></iframe>
              </center>
              <br>
            </md-tab>
            <md-tab id="tab-payment" md-label="Taxa de Inscrição" md-icon="attach_money">
              <h1>Taxa de Inscrição</h1>
              <h4>O valor da inscrição é de R$ 25,00 por participante e R$ 50,00 por projeto (robô)</h4>

              <p>
                <b>&nbsp;Obs.:</b> Após a data <b>31/10</b> às inscrições terão outros valores R$50,00 por participante e R$100,00 por projeto (robô),
              <span style="color: red; font-weight: bold"> não poderá ser inscrito após o dia 11/11 </span></p> <br />
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
