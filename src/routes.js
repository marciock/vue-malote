import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes as usuarios} from './routes/usuarios';
import {routes as malotes} from './routes/malotes';
Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        ...usuarios,
        ...malotes,
        {
            path:'/dash',
            name:'Dash',
            component:()=>import('@/components/Dash.vue')
        }
    ]
})