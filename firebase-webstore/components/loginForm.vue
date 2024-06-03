<template>
    <div>
        <h1>Login</h1>
        <ui-sign-in-with-email v-model="user" :provider="providers.google" @success="handleLogin" />
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref } from 'vue'

export default {
    setup() {
        const user = ref(null);
        const auth = getAuth();
        const providers = { google: new firebase.auth.GoogleAuthProvider() };

        const handleLogin = async () => {
            // Additional logic can be added here, e.g., redirecting users
        };

        return { user, providers, handleLogin };
    },
};
</script>

<style scoped>
/* Style your login form */
</style>