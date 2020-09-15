<template>
    <div>
        <TableView :heads="head" :bodies="bases" :fields="fields" editURL="bases_edit" editForm="/edit_bases"/> 
        <ButtonPlus link="/add_bases" />
    </div>
</template>
<script>
import TableView from '../widgets/TableView';
import ButtonPlus from '../widgets/ButtonPlus'

import {mapActions,mapState} from 'vuex';


export default {
    name:'ViewBases',
    components:{
        TableView,ButtonPlus
    },
    data:()=>{
        return{
            head:['Local','Criação','Atualização'],
            fields:['nome','createdAt','updatedAt']
        }
    },
    computed:{
        ...mapState('bases',['bases']),
        
    },
    methods:{
        ...mapActions('bases',['ShowBases']),
       
        
        
        
    },
    created(){
        this.ShowBases()
    }
    
}
</script>