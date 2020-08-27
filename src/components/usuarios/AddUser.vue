<template>
    <div class="container mt-2">
        <div class="row row-left">
            <div class="col-sm-8">
                <form @submit.prevent="save()" >
                <h4>Novo Cadastro</h4>
                    <div class="form-group">
                        <label for="chave" >Chave</label>
                        <input type="text" id="chave"  class="form-control" v-model="schema.chave"  maxlength="8" @keydown.tab="validation(schema.chave,'chave')" >
                        <small id="chavedHelp" class="form-text text-muted" v-if=" validate.field==='chave'" >{{validate.message}}</small>
                    </div>
                    <div class="form-group">
                        <label for="nome" >Nome</label>
                        <input type="text" id="nome" class="form-control" v-model="schema.nome" @keydown.tab="validation(schema.nome,'nome')">
                        <small id="chavedHelp" class="form-text text-muted" v-if="validate.field==='nome'"  >{{validate.message}}</small>
                    </div>
                    <div class="form-group">
                        <label for="sobrenome" >Sobrenome</label>
                        <input type="text" id="sobrenome"  class="form-control" v-model="schema.sobrenome" @keydown.tab="validation(schema.chave,'nome')">
                    </div>
                    <div class="form-group">
                        <label for="email" >Email</label>
                        <input type="mail" id="email"  class="form-control" v-model="schema.email">
                    </div>
                    <div class="form-group">
                        <label for="senha" >Senha</label>
                        <input type="password" id="senha"  class="form-control" v-model="schema.senha">
                    </div>
                    <div class="form-group">
                        <label for="confirm" >Repetir Senha</label>
                        <input type="password" id="confirm"  class="form-control" v-model="confirm">
                    </div>
                    <div class="form-group float-right">
                        <router-link to="/" class="btn btn-outline-danger">Cancelar</router-link>
                        <button type="submit" class="btn btn-outline-success ml-3" >Salvar</button>
                    </div>
                </form>
            </div>
        </div>
     </div>
</template>
<script>
import {mapState} from 'vuex';
import {mapActions} from 'vuex';

export default {


    name:'AddUser',
    data:()=>{
        return{
            
            confirm:'',
            erro:{}
        }
    
    },
    computed:{
        ...mapState('usuarios',['schema','validate'])
    },
    methods:{
        ...mapActions('usuarios',['validateAction']),
        save(){
            console.log(this.schema.chave)
            

        },
        validation(d,f){
            let val={data:d,name:f};

            this.validateAction(val)
            
        }
    }
}

</script>
<style>
    .row-left{
        margin-left: 10em;

}
</style>