<template>
    <div class="container " >
         <form @submit.prevent="save()">
        <div class="row mt-5">
            <h3>Nova Unidade/Base </h3>
           
           
                <div class="form-group col col-sm-8">
                    <label for="nome">Base/Unidade</label>
                    <input type="text" class="form-control" id="nome" v-model="base.nome" @focus="focusTry()">
                    <small class="multed" v-if="error.error===true">{{error.message}}</small>
                    
                </div>
                
                <div class="mt-5 col col-sm-8 float-end" >
                    <router-link to="/bases" class="btn btn-danger " style="margin-right:1em">Cancelar</router-link>
                    <button type="submit" class="btn btn-success ">Salvar</button>
                </div>

            
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