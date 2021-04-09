<template>
    <div class="container">
        <div class=" justify-content-center row-top">
            <div class="col-sm-8">
                <form @submit.prevent="save()" >
                <h4>Novo Usuário</h4>
                <div class="row mt-5">
                    <div class="form-group col-sm-4">
                        <label for="chave" >Chave</label>
                        <input type="text" id="chave"  class="form-control" v-model="schema.chave"  maxlength="8" 
                        @keydown.tab="validation(schema.chave,'chave')" @click="validation(schema.chave,'chave')" 
                         v-mask="'s#######'">
                        <small id="chavedHelp" class="form-text text-muted" v-if=" validate.field==='chave'" >{{validate.message}}</small>
                    </div>
                    <div class="form-group col-sm-8">
                        <label for="email" >Email</label>
                        <input type="mail" id="email"  class="form-control" v-model="schema.email" 
                        @keydown.tab="validation(schema.email,'email')" @click="validation(schema.email,'email')">
                         <small id="chavedHelp" class="form-text text-muted" v-if="validate.field==='email'"  >{{validate.message}}</small>
                    </div>
                </div>
                    <div class="row">
                        <div class="form-group col-sm-4">
                            <label for="nome" >Nome</label>
                            <input type="text" id="nome" class="form-control" v-model="schema.nome" 
                            @keydown.tab="validation(schema.nome,'nome')"  @click="validation(schema.nome,'nome')">
                            <small id="chavedHelp" class="form-text text-muted" v-if="validate.field==='nome'"  >{{validate.message}}</small>
                        </div>
                        <div class="form-group col-sm-8">
                            <label for="sobrenome" >Sobrenome</label>
                            <input type="text" id="sobrenome"  class="form-control" v-model="schema.sobrenome" 
                            @keydown.tab="validation(schema.sobrenome,'sobrenome')" @click="validation(schema.sobrenome,'sobrenome')">
                            <small id="chavedHelp" class="form-text text-muted" v-if="validate.field==='sobrenome'"  >{{validate.message}}</small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="cidade">Cidade</label>
                        <select id="cidade" v-model="schema.cidade" class="form-control"
                        @keydown.tab="validation(schema.cidade,'cidade')" @click="validation(schema.cidade,'cidade')">
                            <option value="">Escolha a Cidade</option>
                            <option value=""> </option>
                        </select>
                        <small id="chavedHelp" class="form-text text-muted" v-if="validate.field==='cidade'"  >{{validate.message}}</small>
                        
                    </div>
                    <div class="form-group">
                        <label for="senha" >Senha</label>
                        <input type="password" id="senha"  class="form-control" v-model="schema.senha" 
                        @keydown.tab="validation(schema.senha,'senha')" @click="validation(schema.senha,'senha')">
                         <small id="chavedHelp" class="form-text text-muted" v-if="validate.field==='senha'"  >{{validate.message}}</small>
                    </div>
                    <div class="form-group">
                        <label for="confirm" >Repetir Senha</label>
                        <input type="password" id="confirm"  class="form-control" v-model="schema.confirm" 
                        @keydown.tab="validation(schema.confirm,'confirm')" @click="validation(schema.confirm,'confirm')" >
                         <small id="chavedHelp" class="form-text text-muted" v-if="validate.field==='confirm'"  >{{validate.message}}</small>
                    </div>
                    <div class=" float-end mt-5">
                        <router-link to="/" class="btn btn-outline-danger">Cancelar</router-link>
                        <button type="submit" class="btn btn-outline-success ml-3" 
                        v-if="schema.chave==='' 
                        && schema.nome==='' 
                        && schema.sobrenome===''
                        && schema.email===''
                        && schema.senha===''
                        && schema.confirm===''" 
                        disabled >Salvar</button>
                        <small id="chavedHelp" class="form-text text-muted"  
                        v-if="schema.chave==='' 
                        && schema.nome==='' 
                        && schema.sobrenome===''
                        && schema.email===''
                        && schema.senha===''
                        && schema.confirm===''" 
                        >Todo o cadastro deve ser completo</small>
                        <button type="submit" class="btn btn-outline-success ml-3" v-else >Salvar</button>
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
    .row-top{
        margin-top: 10em;

}
</style>