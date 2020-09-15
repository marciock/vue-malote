export default [
    {
        path:'/add_bases',
        name:'AddBases',
        component:()=>import('@/components/basesUnidades/AddBases')
    },
    {
        path:'/edit_bases',
        name:'EditBases',
        component:()=>import('@/components/basesUnidades/EditBases')
    },
    {
        path:'/bases',
        name:'ViewBases',
        component:()=>import('@/components/basesUnidades/ViewBases')
    }
    

]
export {default as routes} from './basesUnidades';