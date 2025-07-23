<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-4 text-center">Login</h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block mb-1 font-semibold" for="email">Email</label>
          <input v-model="email" type="email" id="email" required class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div class="mb-4">
          <label class="block mb-1 font-semibold" for="senha">Senha</label>
          <input v-model="senha" type="password" id="senha" required class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Entrar</button>
      </form>
      <p v-if="errorMessage" class="mt-3 text-red-600">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import store from '../store';

export default {
  data() {
    return {
      email: '',
      senha: '',
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/api/auth/login', {
          email: this.email,
          senha: this.senha
        });
        store.setToken(response.data.token);
        const tokenPayload = JSON.parse(atob(response.data.token.split('.')[1]));
        store.setUser({ nome: tokenPayload.nome, perfil: tokenPayload.perfil });
        this.$router.push('/home');
      } catch (error) {
        this.errorMessage = 'Credenciais inválidas.';
      }
    }
  }
};
</script>
