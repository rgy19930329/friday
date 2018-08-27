<template>
  <div id="app">
    <template v-if="isDone">
      <img alt="Vue logo" src="./assets/logo.png" class="logo">
      <router-view></router-view>
    </template>
    <template v-else>
      loading...
    </template>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    
  },
  data() {
    return {
      isDone: false
    }
  },
  created() {
    this.$ajax({
      url: '/config',
      method: 'get',
      directAjax: true,
    }).then(rs => {
      this.isDone = true;
      this.$GlobalInfo.config = rs;
    });
  }
}
</script>

<style rel="stylesheet/less" lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  padding: 20px;

  .logo {
    width: 100px;
  }

  .ivu-icon {
    font-size: 20px;
  }
}
</style>
