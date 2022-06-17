import Vue          from 'vue'
import VueRouter    from 'vue-router'

import Inicio       from './componentes/Inicio.vue'
import ShellShockers from './componentes/ShellShockers.vue'
import GooglePacman from './componentes/GooglePacman.vue'
import TrucoGame from './componentes/TrucoGame.vue'
import SlitherIo from './componentes/SlitherIo.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/inicio' },
        { path: '/inicio', component: Inicio },
        { path: '/shell-shockers', component: ShellShockers},
        { path: '/google-pacman', component: GooglePacman},
        { path: '/truco-game', component: TrucoGame},
        { path: '/slither-io', component: SlitherIo},
    ]
})

