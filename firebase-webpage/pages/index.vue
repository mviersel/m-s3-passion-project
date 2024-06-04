<!-- pages/index.vue -->

<template>
    <div>
        <h1>Home</h1>
        <div v-if="user">
            <p>Welcome, {{ user.email }}</p>
            <button @click="handleLogout">Logout</button>
        </div>
        <div v-else>
            <p>You are not logged in. <a href="/login">Login</a> or <a href="/register">Register</a>.</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { logout } from '~/services/AuthService';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'vue-router';

const user = ref(null);
const auth = getAuth();
const router = useRouter();

const handleLogout = async () => {
    await logout();
    user.value = null;
};

onMounted(() => {
    onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser;
    });
});
</script>

<style></style>