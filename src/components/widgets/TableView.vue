<template>
<div>
    <table class="table table-striped">
        <thead>
            <tr >
                <th v-for="(head,index) in heads" :key="index">{{head}}</th>
                <th> </th>
                <th> </th>
            </tr>

        </thead>
        <tbody>
            <tr v-for="(body, index) of bodies" :key="index">
                <td v-for="(field,f) of fields" :key="f" >{{body[field]}} </td>
            <td><ButtonGen classes="btn btn-warning" icon="fa fa-pencil" :ID="body.id" :goForm="editForm" :url="editURL"/></td>
                <td>{{body.id}}</td>
            </tr>
        </tbody>
    </table>
</div>
    
</template>
<script>
import ButtonGen from '../widgets/ButtonGen';

export default {
    name:'TableHead',
    props:['heads','bodies','fields','editURL','editForm'],
    components:{
        ButtonGen
    },
    data:()=>{
        return{
            edit:{}
        }
    },
    
    
    
}
</script>