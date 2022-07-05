import Vue from 'vue'

const miMixinGlobal = {
    methods: {
        // decrementar() {
        //     //this.contador--
        //     console.warn('-------------------------------')
        //     console.warn('dispatch -> decrementar', new Date().toLocaleString())
        //     this.$store.dispatch('contarDown', 1)
        // },
        // incrementar() {
        //     //this.contador++
        //     console.warn('-------------------------------')
        //     console.warn('dispatch -> incrementar', new Date().toLocaleString())
        //     this.$store.dispatch('contarUp', 1)
        // }
        // refrescarId(){
        //   // this.idActual = 0;
        //   this.$store.dispatch('refreshId')
        // }
    },
    computed: {
      // mostrarContadorVuex() {
      //   let contador = this.$store.state.contador
      //   console.error('mostrarContadorVuex', contador)
      //   return contador
      // }
    }
}

Vue.mixin(miMixinGlobal)