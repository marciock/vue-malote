<template>
    <div class="container">
        <h2 class="text-center mt-5">Envio de Malote </h2>
        <div class="mt-5">
            <NotaMalote  title="Envio" />
        </div>
        
    </div>
</template>
<script>
import NotaMalote from './NotaMalote';

export default {
    name:'Envio',
    components:{
        NotaMalote
    }
}
</script>
