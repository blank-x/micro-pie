<template>
  <section class="ant-main-menu">
    <a-menu mode="inline" theme="dark" :selectedKeys="[selectKey]">
      <a-menu-item v-for="item in menus" :key="item.key" @click="changeMenu(item)">
        <router-link :to="{path: item.path }">
          <a-icon v-if="item.icon" :type="item.icon"/>
          <span>{{item.title}}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </section>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        selectKey: ''
      }
    },
    props: {
      menus: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      changeMenu(item) {
        const {key} = item;
        this.selectKey = key;
      }
    }
  }
</script>

<style scoped lang="scss">
  .ant-main-menu {
    width: 100%;
    height: 100%;
    background: #001529;

    .ant-menu {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 100%;

      a {
        color: #fff;
        text-decoration: none;
      }
    }

    .ant-parent-title {
      font-size: 13px;
      color: rgba(233, 241, 255, 0.75);
    }

    .ant-child-title {
      font-size: 13px;
      color: #fff;
    }

    .ant-child-title:hover {
      color: #408fff;
    }

    >>> .ant-menu-sub {
      background: rgb(12, 28, 53);
    }
  }
</style>
