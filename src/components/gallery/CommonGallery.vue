<template>
    <div class="container" @click="handleGalleryClick">
        <div class="wrapper">
            <swiper>
                <!-- slides -->
                <swiper-slide :options="swiperOption" v-for="(item, index) of imgList" :key="index">
                    <img class="gallery-img"
                         :src="item"
                         alt="轮播">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'CommonGallery',
    props: {
      imgList: {
        type: Array,
        default() {
          return [];
        },
      },
    },
    methods: {
      handleGalleryClick() {
        this.$emit('close');
      },
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observeParents: true,
          observer: true,
        },
      };
    },
  };
</script>

<style lang="stylus" scoped>
    .container
        display flex
        flex-direction column
        justify-content center
        z-index 99
        position fixed
        left 0
        right 0
        bottom 0
        top 0
        background #000

        .wrapper
            overflow hidden
            height 0
            width 100%
            padding-bottom 100%

            .gallery-img
                width 100%

        .swiper-pagination
            color #ffffff
            bottom -1rem
</style>
