<template>
    <div class="container mt-5" style="margin-left:10em">
        <h3>Editando Base/Unidade </h3>
            <form @submit.prevent="save()">
                <div class="form-group col-sm-8">
                    <label for="nome">Base/Unidade</label>
                    <input type="text" class="form-control" id="nome" v-model="edit.nome" @focus="focusTry()">
                    <small class="multed" ></small>
                    
                </div>
                
                <div class="form-group col-sm-8 float-right">
                    <router-link to="/bases" class="btn btn-danger">Cancelar</router-link>
                    <button type="submit" class="btn btn-success ml-3">Salvar</button>
                </div>

            </form>
       
    </div>
</template>

<script>
import {mapState} from 'vuex';
//import {mapActions} from 'vuex';

export default {
    name:'EditBases',
    computed:{
        ...mapState('buttonGen',['edit'])
    },
    methods:{
        //...mapActions('bases',['SaveBase']),
        save(){
            const data=this.base;
            
            console.log(data)

          //  this.SaveBase(data);
        },
        focusTry(){
            this.error.message="";
        }
    }
}
</script>