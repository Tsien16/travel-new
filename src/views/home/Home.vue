<template>
    <div>
        <home-header />
        <home-swiper />
        <home-icons />
        <home-recommend />
        <home-weekend />
    </div>
</template>

<script>
  import HomeHeader from './components/HomeHeader';
  import HomeSwiper from './components/HomeSwiper';
  import HomeIcons from './components/HomeIcons';
  import HomeRecommend from './components/HomeRecommend';
  import HomeWeekend from './components/HomeWeekend';
  import axios from 'axios';

  export default {
    name: 'Home',
    components: {
      HomeWeekend,
      HomeRecommend,
      HomeIcons,
      HomeSwiper,
      HomeHeader,
    },
    methods: {
      getHomeInfo() {
        axios.get('/api/index.json').then(this.getHomeInfoSuccess);
      },
      getHomeInfoSuccess(res) {
        console.log(res);
      },
    },
    mounted() {
      this.getHomeInfo();
    },
  };
</script>

<style scoped lang="stylus">
</style>
