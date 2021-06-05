<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header />
    <SubNav />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import SubNav from '@/components/SubNav.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Header,
    SubNav
  }
}
</script>
