<template>
  <div>
    <Layout>
      <template #default>
        <ArticleList></ArticleList>
      </template>

      <template #right>右侧区域
        <RightList :list="list"></RightList>
      </template>

    </Layout>


  </div>

</template>

<script>
import Layout from '@/components/Layout'
import ArticleList from './components/ArticleList.vue';
import RightList from './components/RightList.vue';
export default {
  components: {
    RightList,
    Layout,
    ArticleList,
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