export default [
    {
        path:'/',
        name:'Login',
        component:()=>import('@/components/usuarios/Login')
    },
    {
        path:'/add_user',
        name:'AddUser',
        component:()=>import('@/components/usuarios/AddUser')
    },

]
export {default as routes} from './usuarios';