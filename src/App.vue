<template>
  <div id="app" class="container">
    <h1>VUE.JSのアプリケーションspa開発練習</h1>
    <img src="./assets/logo.png">
    <div>
      <router-link to="/" class="btn btn-outline-primary">ホーム画面</router-link>
      <router-link to="/pagenation" class="btn btn-outline-secondary">送信画面</router-link>
    </div>
    <router-view></router-view>
    <p>入力したデータを表示します。</p>
    <p><span class="alert alert-primary" role="alert">  テキスト:{{ sendText }}</span></p>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "App",
  computed: {
    sendText() {
    return this.$store.state.text
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
