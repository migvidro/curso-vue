export default {
    data(){
        return {
            fruta: '',
            frutas: ['banana', 'maça', 'laranaja']
        }
    },
    methods: {
        add(){
            this.frutas.push(this.fruta);
            this.fruta = '';
        }
    }
}