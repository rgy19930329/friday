<template>
  <div class="page-emoticon">
    <pull-to :bottom-load-method="refresh">
      <div>
        <Row>
					<Col
						span="24"
						:style="{marginBottom: '20px'}"
						v-for="(item, index) in list" 
						:key="index">
						<img :src="item.cover" />
					</Col>
				</Row>
      </div>
    </pull-to>
  </div>
</template>
<script>
import PullTo from 'vue-pull-to';

export default {
  name: 'emoticon',

  components: {
    PullTo
  },

  data() {
    return {
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
          size: 10
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
.emoticon-wrap {
  margin-top: 0;
  .logo {
    width: 50px;
  }
}
</style>
<style scoped rel="stylesheet/less" lang="less">
.page-emoticon {
	height: calc(100vh - 85px);
	
	img {
		width: 100%;
	}
}
</style>
