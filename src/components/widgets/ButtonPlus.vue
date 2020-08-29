<template>
    
        <div class="float-right mr-5 mb-5">
            <button type="button" class="btn btn-success rounded-circle " @click="setClick()">
                <span class="fa fa-plus"></span>
            </button> 
        </div>
        
    
</template>
<script>
export default {
    name:'ButtonPlus',
    props:['click'],
    methods:{
        setClick(){
            return this.click;
        }
    }
}
</script>