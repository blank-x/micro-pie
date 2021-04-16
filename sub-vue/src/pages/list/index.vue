<template>
  <div>list
    <div>
      <a-button @click="addNumber">子应用 修改number</a-button>

      <div style="margin-top: 20px">来自主应用的token：{{$store.state.token}}</div>
    </div>
  </div>
</template>

<script>
  import dispatch from "@/shared";
  export default {
    name: "index",
    methods:{
      addNumber(){
        dispatch.add({
          ...this.$store.state.user,
          number:this.$store.state.user.number+1
        })
      }
    }
  }
</script>

<style scoped>

</style>
