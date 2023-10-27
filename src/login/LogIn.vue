<template>
  <div class="main">
    <h2>Вход в профиль</h2>
    <div>
      <p v-if="!confirmed" class="error">Неправильный логин или пароль!</p>
      <label class="input-label" for="login">Логин</label><input class="w3-input" type="text" name="login" v-model="login">
      <label class="input-label" for="login">Пароль</label><input class="w3-input" type="text" name="password" v-model="password">
      <button type="button" v-on:click="log_in()">Войти</button></div>
    <div class = "links">
      <p><a href="../reg/">Регистрация</a></p>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
export default {
  name: 'LogIn',
  data() {
    return {
      success: true,
      login: "user",
      password: "password"
    }
  },
  created() {
    document.title = "Вход в профиль";
    this.socket = io("http://localhost:3000");
  },
  mounted() {
    this.socket.on("userConfimation", confirmed => {
      if (confirmed) {
        window.location.href("../notes/");
        return;
      }
      this.success = confirmed;
    });
  },
  methods: {
    log_in() {
      this.socket.emit("login", this.user, this.password);
    }
  }
}
</script>