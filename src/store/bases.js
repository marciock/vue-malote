import Vue from 'vue';
export default{
    namespaced:true,
    state:{
       tableView:[],
       base:{},
       error:{},
       bases:''
    },
    mutations:{
        mutErrorSave(state,SaveBase){
            state.error=SaveBase
        },
        mutShowBases(state,ShowBases){
            state.bases=ShowBases
        },
        mutEditBase(state,EditBase){
            state.base=EditBase
        }
    },
    actions:{
        SaveBase:async ({commit}, payload)=>{

            const data=await payload;

            let results=await Vue.http.post('bases_save',data);
            console.log(results);

            if(results.body.error===true){
                commit('mutErrorSave',results.body)

                console.log(results.body)
            }
        },
        ShowBases:async({commit})=>{
            let results=await Vue.http.get('bases_show');
            //console.log(results)
            commit('mutShowBases',results.body)
        },
        EditBase:async({commit},payload)=>{
            let id=await payload.id;
            let results=await Vue.http.post('bases_edit',id);

            commit('mutEditBase',results.body)

        }

    }
}