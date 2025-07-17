<template>

    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand" href="#page-top"><img class="logo" src="@/assets/images/navbar-logo.svg"
                    alt="..." /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars ms-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li class="nav-item"><router-link to="/" class="nav-link" :class="{ 'active': route.path === '/' }"
                            aria-current="page">首頁</router-link></li>
                    <li class="nav-item"><router-link to="/about" class="nav-link"
                            :class="{ 'active': route.path === '/about' }">關於我們</router-link></li>
                    <li class="nav-item"><router-link to="/news" class="nav-link"
                            :class="{ 'active': route.path === '/news' }">最新消息</router-link></li>
                    <li class="nav-item"><router-link to="/products" class="nav-link"
                            :class="{ 'active': route.path === '/products' }">產品架</router-link></li>
                    <li class="nav-item"><router-link to="/contact" class="nav-link"
                            :class="{ 'active': route.path === '/contact' }">聯絡我們</router-link></li>
                    <li class="nav-item" v-if="!auth.isLoggedIn"><router-link to="/login" class="nav-link"
                            :class="{ 'active': route.path === '/login' }">會員登入</router-link></li>
                    <li class="nav-item" v-else><a href="#" @click.prevent="logout" class="nav-link">登出</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <header class="masthead">
        <div class="container">
            <div class="masthead-subheading">Welcome To Our Studio!</div>
            <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
            <a class="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
        </div>
    </header>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
import api from '@/utils/axios';
import { ref, watch, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'

import swal from 'sweetalert2'


const auth = useAuthStore()

onMounted(async () => {

    const res = await api.get('/api/user')
    auth.setUser(res.data)

})

const route = useRoute()
const router = useRouter()
const path = ref('')
const success = ref('');
const error = ref('');



watch(
    () => route.path,
    (newPath, oldPath) => {
        path.value = newPath
        console.log(path.value)
    }
)


const logout = async () => {

    try {

        let res = await api.post('/api/logout'); // ⭐ CSRF 初始化
        auth.logout();
        success.value = res.data.message;
        router.push('/');

    } catch (err) {

        error.value = '登出失敗';

    }
};

watch(
    success,
    (successData) => {
        if (successData) {
            swal.fire({
                icon: 'success',
                title: success.value,
            });
            success.value = ''; // reset，避免多次彈出
        }
    }
)

watch(
    error,
    (errorData) => {
        if (errorData) {
            swal.fire({
                icon: 'error',
                title: error.value,
            });
            error.value = ''; // reset，避免多次彈出
        }
    }
)
</script>

<style lang="scss" scoped></style>