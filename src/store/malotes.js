export default{
    namespaced:true,
    state:{
        logistica:'',
        table:{
            dataAtual: new Date().toLocaleDateString({ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
            nome:sessionStorage.getItem('nome'),
            chave:sessionStorage.getItem('chave'),
            origem:'',
            destino:'',
            tipo:'',
            lacre:'',
            nMalote:'',
            protocolo:''
        },
        
    },
    mutations:{
        geraProtocolo(state){
            let destino=state.table.destino;
            let origem=state.table.origem;
            let dataAtual=state.table.dataAtual;
            let atual=dataAtual.replace('/','')
            atual=atual.replace('/','')
            let date=new Date();
            let time=date.getTime();
            if (destino !=='' && origem !=='' && dataAtual !==''){
                let protocolo=destino+origem+atual+time;
            state.table.protocolo=protocolo;
             console.log(protocolo);
            }
            
 
             
         }
    },
    actions:{
        
    }
}