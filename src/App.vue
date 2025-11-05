<template>
  <div id="app" class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        中间主区域
        <router-view></router-view>
      </template>

    </Layout>


  </div>
</template>

<script>
import Avatar from './components/Avatar';
import Icon from './components/Icon';
import Pager from './components/Pager';
import Empty from './components/Empty';
import ImageLoader from './components/ImageLoader';
import SiteAside from './components/SiteAside';
import Layout from './components/Layout';
import bennerReq, { getBanners } from '@/api/banner'
export default {
  components: { Avatar, Icon, Pager, Empty, ImageLoader, SiteAside, Layout },
  name: 'App',
  data() {
    return {
      currentPage: 1,
    }
  },
  methods: {
    handlePageChange(changePage) {
      this.currentPage = changePage;
    },
    handleImageLoad() {
      console.log("父组件收到图片加载完成的消息")
    }
  },
  mounted(){
    console.log("调用banner")
    getBanners()
  }
}
</script>



<style scoped lang="less">
@import url('@/styles/mixin.less');

.app-container {
  .self-fill(fixed);
}

.aside {
  width: 250px;
  height: 100%;
}
</style>
