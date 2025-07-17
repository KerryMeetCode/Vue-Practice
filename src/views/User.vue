<template>
    <section class="page-section bg-light" id="team">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">使用者資料展示</h2>
                <h3 class="section-subheading text-muted">Vue -> Laravel </h3>
            </div>
            <div v-if="loading">
                載入中...
            </div>
            <div v-else class="row">
                <div class="col-lg-4" v-for="user in users" :key="user.id">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="@/assets/images/team/1.jpg" alt="..." />
                        <h4>{{ user.name }}</h4>
                        <p class="text-muted">{{ user.email }}</p>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i
                                class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i
                                class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i
                                class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center">
                        <p class="large text-muted">測試用</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '@/utils/axios';

const users = ref([]);
const loading = ref(true);

const getUsers = async () => {
    try {
        const response = await api.get('/users');
        users.value = response.data.data;
    } catch (error) {
        console.error('API Error:', error);
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    getUsers();
});
</script>