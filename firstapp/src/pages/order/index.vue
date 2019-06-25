<template>
  <div>
    <div class="user-order-wrap">
      <ul class="user-order-content">
        <li class="orderLi">
          <div class="orderLi-content">
            <span class="order-icon icon-f">发</span>
            <span class="order-name">小武爷</span>
          </div>
          <div class="message">
            <div class="order-message order-style">需求: 我需要一瓶水（红牛）</div>
            <div class="order-address order-style">地址: 附近1公里处</div>
            <div class="order-style">要求: <span class="order-time">1分钟到达目的地</span></div>
          </div>
          <div class="operation">
            <p class="order-accept"><i class="icon-maps"></i></p>
            <p class="order-detail" @click="viewInformation()">订单详情 <i class="icon-speed order-icon-speed"></i></p>
          </div>
        </li>
        <li class="orderLi">
          <div class="orderLi-content">
            <span class="order-icon icon-j">接</span>
            <span class="order-name">小武爷</span>
          </div>
          <div class="message">
            <div class="order-message order-style">需求: 我需要一瓶水（红牛）</div>
            <div class="order-address order-style">地址: 附近1公里处</div>
            <div class="order-style">要求: <span class="order-time">1分钟到达目的地</span></div>
          </div>
          <div class="operation">
            <p class="order-accept"><i class="icon-maps"></i></p>
            <p class="order-detail" @click="viewInformation()">订单详情 <i class="icon-speed order-icon-speed"></i></p>
          </div>
        </li>
      </ul>
    </div>
    <mp-modal ref="mpModal" :title="modal.title" :content="modal.content" :showCancel="modal.showCancel" @confirm="confirm" @cancel="cancel"></mp-modal>
  </div>
</template>

<script>
import card from '@/components/card'
import mpModal from 'mpvue-weui/src/modal';

export default {
  components: {
    card,
    mpModal
  },

  data () {
    return {
      modal:{
        title:'提示',
        content:'请仔细查看订单详情',
        showCancel:true
      }
    }
  },
  methods: {
    acceptOrder(id){
      this.$refs.mpModal.show();
    },
    cancel(){
      console.log('close')
    },
    confirm(){
      console.log('open')
      // this.$refs.mpModal.show();
    },
    viewInformation(){
      let url = '../orderDetail/main'
      if (mpvuePlatform === 'wx') {
        mpvue.navigateTo({ url })
      }
    }
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
@import '../../css/style.less';
  .user-order-wrap{
    padding: 0.32rem;
    .user-order-content{
      width: 100%;
      .orderLi{
        position: relative;
        width: 100%;
        height: 3rem;
        background: #ffffff;
        box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.3);
        border-radius: 0.1rem;
        margin-bottom: 0.2rem;
        .orderLi-content{
          padding: 0.2rem;
          .title{
            font-size: 0.28rem;
            .need{
              color: red;
              font-size: 0.3rem
            }
          }
          .order-icon{
            display: inline-block;
            width: 1rem;
            height: 1rem;
            border-radius: 100%;
            font-size: 0.3rem;
            text-align: center;
            line-height: 1rem;
            color: #ffffff
          }
          .icon-f{
            background:-webkit-linear-gradient(#FF0000, #0000FF);
            background:-o-linear-gradient(#FF0000, #0000FF);
            background:-moz-linear-gradient(#FF0000, #0000FF);
            background:linear-gradient(#FF0000, #0000FF);
          }
          .icon-j{
            background:-webkit-linear-gradient(#FF0000, #006400);
            background:-o-linear-gradient(#FF0000, #006400);
            background:-moz-linear-gradient(#FF0000, #006400);
            background:linear-gradient(#FF0000, #006400)
          }
          .order-name{
            color:#000000;
            font-size: 0.28rem;
            padding-left: 0.2rem
          }
        }
        .message{
          width: 60%;
          padding: 0 0.32rem;
          display: inline-block;
          .order-style{
            font-size: 0.28rem
          }
          .order-message{
            margin-top: 0.1rem
          }
          .order-time{
            color: red
          }
        }
        .operation{
          display: inline-block;
          width: 30%;
          font-size: 0.3rem;
          .order-detail{
            text-indent: 0.3rem;
            color: #dfdfdf;
            .order-icon-speed{
              float:right;
              margin-top:0.1rem;
              margin-right:0.2rem;
            }
          }
        }
        .order-accept{
          position:absolute;
          top:0.2rem;
          right:0.2rem;
          padding:0.1rem 0.28rem;
          border-radius:0.08rem;
          color: #ffffff
        }
      }
    }
  }
</style>
