<template>
    <section class="page-section" id="contact">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Contact Us</h2>
                <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <form id="contactForm" @submit.prevent="submitForm">
                <div class="row align-items-stretch mb-5">
                    <div class="col-md-6">
                        <div class="form-group">
                            <!-- Name input-->
                            <input class="form-control" v-model="name" id="name" type="text" placeholder="姓名 *"
                                required />
                        </div>
                        <div class="form-group">
                            <!-- Email address input-->
                            <input class="form-control" id="email" v-model="email" type="email" placeholder="Email *"
                                required />
                        </div>
                        <div class="form-group mb-md-0">
                            <!-- Phone number input-->
                            <input class="form-control" id="phone" v-model="phone" type="tel" placeholder="電話 *"
                                required />

                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group form-group-textarea mb-md-0">
                            <!-- Message input-->
                            <textarea class="form-control" id="message" v-model="message" placeholder="Your Message *"
                                required></textarea>
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
import { ref } from 'vue'
import swal from 'sweetalert2'

const name = ref('')
const email = ref('')
const message = ref('')

function submitForm() {
    swal.fire(`感謝您 ${name.value}，我們已收到您的訊息！`);
    name.value = email.value = message.value = ''
}
</script>