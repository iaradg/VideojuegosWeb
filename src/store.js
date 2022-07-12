import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        formularioVisible:false,
        juegos: [],
        juegoActual: null,
        idActual: 0,
        url : 'https://6286f9227864d2883e7c4e53.mockapi.io/listaJuegos/',

    },
    actions : {
        // accederVista({commit}, idRecibido){
        //     //this.idActual = 0;
        //     commit('accederVista', idRecibido)
        // },
        refresh({commit}){
            commit('setearJuego', null)
            commit('refreshIdActual', 0)
        },
        setJuego({commit}, juegoRecibido){
            commit('refreshIdActual', juegoRecibido.id)
            commit('setearJuego', juegoRecibido)
        },
        async cargarJuegos({commit}) {
            this.mostrar = false;
            this.idActual = 0;
            try {
                let {data:juegosApi} = await axios.get(this.state.url)
                commit('cargarJuegos', juegosApi)
            }
            catch(error) {
                console.error('Error en getJuegos', error.message)
            }
        },
        async borrarJuego({commit}, id) {
            try {
                let {data:juego} = await axios.delete(this.state.url+id)
                commit('borrarJuego', juego)
            }
            catch(error) {
                console.error('Error en borrarJuego', error.message)
            }        
        },
        async calificarJuego({commit}, juegoNuevo){
            try {
                await axios.put(this.state.url+this.state.idActual, juegoNuevo, {'content-type':'application/json'} )
                commit('setearJuego', juegoNuevo)
            }
            catch(error) {
                console.error('Error en putUsuario', error.message)
            }
        },
        cerrarFormulario({commit}){
            console.warn('actions -> cerrarFormulario', new Date().toLocaleString)
            setTimeout(()=>{
                commit('cerrarFormulario')

            },2000) //esto es un callback

        },
        mostrarFormulario({commit}){
            console.warn('actions -> mostrarFormulario', new Date().toLocaleString)
            setTimeout(()=>{
                commit('mostrarFormulario')

            },2000) //esto es un callback

        },
    },
    mutations : {
        cerrarFormulario(state){
            console.warn('mutations -> cerrarFormulario', new Date().toLocaleString)
            state.formularioVisible=false
        },
        mostrarFormulario(state){
            console.warn('mutations -> mostrarFormulario', new Date().toLocaleString)
            state.formularioVisible=true
        },
        cargarJuegos(state, juegosApi){
            if( (juegosApi.length != this.state.juegos.length) ){
                for (var i = 0; i < (juegosApi.length); i++) {
                    if(juegosApi[i] != this.state.juegos[i]){
                        state.juegos.push(juegosApi[i])
                    }
                }
            }
            console.log(this.state.juegos)
        },
        borrarJuego(state, juego){
            console.log('AXIOS DELETE juego', juego.id)
            let index = this.state.juegos.findIndex(game => game.id == juego.id)
            if(index == -1) throw new Error('juego no encontrado')
            state.juegos.splice(index,1)
        },
        setearJuego(state, juegoRecibido){
            state.juegoActual = juegoRecibido;
        },
        refreshIdActual(state, id){
            state.idActual = id;
        }
    },
})