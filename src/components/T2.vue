<template>
  <div class="page-t2">
    <h1>{{ title }}</h1>
    <c-table :thead="['name', 'url', 'address', 'string']" :list="list">
      <tr slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.url }}</td>
        <td>{{ props.item.address }}</td>
        <td>{{ props.item.string }}</td>
      </tr>
    </c-table>
  </div>
</template>

<script>
export default {
  name: 't2',
  data() {
    return {
      title: 'MockData Test',
      list: [],
    }
  },

  created() {
    this.initTable();
  },

  methods: {
    initTable() {
      this.$ajax({
        url: '/list',
        method: 'get',
        directAjax: true,
      }).then(rs => {
        this.list = rs.list;
      });
    }
  }
}
</script>

<style scoped rel="stylesheet/less" lang="less">
h1 {
  color: #f60;
  font-size: 18px;
}
</style>
