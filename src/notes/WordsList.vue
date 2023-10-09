<template>
  <div class="main">
    <h2>Список слов в словаре</h2>
      <div class="word-pair">
        <div v-for="(word, index) in words" :key="index" class="ru">{{word.russian}}</div>
        <div v-for="(word, index) in words" :key="index" class = "en">{{word.english}}</div>
    </div>
    <div class = "links">
      <p><a href="../add_word">Добавить слово</a></p>
      <p><a href="../">Назад</a></p>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
export default {
  name: 'WordsList',
  data() {
    return {
      words: []
    }
  },
  created() {
    document.title = "List of words";
    this.socket = io("http://localhost:3000");
    this.socket.emit("fetchWords");

  },
  mounted() {
    this.socket.on("wordlist", data => {
      this.words = data;
    });
  }
}
</script>
