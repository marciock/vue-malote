<template>
    <div class="card" >
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
             <form>
            <div class="card-subtitle mb-2 text-muted">
                 <div class="row">
                    
                     <div class="form-group col-sm-2">
                         <label for="origem">Origem</label>
                         <select class="form-control" id="origem" v-model="table.origem">
                             <option value="">------</option>
                             <option value=""></option>
                         </select>     
                     </div>
                     <div class="form-group col-sm-2">
                         <label for="desctino">Destino</label>
                         <select class="form-control" id="destino" v-model="table.destino">
                             <option value="">------</option>
                             <option value=""></option>
                         </select>    
                     </div>
                     <div class="form-group col-sm-2">
                         <label for="tipo">Tipo</label>
                         <select class="form-control" id="tipo" v-model="table.tipo" @change="getMalote()">
                             <option value="">------</option>
                             <option value="1">Malote</option>
                         </select>    
                     </div>
                     <div class="form-group col-sm-2">
                         <label for="nMalote">Nº do Malote</label>
                         <input class="form-control" id="nMalote" type="text"   readonly v-model="table.nMalote" maxlength="5" v-mask="'#####'">
                         
                                 
                     </div>
                     <div class="form-group col-sm-2">
                         <label for="lacre">Nº do Lacre</label>
                         <input class="form-control" id="lacre" type="text"   readonly v-model="table.lacre" maxlength="8" v-mask="'########'">
                         
                                 
                     </div>
                     <div class="form-group col-sm-2">
                         <label for="protocolo">Protocolo</label>
                         <input class="form-control" id="protocolo" type="text"   readonly>
                                 
                     </div>

                    
                 </div>

            </div>
             <div class="card-body border rounded" style="height:12em">

                 
                <ButtonPlus />
                 
             </div>
             <div  class="card-footer">
                <div class="row">

                    <div class="form-group col-sm-2">
                         <label for="data">Data</label>
                         <input class="form-control" id="data" type="text" v-model="table.dataAtual" readonly >    
                     </div>
                     <div class="form-group col-sm-2">
                         <label for="Nome">Nome</label>
                         <input class="form-control" id="nome" type="text" v-model="table.nome" readonly >    
                     </div>
                     <div class="form-group col-sm-2">
                         <label for="Chave">Chave</label>
                         <input class="form-control" id="chave" type="text" v-model="table.chave" readonly >    
                     </div>
                    <div class="col-sm-6 ">
                    
                        <div class="float-right "> 
                            <button type="submit" class="btn btn-outline-success ">Salvar</button>
                            
                            
                            <button type="button" class="btn btn-outline-danger ml-2 ">Cancelar</button>
                        </div>
                    </div>
                </div>
             </div> 
           
             </form>
        </div>
    </div>
</template>
<script>
import ButtonPlus from '../widgets/ButtonPlus';

export default {
    name:'NotaCorreio',
    components:{
        ButtonPlus
    },
    props:['title'],
    data:()=>{
        return{
            table:{
                dataAtual: new Date().toLocaleDateString({ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
                nome:sessionStorage.getItem('nome'),
                chave:sessionStorage.getItem('chave'),
                origem:'',
                destino:'',
                tipo:'',
                lacre:'',
                nMalote:''
            }
            
        }
    },
    methods:{
        getMalote(){
            console.log(this.table.tipo)
            
            const lacre=document.getElementById('lacre');
            const nMalote=document.getElementById('nMalote')
             
            console.log(lacre)
            if(this.table.tipo==='1'){
                nMalote.removeAttribute('readonly')
                lacre.removeAttribute('readonly')
                
                nMalote.focus()
            }else{
                lacre.setAttribute('readonly',true)
                nMalote.setAttribute('readonly',true)
            }
            
        }
    }
}
</script>