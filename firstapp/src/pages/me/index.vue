<template>
  <div>
    <div class="users-content">
      <div class="users-headline">
        <img class="users-images" :src="defaultUsers">
        <p class="users-enter"><a href="/pages/enter/main">登录/注册</a></p>
      </div>
      <div class="me-list-content">
        <div class="me-list"><span>我的求助</span><i class="icon-arrows"></i></div>
        <div class="me-list"><span>我的订单</span><i class="icon-arrows"></i></div>
        <div class="me-list"><span>我的资金</span><i class="icon-arrows"></i></div>
        <div class="me-list"><span>成为帮帮手</span><i class="icon-arrows"></i></div>
        <div class="me-list"><span>语言设置</span><i class="icon-arrows"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  components: {
    card
  },
  data () {
    return {
      defaultUsers: require('./../../images/users.png')
    }
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
@import '../../css/style.less';
  .users-content{
    padding: 0.32rem;
    .users-headline{
      width: 100%;
      height: 3rem;
      background-color: #ffffff;
      border-radius: 0.1rem;
      box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.3);
      text-align: center;
      .users-images{
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 100%;
        margin-top: 0.3rem;
        box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.3);
      }
      .users-enter{
        color: #ffffff;
        text-align: center;
        width:45%;
        margin:0 auto;
        background-color:#FF6347;
        border-radius:0.35rem;
        height:0.7rem;
        line-height:0.7rem;
        font-size: 0.28rem;
        margin-top: 0.2rem
      }
    }
    .me-list-content{
      padding-top: 0.5rem;
      .me-list{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 1rem;
        line-height: 1rem;
        span{
          color:#20B2AA;
          text-indent: 0.2rem;
          font-size: 0.28rem
        }
      }
    }
  }
</style>
