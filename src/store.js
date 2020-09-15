import Vue from 'vue';
import Vuex from 'vuex';

import usuarios from './store/usuarios';
import dash from './store/dash';
import malotes from './store/malotes';
import cidades from './store/cidades';
import bases from './store/bases';
import buttonGen from './store/buttonGen';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        usuarios,
        dash,
        malotes,
        cidades,
        bases,
        buttonGen
    }
})