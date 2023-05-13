<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="height: 100vh;">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <span class="fs-4">Welcome</span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto" v-if="admin">
            <li class="nav-item">
                <a href="#" class="nav-link link-dark">
                    <router-link to="/admin" style="text-decoration: none; color: black;">View Users</router-link>
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                    <router-link to="/adduser" style="text-decoration: none; color: black;">Add User</router-link>
                </a>
            </li>
        </ul>
        <ul class="nav nav-pills flex-column mb-auto" v-if="User">
            <li class="nav-item">
                <a href="#" class="nav-link link-dark">
                    <router-link to="/user" style="text-decoration: none; color: black;">View Todos</router-link>
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                    <router-link to="/addtodo" style="text-decoration: none; color: black;">Add Todo</router-link>
                </a>
            </li>
        </ul>
        <hr>
        <button class="btn btn-dark" @click="logOut">Log Out</button>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    props:['admin','User'],
    methods: {
        logOut() {
            localStorage.clear();
            this.$router.push({ name: 'Login' })
        }
    },
}
</script>

<style></style>