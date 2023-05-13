<template>
    <div class="box">
        <div class="box1">
            <Sidebar :admin = "isAdmin" />
        </div>
        <div class="box2 p-4">
            <h1>Admin Page</h1>
            <div>
                <div class="d-flex justify-content-center">
                    <div class="card mt-3 w-100">
                        <div class="card-header bg-light">
                            <h4>User List</h4>
                        </div>
                        <div class="card-body">
                            <ul class="list-group mt-3">
                                <li class="list-group-item d-flex align-items-center justify-content-between"
                                    v-for="user in users" :key="user.id">
                                    <span class="message"><strong>ID: </strong>{{ user.id }}</span>
                                    <span class="message"><strong>Email: </strong>{{ user.email }}</span>
                                    <span class="message"><strong>Password: </strong>{{ user.password }}</span>
                                    <span class="message"><strong>Role: </strong>{{ user.role }}</span>
                                    <div class="btn-group d-flex gap-3">
                                        <router-link :to="'/edituser/' + user.id"><button class="btn btn-dark">
                                                Edit</button></router-link>
                                        <button class="btn btn-dark" @click="deleteUser(user.id)">Delete</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Sidebar from './Sidebar.vue'
import axios from 'axios';

export default {
    name: 'Admin',
    data() {
        return {
            users: [],
            isAdmin: false,
        }
    },
    components: {
        Sidebar
    },
    methods: {
        async display() {
            let results = await axios.get("http://localhost:3000/user")
            // console.log(results);
            this.users = results.data;
        },
        async deleteUser(id) {
            let results = await axios.delete("http://localhost:3000/user/" + id);

            if (results.status == 200) {
                this.display();
            }
        },
    },
     mounted() {
        this.display();
        const role = localStorage.getItem("user");
        const role1 = JSON.parse(role);
        console.log(role1.role)
        this.isAdmin = true;

    },
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
</style>