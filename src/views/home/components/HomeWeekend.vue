<template>
    <div>
        <div class="title">
            周末去哪儿
        </div>
        <ul>
            <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="图片">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    data() {
      return {
        recommendList: [{
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '京城周末撒欢',
          desc: '在帝都过周末，不仅仅是城中游！',
        },
          {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
            title: '京城周末撒欢',
            desc: '在帝都过周末，不仅仅是城中游！',
          },
          {
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
            title: '京城周末撒欢',
            desc: '在帝都过周末，不仅仅是城中游！',
          },
        ],
      };
    },
  };
</script>

<style lang="stylus" scoped>
    @import "~assets/mixins.styl"

    .title
        margin-top 0.2rem
        line-height .8rem
        background #eee
        text-indent .2rem

    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 33.9%

    .item-img
        width 100%

    .item-info
        padding .1rem

        .item-title
            line-height .54rem
            font-size .32rem
            ellipse()

        .item-desc
            line-height .4rem
            color #ccc
            ellipse()

</style>
