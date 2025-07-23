import { reactive } from 'vue';

const store = reactive({
  token: null,
  user: null,
  get isAuthenticated() {
    return !!this.token;
  },
  setUser(user) {
    this.user = user;
  },
  setToken(token) {
    this.token = token;
  },
  logout() {
    this.token = null;
    this.user = null;
  }
});

export default store;
