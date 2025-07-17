// stores/auth.js
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const user = ref(null);
    const isLoggedIn = computed(() => !!user.value);

    function setUser(data) {
      user.value = data;
    }

    function logout() {
      user.value = null;
    }

    return { user, isLoggedIn, setUser, logout };
  },
  {
    persist: {
      storage: sessionStorage, // 或 localStorage
    },
  }
);
