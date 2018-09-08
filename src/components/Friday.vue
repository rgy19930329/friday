<template>
  <div class="page-friday">
    <h1>{{ title }}</h1>
    <c-table :thead="['id', '电影', '评分', 'url', '封面']" :list="list">
      <tr slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.title }}</td>
        <td>{{ props.item.rate }}</td>
        <td><a :href="props.item.url" target="_blank">{{ props.item.url }}</a></td>
        <td><img :src="props.item.cover"></td>
      </tr>
    </c-table>
    <div class="page-bar">
      <Page 
        @on-change="change"
        :current.sync="curr"
        :total="total"
        :page-size="5"
        show-total />
    </div>
  </div>
</template>

<script>
export default {
  name: 'friday',
  data() {
    return {
      title: 'Friday',
      list: [],
      curr: 1,
      total: 0,
    }
  },

  created() {
    this.dataLoad();
  },

  methods: {
    async dataLoad() {
      const rs = await this.$ajax({
        url: '/api/subjects/list',
        method: 'get',
        params: {
          curr: this.curr,
          size: 5
        },
        directAjax: true,
      });
      this.list = rs.data;
      this.total = rs.total;
    },
    change(curr) {
      this.curr = curr;
      console.log(this.curr);
      this.dataLoad();
    }
  }
}
</script>

<style rel="stylesheet/less" lang="less">
.friday-wrap {
  margin-top: 0;
  .logo {
    width: 50px;
  }
}
</style>

<style scoped rel="stylesheet/less" lang="less">
h1 {
  color: #f60;
  font-size: 18px;
}

.page-friday {
  table {
    img {
      width: 50px;
      vertical-align: middle;
    }
  }
}
</style>
