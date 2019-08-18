<template>
    <div>
        <home-header />
        <home-swiper />
        <home-icons />
    </div>
</template>

<script>
  import HomeHeader from './components/HomeHeader';
  import HomeSwiper from './components/HomeSwiper';
  import HomeIcons from './components/HomeIcons';

  export default {
    name: 'Home',
    components: {
      HomeIcons,
      HomeSwiper,
      HomeHeader,
    },
  };
</script>

<style scoped lang="stylus">
</style>
