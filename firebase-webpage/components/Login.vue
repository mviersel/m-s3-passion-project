<!-- components/Login.vue -->
<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <input v-model="email" placeholder="Email" />
            <input v-model="password" type="password" placeholder="Password" />
            <button type="submit">Log In</button>
        </form>
        <p v-if="user">Logged in as {{ user.email }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '@/plugins/firebase'

const email = ref('')
const password = ref('')
const user = ref(null)

const login = async () => {
    try {
        await auth.signInWithEmailAndPassword(email.value, password.value)
        user.value = auth.currentUser
    } catch (error) {
        console.error('Login error:', error.message)
    }
}
</script>