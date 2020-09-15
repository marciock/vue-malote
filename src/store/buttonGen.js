import Vue from 'vue'
import routes from '../routes'
export default{
    namespaced:true,
    state:{
        edit:'',
        del:''
    },
    mutations:{
        mutEdit(state,EditButton){
            state.edit=EditButton
        }
    },
    actions:{
        EditButton:async({commit},payload)=>{
            const id=await payload.id;
            const url=await payload.url
            const go =await payload.go

           let results=await Vue.http.get(url,{params:{id}});



            commit('mutEdit',results.body)

            routes.push(go).catch(()=>{})
        }
    }
}