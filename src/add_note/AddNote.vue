<template>
  <div class="main">
    <h2>Добавить заметку</h2>
    <div><input class="w3-input" type="text" name="note-text" v-model="note">
      <button type="button" v-on:click="addWord()">Добавить</button></div>
    <div class = "links">
      <p><a href="../reg/">Регистрация</a></p>
      <p><a href="../login/">Вход</a></p>
      <p><a href="../notes/">Заметки</a></p>
      <p><a href="../logout/">Выход</a></p>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client"; 
export default {
  name: 'AddWord',
  created() {
    document.title = "Add word";
    this.socket = io("http://localhost:3000");
  },
  data() {
    return {
      russianWord: "",
      englishWord: ""
    }
  },
  methods: {
    addWord() {
      this.socket.emit("addWord", this.russianWord, this.englishWord);
    }
  }
}
</script>