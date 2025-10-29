<template>
  <div id="app">
    <Avatar url="https://pic1.arkoo.com/56D0B40F99F841DF8A2425762AE2565D/picture/o_1i4qop009177v1tgf14db15he1iaj1is.jpg" 
        :width="50" :height="50"
    />
    <Icon type="home" />
  </div>
</template>

<script>
import Avatar from './components/Avatar.vue';
import Icon from './components/Icon.vue';
export default {
  components: { Avatar ,Icon},
  name: 'App',
  comments:{
    Avatar,
    Icon,
  }
}
</script>

<style>

</style>
