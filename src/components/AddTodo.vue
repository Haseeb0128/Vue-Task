<template>
    <div class="box">
        <div class="box1">
            <Sidebar :User="isUser" />
        </div>
        <div class="box2 p-4">
            <h1>Add Todo</h1>
            <form class="mt-4" style="max-width: 500px">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">To Do</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        v-model="tasks.task" />
                </div>
                <button type="button" class="btn btn-dark" @click="addTodo">
                    Add Todo
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
// import UserSideBar from './UserSideBar.vue';
import Sidebar from "./Sidebar.vue";

export default {
    name: "AddTodo",
    data() {
        return {
            tasks: {
                task: "",
                user_id: null,
            },
            isUser: true,
        };
    },
    components: {
        Sidebar,
    },
    methods: {
        async addTodo() {
            // console.log("ok", this.tasks.task)
            let results = localStorage.getItem("user");
            results = JSON.parse(results);
            // console.log("results id:", results);
            this.tasks.user_id = results.id;

            const result = await axios.post("http://localhost:3000/tasks", {
                task: this.tasks.task,
                user_id: this.tasks.user_id,
            });

            if (result.status == 201) {
                this.$router.push({ name: "User" });
            }
        },
    },
    mounted() {
        const role = localStorage.getItem("user");
        const role1 = JSON.parse(role);
        // console.log(role1.role)
        // this.isAdmin = true;
        this.isUser = true;
    },
};
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
