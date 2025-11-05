<template>
  <div class="home-container" ref="container">
    <ul class="carousel-container" :style="{ marginTop }">
      <li v-for="item in banners" :key="item.id">
        <Carouselitem />
      </li>
    </ul>

    <div class="icon icon-up" v-show="index >= 1" @click="switchTo(index - 1)">
      <Icon iconType="arrowUp"></Icon>
    </div>


    <div class="icon icon-down" v-show="index < banners.length - 1" @click="switchTo(index + 1)">
      <Icon iconType="arrowDown"></Icon>
    </div>

    <ul class="indicator">
      <li v-for="(item, i) in banners" :key="item.id" :class="{ active: i === index }">

      </li>
    </ul>


  </div>
</template>

<script>
import { getBanners } from '@/api/banner';
import Carouselitem from './Carouselitem';
import Icon from '@/components/Icon';
export default {
  data() {
    return {
      banners: [],
      index: 1,
      containerHeight: 0,
    }
  },
  components: {
    Carouselitem,
    Icon
  },
  async created() {
    this.banners = await getBanners();
  },
  methods: {
    switchTo(i) {
      this.index = i;
      console.log(this.index);
    }
  },
  computed: {
    marginTop() {
      return this.index * this.containerHeight + "px";
    }
  },

  mounted() {
    console.log(this.$refs.container.clientHeight)
  }
}
</script>

<style lang="less" scoped>
@import url('@/styles/global.less');
@import url('@/styles/mixin.less');
@import url('@/styles/var.less');

.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}

.carousel-container {
  background: @dark;
  width: 100%;
  height: 100%;

  li {
    width: 100%;
    height: 100%;
  }
}

.icon {
  .self-center();
  transform: translateY(-50%);
  font-size: 30px;
  color: @gray;
  cursor: pointer;

  &.icon-up {
    top: 15px;
    transform: translateX();
    animation: jump-up 2s infinite;
  }

  &.icon-down {
    top: auto;
    bottom: 15px;
  }

  @jump :5px;

  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }

    50% {
      transform: translate(-50%, -@jump);
    }

    100% {
      transform: translate(-50%, @jump);
    }
  }
}


.indicator {
  position: absolute;
  cursor: pointer;
  .self-center();
  left: auto;
  right: 15px;


  li {

    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words;
    margin-bottom: 10px;
    border: 1px solid #fff;

    &.active {
      background: #fff;
    }
  }




}
</style>