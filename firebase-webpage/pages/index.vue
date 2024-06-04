<template>
    <div>
        <h1>Firebase Auth with Nuxt 3</h1>
        <div v-if="user">
            <p>Welcome, {{ user.email }}</p>
            <button @click="handleLogout">Logout</button>
        </div>
        <div v-else>
            <input v-model="email" type="email" placeholder="Email" />
            <input v-model="password" type="password" placeholder="Password" />
            <button @click="handleRegister">Register</button>
            <button @click="handleLogin">Login</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { register, login, logout } from '~/services/AuthService';

const email = ref('');
const password = ref('');
const user = ref(null);

const handleRegister = async () => {
    try {
        user.value = await register(email.value, password.value);
    } catch (error) {
        alert(error.message);
    }
};

const handleLogin = async () => {
    try {
        user.value = await login(email.value, password.value);
    } catch (error) {
        alert(error.message);
    }
};

const handleLogout = async () => {
    try {
        await logout();
        user.value = null;
    } catch (error) {
        alert(error.message);
    }
};
</script>