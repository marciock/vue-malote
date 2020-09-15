<template>
    
        <div class="float-right mr-5 mb-5">
            <router-link :to="link" class="btn btn-success rounded-circle " >
                <span class="fa fa-plus"></span>
            </router-link> 
        </div>
        
    
</template>
<script>

export default {
    name:'ButtonPlus',
    props:['link']
    
}
</script>