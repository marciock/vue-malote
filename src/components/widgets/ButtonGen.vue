<template>
   
        <button type="button" :class="classes" @click="edit()">
            <span :class="icon"></span>
        </button>
    
</template>
<script>
import {mapActions} from 'vuex';

export default {
    name:'ButtonGen',
    props:['classes','icon','ID','url','goForm'],

    methods:{
       ...mapActions('buttonGen',['EditButton']),
       edit(){
           
           const data={id:this.ID,url:this.url,go:this.goForm}

           //console.log(data)
           this.EditButton(data)
       }
    }
    
   
}
</script>