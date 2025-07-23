<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6">Bem-vindo, {{ store.user.nome }}</h1>
    <p>Seu perfil: {{ store.user.perfil }}</p>
    <button @click="logout" class="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Sair</button>
  </div>
</template>

<script>
import store from '../store';

export default {
  setup() {
    return { store };
  },
  methods: {
    logout() {
      store.logout();
      this.$router.push('/');
    }
  }
};
</script>
