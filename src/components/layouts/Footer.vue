<template>
    <footer class="footer py-4">
        <div class="container">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item">
                    <router-link to="/" class="nav-link px-2 text-body-secondary">首頁</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link px-2 text-body-secondary">關於我們</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/news" class="nav-link px-2 text-body-secondary">最新消息</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/products" class="nav-link px-2 text-body-secondary">產品架</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/contact" class="nav-link px-2 text-body-secondary">聯絡我們</router-link>
                </li>
            </ul>
            <div class="row align-items-center">
                <div class="col-lg-4 text-lg-start">© 2025 翔金鋼鐵製造公司</div>
                <div class="col-lg-4 my-3 my-lg-0">
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i
                            class="fab fa-twitter"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i
                            class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i
                            class="fab fa-linkedin-in"></i></a>
                </div>
                <div class="col-lg-4 text-lg-end">
                    <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                    <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
                </div>
            </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
footer {
    width: 100%;
}
</style>