import Vue from 'vue';
import routes from '../routes';
export default{
    namespaced:true,
    state:{
        error:{error:true,field:'',text:''},
        user:{},
        validate:{},
        schema:{
            chave:'',
            nome:'',
            sobrenome:'',
            email:'',
            senha:''
        },
    },
    mutations:{
        mutLogin(state,loginAction){
            state.users=loginAction
        },
    mutValidate(state,validateAction){
        state.validate=validateAction
    }

    },
    
    actions:{
        validateAction({commit},payload){
            const data=payload.data;
            const name=payload.name;
            let element=document.getElementById(name);
           
            let status={};
            console.log(data)
            
            switch (name) {
                case 'chave':
                    
                    if(data===''){
                       // let element=document.getElementById(name);
                       element.onblur=()=>{
                        element.focus();
                        
                       } 
                        
                        status={message:'Campo está vazio',field:name,error:true}
                        commit('mutValidate',status);
                       // return false;
                        status={};
                        return true;
                    }
                    
                    if (data.length<8){
                      //  let element=document.getElementById(name);
                        element.onblur=()=>{
                            element.focus();
                            
                           } 
                        status={message:'Chave preenchida incorretamente. Deve ter 8 dígitos.',field:name,error:true}
                        commit('mutValidate',status);
                        //
                        //status={};
                        return true;
                    }
                   // let caracter=data.substring(1,-2)
                    
                    if(data.indexOf('s')==-1 ){
                       // let element=document.getElementById(name);
                        element.onblur=()=>{
                            element.focus();
                            
                           } 
                        console.log(data.indexOf('s'))
                        status={message:'Chave preenchida incorretamente.Deve ter a letra "s" ou "S" no inicio.',field:name,error:true}
                        commit('mutValidate',status);
                        // 
                        
                        return true;
    
                    }else{
                        element.onblur=()=>{
                            element.blur();
                        }
                        
                        commit('mutValidate',status);
                    }

                    break;
                case 'nome':
                    if(data===''){
                       // let element=document.getElementById(name);
                        element.onblur=()=>{
                            element.focus();
                            
                           } 
                        status={message:'Campo está vazio',field:name,error:true}
                        commit('mutValidate',status);
                       // return false;
                        status={};
                        return true;
                    }else{
                        element.onblur=()=>{
                            element.blur();
                        }
                    }

                    if(data.length < 3){
                      //  let element=document.getElementById(name);
                        element.onblur=()=>{
                            element.focus();
                            
                           } 
                        status={message:'Campo deve ter mais de 3 digitos',field:name,error:true}
                        commit('mutValidate',status);
                       // return false;
                        status={};
                        return true;
    
                    }else{
                        element.onblur=()=>{
                            element.blur();
                        }
                    }
                    
                 break;
                 case 'sobrenome':
                    if(data===''){
                        // let element=document.getElementById(name);
                         element.onblur=()=>{
                             element.focus();
                             
                            } 
                         status={message:'Campo está vazio',field:name,error:true}
                         commit('mutValidate',status);
                        // return false;
                         status={};
                         return true;
                     }else{
                         element.onblur=()=>{
                             element.blur();
                         }
                     }
 
                     if(data.length < 3){
                       //  let element=document.getElementById(name);
                         element.onblur=()=>{
                             element.focus();
                             
                            } 
                         status={message:'Campo deve ter mais de 3 digitos',field:name,error:true}
                         commit('mutValidate',status);
                        // return false;
                         status={};
                         return true;
     
                     }else{
                         element.onblur=()=>{
                             element.blur();
                         }
                     }

                    break;

                    case 'email':
                        if(data===''){
                            // let element=document.getElementById(name);
                             element.onblur=()=>{
                                 element.focus();
                                 
                                } 
                             status={message:'Campo está vazio',field:name,error:true}
                             commit('mutValidate',status);
                            // return false;
                             status={};
                             return true;
                         }else{
                             element.onblur=()=>{
                                 element.blur();
                             }
                         }
                         if(data.indexOf('@')==-1 ){
                            // let element=document.getElementById(name);
                             element.onblur=()=>{
                                 element.focus();
                                 
                                } 
                             console.log(data.indexOf('@'))
                             status={message:'Formato do email incorreto',field:name,error:true}
                             commit('mutValidate',status);
                             // 
                             
                             return true;
         
                         }else{
                             element.onblur=()=>{
                                 element.blur();
                                 
                             }
                             
                             commit('mutValidate',status);
                         }

                    break;
            
                default :
                    break;
                    
            }
            
               // commit('mutValidate',status);
            
            
            
            
            
                 
        },
        loginAction: async ({commit}, payload)=>{
            const schema= await payload.schema;
        

           let result= await Vue.http.post('login',schema);
            
           if(result.data.error===false){
               // commit('mutLogin',result.data);
                
               sessionStorage.setItem('id',result.data.id);
               sessionStorage.setItem('chave',result.data.chave);
               sessionStorage.setItem('nome',result.data.nome);
               sessionStorage.setItem('sobrenome',result.data.sobrenome);
               sessionStorage.setItem('email',result.data.email);
              // sessionStorage.setItem('password',result.data.password);


               routes.push('/dash').catch(()=>{})
            }else{
                commit('mutLogin',result.data);
            }
                  
     

        } ,
        
    }
}