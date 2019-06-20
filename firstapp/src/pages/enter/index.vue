<template>
  <div>
    <div class="user-enter">
      <button class="user-btn" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">微信授权-帮帮乐</button>
      <div class="user-btn">手机号授权-帮帮乐</div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import Vue from 'vue'
export default {
  components: {
    card
  },
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {
    bindGetUserInfo (e) {
      const that=this;
      if (e.mp.detail.rawData){
          //用户按了允许授权按钮
          that.s1=true;
          that.setting();
          console.log('用户按了允许授权按钮')
      } else {
          //用户按了拒绝按钮
          console.log('用户按了拒绝按钮')
      }
    },
    setting () {
        const that = this;
        wx.login({
            //用户登录
            success (res) {
                if (res.code) {
                    // 发起网络请求
                    let code = res.code;
                    wx.setStorageSync("token_code",code);
                    wx.getSetting({
                       //查看用户是否授权
                        success (res) {
                            if (res.authSetting['scope.userInfo']) {
                               //用户已经授权
                                wx.getUserInfo({
                                  //获取用户信息
                                    success: (res) => {
                                      Vue.prototype.userInfo = res.userInfo
                                      let data = {
                                        nickName: res.userInfo.nickName,
                                        avatarUrl: res.userInfo.avatarUrl
                                      }
                                      that.$Req.post({
                                        url: 'addUserInfo',
                                        data: data,
                                      }).then(res => {

                                      })
                                      const url = '../me/main'
                                      if (mpvuePlatform === 'wx') {
                                        mpvue.switchTab({ url })
                                      } else {
                                        mpvue.navigateTo({ url })
                                      }
                                    },
                                })
                            }else{

                            }
                        }
                    })
                }
            }
        })
    }
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
@import '../../css/style.less';
.user-enter{
  padding: 0.32rem;
  .user-btn{
    width:90%;
    margin:0 auto;
    height:0.8rem;
    line-height:0.8rem;
    background:-webkit-linear-gradient(#20B2AA, #DC143C);
    background:-o-linear-gradient(#20B2AA, #DC143C);
    background:-moz-linear-gradient(#20B2AA, #DC143C);
    background:linear-gradient(#20B2AA, #DC143C);
    border-radius:0.5rem;
    text-align:center;
    color:#ffffff;
    font-size:0.28rem;
    margin-bottom: 0.2rem;
  }
}
</style>
