<template>
    <section class="page-section" id="contact">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">會員登入</h2>
                <h3 class="section-subheading text-muted">請輸入您的帳號密碼</h3>
            </div>
            <form id="contactForm" @submit.prevent="login">
                <div class="row justify-content-center mb-5">
                    <div class="col-6">
                        <div class="form-group">
                            <input class="form-control" id="email" v-model="email" type="email" placeholder="Email *"
                                required />
                        </div>
                        <div class="form-group">
                            <input class="form-control" v-model="password" id="password" type="password"
                                placeholder="密碼 *" required />
                        </div>
                    </div>
                </div>
                <!-- Submit Button-->
                <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase" id="submitButton"
                        type="submit">送出</button></div>
            </form>
        </div>
    </section>
</template>

<script setup>
import { watch, ref } from 'vue';
import api from '@/utils/axios';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth'


import swal from 'sweetalert2'

const email = ref('');
const password = ref('');
const success = ref('');
const error = ref('');
const router = useRouter();

const login = async () => {
    try {
        await api.get('/sanctum/csrf-cookie'); // ⭐ CSRF 初始化
        const resLogin = await api.post('/api/login', { email: email.value, password: password.value });
        success.value = resLogin.data.message;

        // 登入成功後，取得用戶資訊
        const auth = useAuthStore()
        const resUserData = await api.get('/api/user')
        auth.setUser(resUserData.data)
        router.push('/'); // 登入成功後導向後台
    } catch (err) {
        error.value = '登入失敗';
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
