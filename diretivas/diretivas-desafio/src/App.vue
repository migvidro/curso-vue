<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<button v-clicado:click="handleButtonClick">Executar</button>
		<p v-clicado:mouseenter="handleMouseEnter"
		v-clicado:click="handleButtonClick">Teste mouse event!</p>
	</div>
</template>

<script>
export default {
	directives: {
		clicado: {
			bind(el, binding){
				// el.onclick = function(){
				// 	binding.value()
				// }
				const tipo = binding.arg;
				const fn = binding.value;

				el.addEventListener(tipo, fn);
			}
		}
	},
	methods: {
		handleButtonClick() {
			alert('Clicado');
		},
		handleMouseEnter(){
			alert('MouseEnter');
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
