import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes as usuarios} from './routes/usuarios';
import {routes as correios} from './routes/correios';
Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        ...usuarios,
        ...correios,
        {
            path:'/dash',
            name:'Dash',
            component:()=>import('@/components/Dash.vue')
        }
    ]
})