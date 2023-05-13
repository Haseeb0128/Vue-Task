<template>
    <div class="box">
        <div class="box1">
            <Sidebar :User="isUser" />
        </div>
        <div class="box2 p-4">
            <h1>Edit Todo</h1>
            <form class="mt-4" style="max-width: 500px;">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">To Do</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        v-model="tasks.task">
                </div>
                <button type="button" class="btn btn-dark" @click="editTodo">Edit Todo</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Sidebar from './Sidebar.vue';

export default
    {
        name: 'EditTodo',
        data() {
            return {
                tasks: {
                    task: '',
                    user_id:null
                },
                isUser: false
            }
        },
        components: {
            Sidebar
        },
        methods: {
            async editTodo() {

                let results = localStorage.getItem("user");
                results = JSON.parse(results);
                this.tasks.user_id = results.id;

                // console.log("ok", this.tasks.task);
                const result = await axios.put("http://localhost:3000/tasks/" + this.$route.params.id, {
                    task: this.tasks.task,
                    user_id:this.tasks.user_id

                });
                if (result.status == 200) {
                    this.$router.push({ name: "User" });
                }
            }
        },
        async mounted() {
            let result = await axios.get(`http://localhost:3000/tasks/${this.$route.params.id}`);
            this.tasks = result.data;

            const role = localStorage.getItem("user");
            const role1 = JSON.parse(role);
            // console.log(role1.role)
            // this.isAdmin = true;
            this.isUser = true
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
</style>