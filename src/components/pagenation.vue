<template>
<div>
<form @submit.prevent="updatefunc" action="/">
  <p>プログラミング勉強しています</p>
  <label for="exampleInputEmail1">メッセージ</label>
  <p><input type="text" v-model="form.textdefault" name="text" class="textForm"></p>
  <label for="exampleInputPassword1">パスワード</label>
  <p><input type="password" v-model="form.password" name="password"></p>
  <p>チェックボックス<input type="checkbox" v-model="form.checkboxdefault" ></p>
  <p>ラジオボタン<input type="radio" v-model="form.radiodefault" ></p><br>
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
         this.$store.dispatch("setText", event.target.text = this.form.textdefault),
         this.$store.dispatch("setPassword", event.target.password = this.form.textdefault)


      }
  }
}
</script>

<style>

</style>