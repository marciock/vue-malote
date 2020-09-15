import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes as usuarios} from './routes/usuarios';
import {routes as malotes} from './routes/malotes';
import {routes as cidades} from './routes/cidades';
import  {routes as basesUnidades} from './routes/basesUnidades';

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        ...usuarios,
        ...malotes,
        ...cidades,
        ...basesUnidades,
        {
            path:'/dash',
            name:'Dash',
            component:()=>import('@/components/Dash.vue')
        }
    ]
})