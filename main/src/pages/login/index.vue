<template>
  <div class="container">

      this is login
      <a-button size="large" type="primary" @click="login">Login</a-button>

  </div>
</template>

<script>
  import Cookies from 'js-cookie'
  import dispatch from "../../shared";
  export default {
    name: "index",
    methods:{
      async login(){
        const token = await new Promise((resolve)=>{resolve(Date.now().toString(16))});
        // 登录成功后，设置 token
        Cookies.set('token',token)
        dispatch.setToken(token)
        dispatch.setUser({number:0})

        this.$router.push({name:'home'})
      }
    }
  }
</script>

<style scoped>
  .container{
    padding: 100px;
    box-sizing: border-box;
  }
</style>
