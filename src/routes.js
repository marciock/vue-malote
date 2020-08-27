import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes as usuarios} from './routes/usuarios';
Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        ...usuarios,
        {
            path:'/dash',
            name:'Dash',
            component:()=>import('@/components/Dash.vue')
        }
    ]
})