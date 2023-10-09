<template>
  <div class="main">
    <h2>Список слов в словаре</h2>
      <div class="notes" v-if="confirmed">
        <div v-for="(note, index) in notes" :key="index" class="note">{{note}}</div>
    </div>
    <div class = "links">
      <p v-if="confirmed"><a href="../add_note/">Добавить заметку</a></p>
      <p v-else><a href="../reg/">Регистрация</a></p>
      <p v-if="confirmed"><a href="../logout/">Выход</a></p>
      <p v-else><a href="../login/">Вход</a></p>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
export default {
  name: 'NotesList',
  data() {
    return {
      confirmed: false,
      notes: []
    }
  },
  created() {
    document.title = "List of notes";
    this.socket = io("http://localhost:3000");
    this.socket.emit("confirmUser");
    this.socket.emit("fetchNotes");
  },
  mounted() {
    this.socket.on("userConfimation", confirmed => {
      this.confirmed = confirmed;
    });
    this.socket.on("notelist", data => {
      this.notes = data;
    });
  }
}
</script>
