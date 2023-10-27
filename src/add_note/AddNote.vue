<template>
  <div class="main">
    <h2>Добавить заметку</h2>
    <div v-if="confirmed"><textarea class="w3-input" type="text" name="note-text" v-model="note"></textarea>
      <button type="button" v-on:click="addNode()">Добавить</button></div>
    <div class = "links">
      <p v-if="confirmed"><a href="../notes/">Заметки</a></p>
      <p v-else><a href="../reg/">Регистрация</a></p>
      <p v-if="confirmed"><a href="../logout/">Выход</a></p>
      <p v-else><a href="../login/">Вход</a></p>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client"; 
export default {
  name: 'AddNote',
  created() {
    document.title = "Add note";
    this.socket = io("http://localhost:3000");
    this.socket.emit("confirmUser");
  },
  data() {
    return {
      confirmed: false,
      note: ""
    }
  },
  mounted() {
    this.socket.on("userConfirmation", confirmed => {
      this.confirmed = confirmed;
    });
  },
  methods: {
    addNode() {
      this.socket.emit("addNote", this.note);
    }
  }
}
</script>