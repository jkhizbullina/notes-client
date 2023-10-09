const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: 'src/login/main.js',
    login: 'src/login/main.js',
    logout: 'src/logout/main.js',
    reg: 'src/reg/main.js',
    add_note: 'src/add_note/main.js',
    notes: 'src/notes/main.js'
  }
})