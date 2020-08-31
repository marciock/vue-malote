<template>
    <ul>
        <li>
            <div class="form-group col-sm-2">
                <label>Numero</label>
                <input type="text" v-mask="'########'" class="form-control" readonly >
            </div>
            <div class="form-group col-sm-2">
                <label>protocolo</label>
                <input type="text" v-mask="'###########'" class="form-control" readonly >
            </div>
            <div class="form-group col-sm-2">
                <label>Origem</label>
                <select  class="form-control" readonly >
                    <option></option>
                </select>
            </div>
             <div class="form-group col-sm-2">
                <label>Destino</label>
                <select  class="form-control" readonly >
                    <option></option>
                </select>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    name:'EnvelopePlus'
}
</script>