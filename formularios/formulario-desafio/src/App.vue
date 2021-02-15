<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!submetido">
				<div class="cabecalho">Formulário</div>
				<NomeCompleto v-model="nomeCompleto"/>
				<Rotulo nome="Email">
					<input type="email" v-model.lazy="usuario.email">
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" v-model.lazy="usuario.senha">
				</Rotulo>
				<Rotulo nome="Armazenar Dados?">
					<select v-model="armazem">
						<option v-for="armazem in armazenamento" :key="armazem.codigo">
							{{ armazem.codigo }} - {{ armazem.valor }}
						</option>
					</select>
				</Rotulo>
				<hr>
				<button @click.prevent="submetido = true">Enviar</button>
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>				
				<Rotulo nome="Nome">
					<span>{{ nomeCompleto.nome }}</span>
				</Rotulo>
				<Rotulo nome="Sobrenome">
					<span>{{ nomeCompleto.sobrenome }}</span>
				</Rotulo>
				<Rotulo nome="Email">
					<span>{{ usuario.email }}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span>{{ usuario.senha }}</span>
				</Rotulo>
				<Rotulo nome="Armazenar Dados?">
					<span>{{ armazem }}</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import NomeCompleto from './components/NomeCompleto.vue'

export default {
	name: 'app',
	components: { Rotulo, NomeCompleto },
	data(){
		return {
			usuario: {
				email: '',
				senha: ''
			},
			nomeCompleto: {
				nome: '',
				sobrenome: ''
			},
			armazem: '',
			armazenamento: [
				{ codigo: 1, valor: 'Sim' },
				{ codigo: 2, valor: 'Não' }
			],
			submetido: false
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
