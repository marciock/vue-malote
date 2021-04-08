<template>
    <div class="container mt-5" >
        
        <div class="row justify-content-center">
            <h3>Nova Unidade/Base </h3>
           
            <form @submit.prevent="save()">
                <div class="form-group col col-lg-6">
                    <label for="nome">Base/Unidade</label>
                    <input type="text" class="form-control" id="nome" v-model="base.nome" @focus="focusTry()">
                    <small class="multed" v-if="error.error===true">{{error.message}}</small>
                    
                </div>
                
                <div class="  float-end mb-5 ">
                    <router-link to="/bases" class="btn btn-danger">Cancelar</router-link>
                    <button type="submit" class="btn btn-success ml-3">Salvar</button>
                </div>

            </form>
            </div>
       
       
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