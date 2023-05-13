<template>
    <div class="container mt-5">
        <h1>Login</h1>
        <form class="mt-5">
            <!-- Email input -->
            <div class="form-outline mb-4">
                <label class="form-label" for="form2Example1">Email address</label>
                <input type="email" id="form2Example1" class="form-control" v-model="email" />
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
                <label class="form-label" for="form2Example2">Password</label>
                <input type="password" id="form2Example2" class="form-control" v-model="password" />
            </div>

            <!-- Submit button -->
            <div class="d-flex flex-column">
                <button type="button" class="btn btn-primary btn-block mb-4" @click="login">Sign
                    in</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: null
        }
    },
    methods: {
        async login() {
            let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`)
            // console.log(result);


            if (result.status == 200 && result.data.length > 0) {
                const user = result.data[0];
                // console.log(user.role);
                localStorage.setItem("user", JSON.stringify(user));

                if (user.role == 'admin') {
                    this.$router.push({ name: "Admin" });
                }

                if (user.role == 'user') {
                    this.$router.push({ name: "User" });
                }
                // this.$router.push({ name: "Admin" });
            }
        }
    }
}
</script>

<style>
.container {
    max-width: 400px;
}
</style>