<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverteNome() }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
    </div>
</template>

<script>
// import barramento from '@/barramento'

export default {
    props: {
        nome: {
            type: String,
            default: 'Anônimo'
            // required: true
            // default: function(){
            //     return Array(10).fill(0).join(',');
            // }
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods:{
        inverteNome(){
            return this.nome.split('').reverse().join('');
        },
        reiniciarNome(){
            //this.nome = 'Pedro';
            this.$emit('nomeMudou', 'Pedro');
        }
        // created(){
        //     barramento.$on('idadeMudou', (idade) => {
        //         this.idade = idade;
        //     });
        // }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
