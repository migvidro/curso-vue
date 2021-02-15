<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<hr>
		<p>{{ frase | coloca }}</p>
		<p>{{ fraseComVírgula | coloca }}</p>
		<hr>
		<p>{{ frase | contaCaracteres }}</p>
		<p>{{ fraseComTamanhos | coloca }}</p>
		

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import computadasMixin from './computadasMixin'

export default {
  filters: {
    coloca(frase) {
      return frase.replace(/ /g, ",");
    },
  },
  data() {
    return {
      frase: "Essa é a frase que será usada nos desafios",
    };
  },
  mixins: [computadasMixin]
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
