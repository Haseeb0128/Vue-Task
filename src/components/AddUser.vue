<template>
    <div class="box">
        <div class="box1">
            <Sidebar :admin="isAdmin" />
        </div>
        <div class="box2 p-4">
            <h1>Add User</h1>
            <form class="mt-4">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        v-model="user.email">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" v-model="user.password">
                </div>
                <div class="mb-3">
                    <label for="textbox" class="form-label">Role</label>
                    <input type="text" class="form-control" id="textbox" v-model="user.role">
                </div>
                <button type="button" class="btn btn-dark" @click="addUser">Add User</button>
            </form>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import axios from 'axios';

export default {
    name: 'AddUser',
    data() {
        return {
            user: {
                role: '',
                email: '',
                password: ''
            },
            isAdmin:false
        }
    },
    components:
    {
        Sidebar,
    },
    methods: {
        async addUser() {
            const result = await axios.post("http://localhost:3000/user", {
                role: this.user.role,
                email: this.user.email,
                password: this.user.password
            });

            if (result.status == 201) {
                this.$router.push({ name: "Admin" });
            }
        }
    },
    mounted()
    {
        const role = localStorage.getItem("user");
            const role1 = JSON.parse(role);
            // console.log(role1.role)
            this.isAdmin = true;
            // this.isUser=true
    }
}
</script>
<style scoped>
.box {
    display: flex;
}

.box1 {
    flex-basis: 20%;
}

.box2 {
    flex-basis: 80%;
}

form {
    max-width: 400px;
}
</style>