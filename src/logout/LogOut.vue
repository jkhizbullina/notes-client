<template>
  <div class="main">
    <h1>Выход из профиля...</h1>
  </div>
</template>

<script>
import io from "socket.io-client"; 
export default {
  name: 'LogOut',
  created() {
    document.title = "Выход из профиля";
    this.socket = io("http://localhost:3000");
    this.socket.emit("logout");
  },
  mounted() {
    this.socket.on("logoutConfirmed", () => {
        window.location.replace("../login/");
    });
  }
}
</script>