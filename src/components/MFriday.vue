<template>
  <div class="page-mfriday">
    <h1>total: {{ total }}</h1>
    <pull-to :bottom-load-method="refresh">
      <div>
        <Card dis-hover v-for="(item, index) in list" :key="index" style="margin: 10px 0">
          <Row>
            <Col span="6"><img :src="item.cover" /></Col>
            <Col span="12" style="text-align: left;"><a :href="item.url" target="_blank">{{ item.title }}</a></Col>
            <Col span="6">{{ item.rate }}</Col>
          </Row>
        </Card>
      </div>
    </pull-to>
  </div>
</template>
<script>
import PullTo from 'vue-pull-to';

export default {
  name: 'mfriday',

  components: {
    PullTo
  },

  data() {
    return {
      title: 'MFriday',
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
      this.list = this.list.concat(rs.data);
      this.total = rs.total;
    },
    async refresh(loaded) {
      this.curr += 1;
      await this.dataLoad();
      loaded('done');
    }
  }
}
</script>
<style rel="stylesheet/less" lang="less">
.mfriday-wrap {
  margin-top: 0;
  .logo {
    width: 50px;
  }
  .ivu-card-body {
    line-height: 74px;
  }
}
</style>
<style scoped rel="stylesheet/less" lang="less">
h1 {
  color: #f60;
  font-size: 18px;
}

.page-mfriday {
  height: calc(100vh - 85px);
  img {
    width: 50px;
    vertical-align: middle;
  }
}
</style>
