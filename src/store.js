import Vue from 'vue'
import Vuex from 'vuex'

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises
// const delay = ms => new Promise((resolve, reject) => {
//     if(typeof ms == 'number') {
//         setTimeout(resolve, ms)
//     }
//     else {
//         reject('ms no es del tipo number')
//     }
// })


Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        idActual: 0
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
        refreshId({commit}){
            //this.idActual = 0;
            commit('refrescarId')
        }        
    },
    mutations : {
        // decrementar(state, cant) {
        //     console.warn('mutations -> decrementar', cant, new Date().toLocaleString())
        //     state.contador -= cant
        // },
        refrescarId(state) {
            state.idActual = 0;
        }
    }
})