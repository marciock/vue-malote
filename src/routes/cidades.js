export default [
    {
        path:'/add_cidades',
        name:'AddCidades',
        component:()=>import('@/components/cidades/AddCidades')
    },
    {
        path:'/cidades',
        name:'ViewCidades',
        component:()=>import('@/components/cidades/ViewCidades')
    }
    

]
export {default as routes} from './cidades';