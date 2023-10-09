<template>
  <div class="main">
    <h1>Russian-English dictionary</h1>
    <h2>Русско-английский словарь</h2>
    <p class = "description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <div class = "links">
      <p><a href="../add_word">Добавить слово</a></p>
      <p><a href="../words_list/">Список слов</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  created() {
        document.title = "My dictionary"
  }
}
</script>