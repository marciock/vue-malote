<template>

    <div class="container mt-5" style="margin-left:10em">
        <h3>Nova Cidade </h3>
            <form>
                <div class="form-group col-sm-8">
                    <label for="cidade">Cidade</label>
                    <input type="text" class="form-control" id="cidade" v-model="cidades.cidade">
                </div>
                <div class="form-group col-sm-8">
                    <label for="baseUnidade">Base/Unidade</label>
                    <select  class="form-control" id="baseUnidade" v-model="cidades.baseUnidade">
                        <option value="">---------</option>
                        <option value=""></option>
                    </select>
                </div>
                <div class="form-group col-sm-8 float-right">
                    <button type="button" class="btn btn-danger">Cancelar</button>
                    <button type="submit" class="btn btn-success ml-3">Salvar</button>
                </div>

            </form>
       
    </div>
</template>
<script>
//import {mapActions} from 'vuex';
import {mapState} from 'vuex';


export default {
    name:'AddCidades',
    computed:{
        ...mapState('cidades',['cidades'])
    }
}
</script>