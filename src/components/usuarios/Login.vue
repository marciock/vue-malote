<template>
    <div class="container ">
        <form >
       <div class="row justify-content-center row-top ">
           <div class="col-sm-10">
            <div class="card shadow p-3 mb-5 bg-white rounded" >
                <div class="card-body">
                    <h5 class="card-title ">Login</h5>
                    <div class=" card-subtitle">
                        <div class="form-group ">
                            <label for="chave">Chave</label>
                            <input type="text" id="chave"  class="form-control" v-model="schema.chave" aria-describedby="chavelHelp">
                            <small id="chaveHelp" class="form-text text-muted" v-if="this.users.field==='chave'">{{this.users.text}}</small>
                           
                        </div>
                        <div class="form-group mt-2">
                            <label for="senha">Senha</label>
                            <input type="password" id="senha"  class="form-control" v-model="schema.senha" aria-describedby="senhadHelp">
                            <small id="senhadHelp" class="form-text text-muted" v-if="this.users.field==='senha'">{{this.users.text}}</small>
                        </div>
                    </div>
                    <div class=" float-end mt-5">
                        <router-link to="/add_user" class="card-link  ">Cadastrar</router-link>
                        <button type="submit" class="btn btn-outline-success  btn-right"  >Entrar</button>
                    </div>
                </div>
            </div>
           </div>
           
       </div>
        </form>
    </div>
</template>
<script>

export default {
    name:'Login',
    data:()=>{
        return{
            schema:{
                chave:'',
                senha:''
            },
            users:{}
        }
    },
}
</script>
<style scoped>
.btn-right{
    margin-left: 1em;
}
.row-top{
    margin-top:10em;
}
</style>