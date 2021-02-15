new Vue({
    el: '#desafio',
    data:{
        nome: 'Miguel',
        idade: 19,
        caminhoImagem: 'vue.png'
    },
    methods:{
        triplica(){
            return this.idade * 3;
        },
        aleatorio(){
            return Math.random();
        }
    }
})