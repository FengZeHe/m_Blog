<template>
  <Layout>
    <div class="main-container" v-loading="isLoading">
      <ArticleDetail :blog="data" v-if="data"></ArticleDetail>
    </div>

    <template #right>
      <div class="right-container" v-loading="isLoading">
        <ArticleTOC :toc="data.toc" v-if="data"></ArticleTOC>
      </div>
    </template>


  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import Layout from '@/components/Layout';
import ArticleDetail from './components/ArticleDetail';
import ArticleTOC from "./components/ArticleTOC";
import { getBlog } from "@/api/article";
export default {
  components: {
    Layout,
    ArticleDetail,
    ArticleTOC,
  },
  mixins: [fetchData(null)],
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id);
    }
  }


};
</script>

<style scoped lang="less">
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>
