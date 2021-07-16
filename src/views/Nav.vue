<template>
  <div class="nav-container">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header />

    <div class="banner">
      <div class="banner-title">奇趣实用网络资源导航，助你学习、工作和生活</div>
      <div class="banner-sub-title">分享一些不错的资源</div>
    </div>
    <Search />

    <!-- main navigation -->
    <!-- <MainNav /> -->

    <!-- sub navigation -->
    <!-- <SubNav /> -->

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header2.vue'
import Search from '@/components/Search.vue'
import SubNav from '@/components/SubNav.vue'
import MainNav from '@/components/MainNav.vue'

export default {
  name: 'Nav',
  components: {
    HelloWorld,
    Header,
    Search,
    SubNav,
    MainNav
  }
}
</script>
<style lang="less">
  .nav-container{
    height: 100vh;
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      content:'';
      height: 220px;
      z-index: -1;
      border-radius: 0 0 20% 20%;
      background:linear-gradient(0deg,#1A6EFD,#3A81FA) 0% 100% no-repeat;
    }
  }

  .banner {
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 30px;
    flex-direction: column;
  }
  .banner .banner-sub-title {
    font-size: 20px;
  }
</style>
