<template>
    <div>
        <GuestHeader />
        <main>
            <router-view></router-view>
        </main>
        <GuestFooter />
    </div>
</template>

<script setup>
// Vue components
import GuestHeader from './GuestHeader.vue';
import GuestFooter from './GuestFooter.vue';


</script>