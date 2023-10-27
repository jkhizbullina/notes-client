<template>
  <div class="main">
    <h2>Регистрация</h2>
    <div>
      <p v-if="!confirmed" class="error">Неправильно заполнены данные</p>
      <label class="input-label" for="login">Логин</label><input class="w3-input" type="text" name="login" v-model="login">
      <label class="input-label" for="login">Имя</label><input class="w3-input" type="text" name="first_name" v-model="first_name">
      <label class="input-label" for="login">Фамилия</label><input class="w3-input" type="text" name="last_name" v-model="last_name">
      <label class="input-label" for="login">E-mail</label><input class="w3-input" type="email" name="email" v-model="email">
      <label class="input-label" for="login">Пароль</label><input class="w3-input" type="text" name="password1" v-model="password1">
      <label class="input-label" for="login">Повторите пароль</label><input class="w3-input" type="text" name="password2" v-model="password2">
      <button type="button" v-on:click="reg()">Зарегистрироваться</button></div>
    <div class = "links">
      <p><a href="../login/">Вход</a></p>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
export default {
  name: 'RegUser',
  data() {
    return {
      success: true,
      login: "",
      email: "",
      first_name: "",
      last_name: "",
      password1: "",
      password2: ""
    }
  },
  created() {
    document.title = "Регистрация";
    this.socket = io("http://localhost:3000");
  },
  mounted() {
    this.socket.on("userConfimation", confirmed => {
      if (confirmed) {
        window.location.href("../notes/");
        return;
      }
    });
  },
  methods: {
    reg() {
      if (this.password1 != this.password2) {
        this.success = false;
        return;
      }
      this.socket.emit("reg", this.user, this.password1, this.first_name, this.last_name, this.email);
    }
  }
}