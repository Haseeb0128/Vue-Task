<template>
  <div class="box">
    <div class="box1">
      <Sidebar :User="isUSer" />
    </div>
    <div class="box2 p-4">
      <h1>User Page</h1>
      <UserTodo />
    </div>
  </div>
</template>
<script>
// import UserSideBar from './UserSideBar.vue';
import UserTodo from "./UserTodo.vue";
import Sidebar from "./Sidebar.vue";

export default {
  name: "User",
  data() {
    return {
      isUSer: false,
    }
  },
  components: {
    Sidebar,
    UserTodo,
  },

  mounted() {
    const role = localStorage.getItem("user");
    const role1 = JSON.parse(role);
    // console.log(role1.role);
    // if (role1.role == "user") {
    //   this.isUSer = true;
    //   console.log("getting correct role");
    // }
    this.isUSer = true;
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
