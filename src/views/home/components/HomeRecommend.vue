<template>
    <div>
        <div class="title">
            热销推荐
        </div>
        <ul>
            <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="图片">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    data() {
      return {
        recommendList: [{
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
          title: '北京欢乐谷',
          desc: '亚洲唯一飞行式过山车等你来挑战',
        },
          {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
            title: '北京欢乐谷',
            desc: '亚洲唯一飞行式过山车等你来挑战',
          },
          {
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
            title: '北京欢乐谷',
            desc: '亚洲唯一飞行式过山车等你来挑战',
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

    .item
        overflow: hidden
        display flex
        height 1.9rem

        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem

        .item-info
            flex 1
            padding .1rem
            min-width 0

            .item-title
                line-height .54rem
                font-size .32rem
                ellipse()

            .item-desc
                line-height .4rem
                color #ccc
                ellipse()

            .item-button
                line-height .44rem
                margin-top .16rem
                background #ff9300
                padding 0 .2rem
                border-radius 0.06rem
</style>
