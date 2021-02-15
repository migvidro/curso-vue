new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert("Alerta!!!");
        },
        atualizaInput(event){
            this.valor = event.target.value;
        }
    }
})