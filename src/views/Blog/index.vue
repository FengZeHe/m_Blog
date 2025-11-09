<template>
  <div>
    <Layout>
      <template #default>
        <ArticleList></ArticleList>
      </template>

      <template #right>右侧区域
        <ArticleCategory></ArticleCategory>

      </template>

    </Layout>


  </div>

</template>

<script>
import Layout from '@/components/Layout'
import ArticleList from './components/ArticleList.vue';
import RightList from './components/RightList.vue';
import ArticleCategory from './components/ArticleCategory.vue';
export default {
  components: {
    RightList,
    Layout,
    ArticleList,
    ArticleCategory,
  },
  data() {
    return {
      list: [

      ],
    }
  }
}
</script>

<style></style>