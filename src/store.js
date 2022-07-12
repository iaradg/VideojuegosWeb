import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        // idActual: 0
        formularioVisible:false,
    },
    actions : {
        // contarDown({commit},cant) {
        //     //console.warn('actions -> contarDown', cant, new Date().toLocaleString())
        //     setTimeout(() => {
        //         commit('decrementar',cant)
        //     },2000)
        // },
        // async contarUp({commit},cant) {
        //     console.warn('actions -> contarUp', cant, new Date().toLocaleString())
        //     /* delay(1000)
        //         .then(() => {
        //             commit('incrementar',cant)
        //         })
        //         .catch(error => console.error(error)) */
        //     try {
        //         await delay(1000)
        //         commit('incrementar',cant)
        //     } catch(error) {
        //         console.error(error)
        //     }                
        // }
        // refreshId({commit}){
        //     //this.idActual = 0;
        //     commit('refrescarId')
        // }        
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
        // decrementar(state, cant) {
        //     console.warn('mutations -> decrementar', cant, new Date().toLocaleString())
        //     state.contador -= cant
        // },
        // refrescarId(state) {
        //     state.idActual = 0;
        // }
    },
})