<template>
    <div>
        <Rotulo nome="Nome">
            <input type="text" :value="value.nome"
            @input="alterarNome">
        </Rotulo>
        <Rotulo nome="Sobrenome">
            <input type="text" :value="value.sobrenome"
            @input="alterarSobrenome">
        </Rotulo>
    </div>
</template>

<script>
import Rotulo from './Rotulo.vue'

export default {
    components: { Rotulo },
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    methods: {
        alterarNome(event){
            this.$emit('input', { 
                nome: event.target.value, 
                sobrenome: this.value.sobrenome 
            });
        },
        alterarSobrenome(event){
            this.$emit('input', { 
                nome: this.value.nome,
                sobrenome: event.target.value,
            });
        },
    }
}
</script>

<style scoped>
    .rotulo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 15px 0px;
        font-size: 1.4rem;
    }

    .elemento {
        display: flex;
        align-self: stretch;
        margin: 10px 0px;
    }
</style>
