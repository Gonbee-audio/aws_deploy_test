<template>
<div> 
<form @submit.privent="updatefunc">
  <p>プログラミング勉強しています</p>
  <p>テキスト<input type="text" :value="text"></p>
  <p>パスワード<input type="password" value="password" v-model="form.password"></p>
  <p>チェックボックス<input type="checkbox" value="checkbox" v-model="form.checkboxdefault"></p>
  <p>ラジオボタン<input type="radio" value="radio" v-model="form.radiodefault"></p><br>
  <input type="hidden" value="隠し情報">
  <input type="submit" value="送信" >
</form>
{{ form.textdefault }}
{{ form.password }}
{{ form.checkboxdefault }}
{{ form.radiodefault}}
</div>
</template>

<script>
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
         this.$store.dispatch("incrementText", event.target.value)
      }
  }
}
</script>

<style>

</style>