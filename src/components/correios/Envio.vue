<template>
    <div class="container">
        <h2 class="text-center mt-5">Envio de Malote </h2>
        <div class="mt-5">
            <NotaCorreio  title="Envio" />
        </div>
    </div>
</template>
<script>
import NotaCorreio from './NotaCorreio';
export default {
    name:'Envio',
    components:{
        NotaCorreio
    }
}
</script>
