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
            nMalote:''
        },
        
    }
}