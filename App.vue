<template>
  <v-app style="background-color: #000000;  overflow:hidden">
    <!-- 左侧菜单 -->
    <v-navigation-drawer app fixed width="200px" v-model="showMenu" style="z-index: 99999999999999;background:#1F2331 ">
      <div style="background-color: rgba(0,0,0,0.87); padding: 8px 40px">
        <img src="@/assets/img/saiche.png" class="menu-logo" />
      </div>
      <img src="@/assets/img/saiche.png"  style="margin-top: 2rem;margin-left: 4rem; width:18.5rem;height: 8.94rem " />
      <v-list style="margin-top: 15px; ">
        <v-list-item style=" font-family:YouSheBiaoTiHei;   padding: 0 30px" color="#2c3e50" v-for="(menu, i) in menus" :key="i" @click="jump(menu.url)">
          <v-list-item-icon>
            <v-icon v-text="'$vuetify.icons.'+menu.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title style="color: #FFFFFF;" v-text="$t('menu.'+menu.value)"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="flex-row" style="margin-left:3rem;margin-top:6rem"><div @click="$router.push('/wp')" style="width: 7.5rem;
height: 7.5rem;

align-items: center;
background: linear-gradient(0deg, #9F55F5, #762FEC);
border-radius: 1rem;">
<svg t="1635661999188" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2500" data-spm-anchor-id="a313x.7781069.0.i1" style="width:2rem;height:2.3rem;margin-top:1rem"><path d="M273.7 98.8v619.9c0 4.5-3.6 8.1-8.1 8.1h-82.9v-628h91z" fill="#ffffff" p-id="2501" data-spm-anchor-id="a313x.7781069.0.i5" class="selected"></path><path d="M185.8 823.4h-36.1V140.9c0-42.3 34.4-76.7 76.7-76.7h571.2c42.3 0 76.7 34.4 76.7 76.7V723h-36.1V140.9c0-22.4-18.2-40.6-40.6-40.6H226.4c-22.4 0-40.6 18.2-40.6 40.6v682.5z" fill="#ffffff" p-id="2502" data-spm-anchor-id="a313x.7781069.0.i3" class="selected"></path><path d="M873.5 956.8H284.6c-74.4 0-134.9-60.5-134.9-134.9S210.2 687 284.6 687h559.2v36H284.6c-54.5 0-98.8 44.3-98.8 98.8s44.3 98.8 98.8 98.8h588.9v36.2z" fill="#ffffff" p-id="2503" data-spm-anchor-id="a313x.7781069.0.i2" class="selected"></path><path d="M246.7 810.5h626.9v24.1H246.7zM480.4 211.5H775v24.1H480.4zM480.4 318.3H775v24.1H480.4z" fill="#ffffff" p-id="2504" data-spm-anchor-id="a313x.7781069.0.i4" class="selected"></path></svg>
<div style="font-family:YouSheBiaoTiHei;font-size:1rem;margin-top:1rem;color:#fff;text-align: center;">
  {{$t('menu.whitePaper')}}</div>
</div>
      <div @click="jump('https://www.certik.org/projects/t1-racing')" style="width: 7.5rem;
height: 7.5rem;

align-items: center;
margin-left:2rem;
background: linear-gradient(0deg, #F1B85E, #E19418);
border-radius: 1rem;">
<svg t="1635662268189" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6569" data-spm-anchor-id="a313x.7781069.0.i8" style="width:2rem;height:2.3rem;margin-top:1rem"><path d="M809.425482 47.12632 419.093519 47.12632c-16.941857 0-32.484855 11.994172-42.523489 22.045085L208.539059 237.196237c-13.765515 13.757329-20.753673 27.635407-20.753673 41.238216l0 607.183849c0 31.885198 25.935696 57.827033 57.828057 57.827033l549.356816 0c28.7723 0 72.285327-23.061228 72.285327-57.827033L867.255585 104.954377C867.254561 73.069179 841.317843 47.12632 809.425482 47.12632zM390.180002 96.447633l0 124.159788c0 16.21531-12.706393 28.913517-28.913517 28.913517L237.099535 249.520937 390.180002 96.447633zM838.340021 885.618303c0 13.95585-25.454742 28.913517-43.370787 28.913517L245.612419 914.531819c-16.207124 0-28.913517-12.69923-28.913517-28.913517L216.698902 278.434453l144.56656 0c31.892361 0 57.827033-25.941835 57.827033-57.827033L419.092495 76.047 809.425482 76.047c16.20917 0 28.91454 12.684904 28.91454 28.907377L838.340021 885.618303 838.340021 885.618303zM722.685955 235.06469 520.291338 235.06469c-7.992021 0-14.45727 6.472412-14.45727 14.456247 0 7.983835 6.465249 14.45727 14.45727 14.45727l202.393593 0c7.992021 0 14.45727-6.473435 14.45727-14.45727C737.142202 241.537102 730.676953 235.06469 722.685955 235.06469zM722.685955 365.176027 332.353992 365.176027c-7.993045 0-14.45727 6.472412-14.45727 14.449084 0 7.990998 6.464225 14.464433 14.45727 14.464433l390.331963 0c7.992021 0 14.45727-6.473435 14.45727-14.464433C737.142202 371.648438 730.676953 365.176027 722.685955 365.176027zM722.685955 509.742587 332.353992 509.742587c-7.993045 0-14.45727 6.473435-14.45727 14.45727 0 7.976672 6.464225 14.45727 14.45727 14.45727l390.331963 0c7.992021 0 14.45727-6.480598 14.45727-14.45727C737.142202 516.216022 730.676953 509.742587 722.685955 509.742587zM722.685955 639.853923 332.353992 639.853923c-7.993045 0-14.45727 6.473435-14.45727 14.45727 0 7.976672 6.464225 14.449084 14.45727 14.449084l390.331963 0c7.992021 0 14.45727-6.472412 14.45727-14.449084C737.142202 646.327358 730.676953 639.853923 722.685955 639.853923zM717.617519 784.421506 330.433246 784.421506c-7.992021 0-14.456247 6.472412-14.456247 14.45727s6.464225 14.464433 14.456247 14.464433l387.185296 0c7.990998 0 14.456247-6.479575 14.456247-14.464433C732.073766 790.893918 725.608517 784.421506 717.617519 784.421506z" p-id="6570" data-spm-anchor-id="a313x.7781069.0.i9" class="selected" fill="#ffffff"></path></svg>
<div style="font-family:YouSheBiaoTiHei;margin-top:1rem;color:#fff;text-align: center;">{{$t('menu.report')}}</div>
</div>
</div>

      <div style="height: 1rem;margin-bottom: 13rem;">&nbsp;</div>
      <div style="top: 88rem;
    position: absolute;
    left:0.5rem;font-size: 1.25rem;
font-family: PingFang SC;
font-weight: 300;
color: #7a7b7c;
line-height: 2.94rem;">T1 Based On Binance Smart Chain</div>
      <div style=" bottom: 40px; text-align: center; width: 100%; color: #7a7b7c;" class="d-flex flex-row justify-center">
        <div style="margin-right: 2rem;" @click="jump('https://mobile.twitter.com/T1_Racing')"><v-icon v-text="'$vuetify.icons.twitter'"></v-icon></div>
        <div style="margin-right: 2rem;" @click="jump('https://t.me/T1_Racing')"><v-icon v-text="'$vuetify.icons.telegram'"></v-icon></div>
        <div @click="jump('https://medium.com/@T1_Racing')"><v-icon v-text="'$vuetify.icons.medium'"></v-icon></div>
      </div>
      <div style="bottom: 10px; text-align: center; width: 100%; color: #7a7b7c;">
        T1 RACING @ 2021
      </div>
    </v-navigation-drawer>
    <!-- 顶部导航 -->
    <v-app-bar app fixed dark color="#313846 " style="z-index: 99999999999;">
      <v-app-bar-nav-icon @click="changeShowMenu()"></v-app-bar-nav-icon>
      <div style="width:100%;display: flex;flex-direction: row;align-items: center;justify-content: space-between;margin-right: 14rem;">
        <v-toolbar-title class="header-text" style="margin-left: 1rem;
">{{$t('app.title')}}</v-toolbar-title>
        <!--        <v-spacer></v-spacer>-->
        <div style="display: flex;flex-direction: row;align-items: center;margin-left:2rem">
          <v-btn @click="jump('https://exchange.babyswap.finance/#/swap?outputCurrency=0xffea0750401E528A73833911E375bE089Bb54Ed3')" style="width: 7.14rem;height: 3.64rem;background-color: #fb5c2b;border-radius: 1rem;font-size: 1.5rem;font-weight: 600;margin-left: 13rem;
">{{$t('app.buy')}}</v-btn>
           <v-menu right bottom  offset-y >
        <template v-slot:activator="{ on, attrs }" >
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>$vuetify.icons.lang</v-icon>
          </v-btn>
        </template>
        <v-list dark >
          <v-list-item style="font-family: YouSheBiaoTiHei;" @click="changeLang('en')">
            <v-list-item-title>English</v-list-item-title>
          </v-list-item>
          <v-list-item style="font-family: YouSheBiaoTiHei;" @click="changeLang('zh')">
            <v-list-item-title>简体中文</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
        </div>

      </div>
    </v-app-bar>
    <v-main style="background-color: transparent; overflow-x: hidden;">
      <router-view></router-view>
    </v-main>

<!--     背景泡泡-->
<!--     <div class="bg-bubbles">-->
<!--      <ul>-->
<!--        <li></li>-->
<!--        <li></li>-->
<!--        <li></li>-->
<!--        <li></li>-->
<!--        <li></li>-->
<!--        <li></li>-->
<!--        <li></li>-->
<!--        <li></li>-->
<!--        <li></li>-->
<!--        <li></li>-->
<!--      </ul>-->
<!--    </div>-->
<!-- $store.state.app.await -->
    <v-overlay absolute :opacity="0.8" :value="$store.state.app.await" class="awaiting">
      <Texiao/>
    </v-overlay>
    
  </v-app>
  
</template>

<script>
  import common from '@/utils/mixinsCommon'
  import Texiao from '@/components/texiao'
  // //引入Message
  // import Message from "./components/message";

  export default {
    name: 'App',
    components:{
        Texiao
    },
    mixins: [common],
    data: () => ({
      showMenu: false,
      menus: [
        {icon: 'home', label: '首页', value: 'home', url: '/'},
        {icon: 't1nft', label: 't1nft', value: 'T1', url: '/luck'},
        // {icon: 'cool', label: 'NFT仓库', value: 'cool', url: '/myhouse'},  
        //  {icon: 'ido', label: 'IDO', value: 'IDO', url: '/ido'},
        
        {icon: 'pledge', label: '质押挖矿', value: 'pledge', url: '/pledge'},
        // {icon: 'pledgeT1', label: '质押挖矿', value: 'pledgeT1', url: '/pledgeT1'},
        // {icon: 'pledgeBaby', label: '质押挖矿', value: 'pledgeBaby', url: '/pledgeBaby'},
     {icon: 'my', label: '我的', value: 'my', url: '/my'},
     {icon: 'suocang', label: '锁仓', value: 'suocang', url: '/shangsuo'},
        {icon: 'paycar', label: 'T1游戏', value: 'games', url: '/paycar'},
        /*{icon: 'whitePaper', label: '白皮书', value: 'whitePaper', url: '/wp'},*/
        // {icon: 'contract', label: '合约', value: 'contract', url: 'https://bscscan.com/address/0x592B3eD9a3EFdc6A5829D65BF2772f786935f6aa'}
      ]
    }),
    watch: {
      showMenu(newVal) {
        this.$store.commit('SET_SHOW_MENU', newVal ? '1' : '0')
      }
    },
    mounted: function() {
      let self = this
      self.showMenu = localStorage.getItem("showMenu") !== "0"
      self.$metaMask.init().then(res => {
        console.log(res)
        // 初始化web3
        let web3 = self.$metaMask.getWeb3();
        // 遍历合约对象
        self.$metaMask.getContract(web3, self.$abi);

        self.initData();

    
      })
    },
    methods: {
      initData() {
        let self = this;
        self.getUser()
        self.$store.dispatch('balanceOf', {contract: 'csc', symbol: 'CSC'}).then(() => {
        })
      },
      changeLang(lang) {
        this.$store.commit("SET_LANG", lang);
        this.$i18n.locale = lang;
      },
      
      changeShowMenu() {
        console.log(1);
        this.showMenu = !this.showMenu
      },
      jump(url) {
        console.log(url)
        if (url.indexOf('http://') > -1 || url.indexOf('https://') > -1) {
          this.openWeb(url)
        } else {
          // this.jumpPath(url)
          this.$router.push({path:url})
        }
      },
      //查询用户信息 ok
      getUser() {
        let self = this;
          self.$store.state.wallet.contract.buycar.methods
            .getUser(
              (self.$store.state.wallet.account),
            )
            .call()
            .then((res) => {
              console.log("getUser", res);
            })
            .catch((err) => {
              console.log("getUsererrr", err);
            });
      },
    }
  };
</script>
<style>
::v-deep.v-menu__content{
  margin-left: 1rem;
}
  @font-face {
    font-family: 'KanitBold';
    src: url('./assets/font/Kanit-Bold.ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Kanit';
    src: url('./assets/font/Kanit.ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'nKKU';
    src: url('./assets/font/nKKU.woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'PostinoStd';
    src: url('./assets/font/PostinoStd.otf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'PingFang SC';
    src: url('./assets/font/PingFang-SC-Light-2.otf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Arial';
    src: url('./assets/font/Arial.ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'YouSheBiaoTiHei';
    src: url('./assets/font/YouSheBiaoTiHei-2.ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Holiday-2';
    src: url('./assets/font/Holiday-2.ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'parahyangan-space-1';
    src: url('./assets/font/parahyangan-space-1.ttf');
    font-weight: normal;
    font-style: normal;
  }
  #app {
    font-family: Arial, Verdana, nKKU, Kanit, Avenir, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .swiper-wrapper{
    flex-direction: row;
  }

   .bg-bubbles {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .bg-bubbles li {
    position: absolute;
    z-index: 1;
    bottom: -300px;
    width: 40px;
    height: 40px;
    background-color: rgba(80, 0, 255, 0.3);
    list-style: none;
    animation: square 15s infinite;
    transition-timing-function: linear;
  }
  .bg-bubbles li:nth-child(1) {
    z-index: 1;
    left: 10%;
  }
  .bg-bubbles li:nth-child(2) {
    z-index: 1;
    left: 20%;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    animation-delay: 2s;
    animation-duration: 7s;
  }
  .bg-bubbles li:nth-child(3) {
    z-index: 1;
    left: 25%;
    width: 30px;
    height: 30px;
    animation-delay: 4s;
  }
  .bg-bubbles li:nth-child(4) {
    z-index: 1;
    left: 40%;
    width: 25px;
    height: 25px;
    border-radius: 25px;
    animation-duration: 8s;
    background-color: rgba(80, 0, 255, 0.3);
  }
  .bg-bubbles li:nth-child(5) {
    z-index: 1;
    left: 70%;
  }
  .bg-bubbles li:nth-child(6) {
    z-index: 1;
    left: 80%;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    animation-delay: 3s;
    background-color: rgba(80, 0, 255, 0.3);
  }
  .bg-bubbles li:nth-child(7) {
    z-index: 1;
    left: 32%;
    width: 50px;
    height: 50px;
    animation-delay: 2s;
  }
  .bg-bubbles li:nth-child(8) {
    z-index: 1;
    left: 55%;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    animation-delay: 4.5s;
    animation-duration: 10s;
  }
  .bg-bubbles li:nth-child(9) {
    z-index: 1;
    left: 35%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 12s;
    background-color: rgba(80, 0, 255, 0.3);
  }
  .bg-bubbles li:nth-child(10) {
    z-index: 1;
    left: 85%;
    width: 60px;
    height: 60px;
    animation-delay: 5s;
  }
  @keyframes square {
    0% {
      z-index: 1;
      opacity: 0.5;
      transform: translateY(0px) rotate(45deg);
    }
    25% {
      opacity: 0.75;
      transform: translateY(-400px) rotate(90deg);
    }
    50% {
      opacity: 1;
      transform: translateY(-600px) rotate(135deg);
    }
    100% {
      z-index: 1;
      opacity: 0;
      transform: translateY(-1000px) rotate(180deg);
    }
  }

  .container {
    padding: 0 !important;
  }
  .v-list {
    padding: 0 !important;
  }
  .v-list-item {
    flex-direction: row !important;
  }
  .v-list-item__content {
    flex: none !important;
  }
  .v-list-item__icon:first-child {
    margin-right: 20px !important;
  }
  .v-list-item__title {
    font-size: 1.63rem !important;
  }
  .v-toolbar__title {
    font-size: 2rem !important;
    padding-left: 0 !important;
  }
  .v-toolbar__content {
    flex-direction: row;
  }
  .v-expansion-panels {
    flex-direction: row;
  }
  .v-expansion-panel {
    margin-top: 10px;
    border-radius: 5px;
  }
  .v-overlay {
    z-index: 19 !important;
  }
  .v-expansion-panel-header {
    font-size: 1.8rem !important;
    line-height: 1.2 !important;
  }
  .v-expansion-panel--active > .v-expansion-panel-header {
    color: #039FFF;
    box-shadow: 0 1px 5px #d7d7d7;
  }
  .v-expansion-panel-content__wrap {
    padding: 16px 24px 16px !important;
    font-size: 1.6rem !important;
  }
  .v-main__wrap {
    flex: unset;
    min-height: 120vh;
  }
  .v-card__actions {
    flex-direction: row;
  }
  .v-input__control, .v-input__slot, .v-text-field__slot {
    flex-direction: row;
  }
  .awaiting {
    z-index: 99999 !important;
    position: fixed;
    top: 0;
    height: 100vh;
    overflow: hidden;
  }
  @media screen and (min-width: 960px) {
    .menu-logo {
      width: 18.5rem;
      height: 8.94rem;
    }
  }

  @media screen and (max-width: 960px) {
    .menu-logo {
      width: 80px;
    }

    .v-main {
      width: 100vw;
    }
  }

  div {
    position: relative;
    display: flex;
    flex-direction: column;
  }
.v-overlay__content{
  width: 100%;
  height: 100%;
}
  .header-text {

    font-family: YouSheBiaoTiHei;
  flex: 1;
  text-align: center;
  margin-left: 4rem;
  }
 .van-hairline--top-bottom{
  
}
</style>
