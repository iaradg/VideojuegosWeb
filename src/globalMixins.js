import Vue from 'vue'

const miMixinGlobal = {
    methods: {
        // accederVista(idRecibido){
        //   // this.idActual = 0;
        //   this.$store.dispatch('accederVista', idRecibido)
        // }
        refrescarVista(){
          this.$store.dispatch('refresh')
        },
        cargarJuegos(){
          this.$store.dispatch('cargarJuegos') // actualiza los juego
        }
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