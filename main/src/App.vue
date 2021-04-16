<template>
  <a-config-provider>
    <section id="ant-main-app">
      <section class="ant-menu-wrapper">
        <main-menu :menus="menus"/>
      </section>
      <section class="ant-frame-wrapper">
        <!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
        <router-view v-show="$route.name"/>

        <!-- 子应用渲染区，用于挂载子应用节点 -->
        <section v-show="!$route.name" id="frame"></section>
      </section>
    </section>
  </a-config-provider>
</template>

<script>
  import MainMenu from "@/components/menu/index.vue";

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
      MainMenu
    },
    data() {
      return {
        menus,
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
