<template>
<div>
<form @submit.prevent="updatefunc" action="/">
  <p>プログラミング勉強しています</p>
  <p>テキスト<input type="text" :value="textdefault" class="textForm"></p>
  <p>パスワード<input type="password" :value="password" ></p>
  <p>チェックボックス<input type="checkbox" :value="checkbox" ></p>
  <p>ラジオボタン<input type="radio" :value="radio" ></p><br>
  <p><input type="hidden" value="隠し情報" ></p>
  <p><input type="submit" value="送信"></p>
</form>
</div>
</template>

<script>
/* eslint-disable */
export default{
  data () {
    return {
    form: {
      textdefault: '入力して下さい',
      password: '',
      checkboxdefault: false,
      radiodefault: false
      }
    }
  },
  methods: {
      updatefunc (event) {
         console.log(this.$store.dispatch("setText", event.target.value)),
         event.target.value = ''
      }
  }
}
</script>

<style>

</style>