<template>
  <div>
    <router-view></router-view>
  </div>

</template>

<script>
  import Cookies from 'js-cookie'
  import dispatch from "@/shared";
  const menus = [
    {
      key: "Home",
      title: "主页",
      path: "/"
    },
    {
      key: "VueMicroApp",
      title: "Vue 列表页",
      path: "/vue/list"
    },
    {
      key: "VueMicroAppList",
      title: "Vue 详情页",
      path: "/vue/detail"
    },
    {
      key: "ReactMicroApp",
      title: "React 列表页",
      path: "/react/list"
    },
    {
      key: "ReactMicroAppList",
      title: "React 详情页",
      path: "/react/detail"
    },
    {
      key: "StaticMicroApp",
      title: "Static 微应用",
      path: "/static"
    }
  ];
  export default {
    name: 'App',
    components: {

    },
    data() {
      return {
        menus,
      }
    },
    methods:{
      logout(){
        dispatch.setToken('')
        dispatch.setUser({})
        Cookies.remove('token')
        setTimeout(()=>{
          this.$router.push('/login')
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  #ant-main-app {
    height: 100%;
    position: relative;

    .ant-menu-wrapper {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: 40;
      width: 172px;
      overflow-x: hidden;
      overflow-y: auto;
    }

    .ant-nav-wrapper {
      position: fixed;
      width: 100%;
      min-width: 1060px;
      padding-left: 172px;
      left: 0;
      top: 0;
      z-index: 30;
    }
  }

  .ant-frame-wrapper {
    padding-left: 172px;
    flex-grow: 1;
    height: 100%;
    width: 100%;
    position: relative;
  }

  #ant-frame {
    width: 100%;
    height: 100%;

    > :first-child {
      height: 100%;
    }
  }
</style>
