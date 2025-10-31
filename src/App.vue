<template>
  <div id="app">
    <!-- <Pager :currentPage=currentPage :count="100"  @pageChange="handlePageChange($event)"></Pager> -->
    <Empty></Empty>
  </div>
</template>

<script>
import Avatar from './components/Avatar';
import Icon from './components/Icon';
import Pager from './components/Pager';
import Empty from './components/Empty';
export default {
  components: { Avatar, Icon, Pager,Empty },
  name: 'App',
  data() {
    return {
      currentPage: 1,
    }
  },
  methods: {
    handlePageChange(changePage) {
      this.currentPage = changePage;
    }
  }
}
</script>

<style scoped></style>
