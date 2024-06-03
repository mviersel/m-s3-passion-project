<!-- pages/Profile.vue -->
<template>
    <div>
        <h2>Profile</h2>
        <p v-if="user">Welcome, {{ user.email }}!</p>
        <p v-else>Please log in to view your profile.</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from 'firebase/firestore'

const user = ref(auth.currentUser)
</script>