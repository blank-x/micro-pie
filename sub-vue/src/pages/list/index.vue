<template>
  <div>list
    <div>
      <a-button @click="setToken">子应用 修改token</a-button>

      <div style="margin-top: 20px">来自主应用的token：{{$store.state.token}}</div>

      <router-link to="detail3">dtai11221111l</router-link>
    </div>
  </div>
</template>

<script>
  import dispatch from "@/shared";
  console.log(dispatch);
  export default {
    name: "index",
    methods:{
      setToken(){
        dispatch.setToken(Math.random())
      }
    }
  }
</script>

<style scoped>

</style>
