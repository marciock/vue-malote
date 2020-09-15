<template>
    <div class="container mt-5" style="margin-left:10em">
        <h3>Nova Cidade </h3>
            <form @submit.prevent="save()">
                <div class="form-group col-sm-8">
                    <label for="nome">Base/Unidade</label>
                    <input type="text" class="form-control" id="nome" v-model="base.nome" @focus="focusTry()">
                    <small class="multed" v-if="error.error===true">{{error.message}}</small>
                    
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
import {mapActions} from 'vuex';

export default {
    name:'AddBases',
    computed:{
        ...mapState('bases',['base','error'])
    },
    methods:{
        ...mapActions('bases',['SaveBase']),
        save(){
            const data=this.base;
            
            

            this.SaveBase(data);
        },
        focusTry(){
            this.error.message="";
        }
    }
}
</script>