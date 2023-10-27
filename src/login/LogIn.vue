<template>
  <div class="main">
    <h2>Вход в профиль</h2>
    <div>
      <div v-if="!success" class="error">Неправильный логин или пароль!</div>
      <div class="input"><label class="input-label" for="login">Логин</label><input class="w3-input" type="text" name="login" v-model="user"></div>
      <div class="input"><label class="input-label" for="login">Пароль</label><input class="w3-input" type="text" name="password" v-model="password"></div>
      <button type="button" v-on:click="login()">Войти</button></div>
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
      user: "",
      password: ""
    }
  },
  created() {
    document.title = "Вход в профиль";
    this.socket = io("http://localhost:3000");
  },
  mounted() {
    this.socket.on("userConfirmation", confirmed => {
      if (confirmed) {
        window.location.replace("../notes/");
        return;
      }
      this.success = confirmed;
    });
  },
  methods: {
    login() {
      this.socket.emit("login", this.user, this.password);
    }
  }
}
</script>