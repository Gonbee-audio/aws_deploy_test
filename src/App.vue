<template>
  <div id="app">
    <p>vue.jsの学習</p>
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">ホーム画面</router-link>
      <router-link to="/pagenation">ページ遷移</router-link>
    </div>
    <router-view></router-view>
    <p>vuexで表示したデータを表示します。</p>
    <p>{{ this.$store.state.text }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    text() {
    return this.$store.state.text
    }
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
