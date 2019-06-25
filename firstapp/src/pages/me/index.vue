<template>
  <div>
    <div class="users-content">
      <div class="users-headline">
        <img class="users-images" :src="defaultUsers">
        <p class="users-enter"><a v-show="detailState" href="/pages/enter/main">登录/注册</a><span v-show="userState">{{nickName}}</span></p>
      </div>
      <div class="me-list-content">
        <div v-for="res in listJson" :key="res.id" @click="operationListJsonData(res.id)" class="me-list">
          <span>{{res.textName}}</span>
          <i class="icon-arrows"></i>
        </div>
        <div @click="operationListJsonData(5)" class="me-list"><span>语言设置</span><i class="icon-arrows"></i></div>
      </div>
    </div>
    <mp-toast :type="loginAssociated.type" v-model="loginAssociated.showToast" :content="loginAssociated.content" :duration="loginAssociated.duration"></mp-toast>
  </div>
</template>

<script>
import card from '@/components/card'
import mpToast from 'mpvue-weui/src/toast';

export default {
  components: {
    card,
    mpToast
  },
  data () {
    return {
      defaultUsers: require('./../../images/users.png'),
      userState:false,
      detailState:true,
      nickName:'',
      token_code:wx.getStorageSync("token_code"),
      listJson:[{
        id:1,
        textName:'我的求助'
      },{
        id:2,
        textName:'我的订单'
      },{
        id:3,
        textName:'我的资金'
      },{
        id:4,
        textName:'成为帮帮手'
      }],
      loginAssociated:{
        content:'123',//登录提示语
        showToast:false,//是否显示
        type:'error',//显示类型
        duration:1500//显示时间
      }
    }
  },
  onShow(){
    this.getUserMessage();
  },
  methods: {
    getUserMessage () {
      if(this.token_code){
        let data = {
          code: this.token_code
        }
        this.$Req.get({
          url: 'getConditionIndex',
          data: data,
        }).then(res => {
          if(res.message.length != 0){
            this.userState = true
            this.detailState = false
            this.defaultUsers = res.message[0].avatarUrl
            this.nickName = res.message[0].nickName
          }
        })
      }
    },
    operationListJsonData (id){
      if(id){
        if(this.token_code && this.token_code != ''){
          console.log('登录，跳转页面')
          switch(id) {
               case 1:
                  console.log(1111)
                  break;
               case 2:
                  console.log(2222)
                  break;
              case 3:
                  console.log(3333)
                  break;
              case 4:
                  console.log(4444)
                  break;
               default:
                  console.log(5555)
            }
        }else{
          this.loginAssociated.content = '尚未登录'
          this.loginAssociated.showToast = true
          setTimeout(function(){
            let url = '../enter/main'
            if (mpvuePlatform === 'wx') {
              mpvue.navigateTo({ url })
            }
          },1500)
        }
      }
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
        background:-webkit-linear-gradient(#20B2AA, #DC143C);
        background:-o-linear-gradient(#20B2AA, #DC143C);
        background:-moz-linear-gradient(#20B2AA, #DC143C);
        background:linear-gradient(#20B2AA, #DC143C);
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
