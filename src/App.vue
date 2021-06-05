<template>
  <div id="nav">
    <router-view/>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

input{  
  background:none;  
  outline:none;  
  border:none;
}

ol, ul, li {
    list-style: none;
    list-style-type: none;
}

a{text-decoration:none}

.v-flex{
  display: flex;
}

.justify-between {
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.flex-row {
    -ms-flex-direction: row;
    flex-direction: row;
}

.flex {
    display: -ms-flexbox !important;
    display: flex !important;
}

.align-center {
  align-items: center;
}


.select-dropdown.slide-up-enter.slide-up-enter-active.select-dropdown-placement-bottomLeft,
.select-dropdown.slide-up-appear.slide-up-appear-active.select-dropdown-placement-bottomLeft {
  -webkit-animation-name: antSlideUpIn;
          animation-name: antSlideUpIn;
}
.select-dropdown.slide-up-enter.slide-up-enter-active.select-dropdown-placement-topLeft,
.select-dropdown.slide-up-appear.slide-up-appear-active.select-dropdown-placement-topLeft {
  -webkit-animation-name: antSlideDownIn;
          animation-name: antSlideDownIn;
}
.select-dropdown.slide-up-leave.slide-up-leave-active.select-dropdown-placement-bottomLeft {
  -webkit-animation-name: antSlideUpOut;
          animation-name: antSlideUpOut;
}
.select-dropdown.slide-up-leave.slide-up-leave-active.select-dropdown-placement-topLeft {
  -webkit-animation-name: antSlideDownOut;
          animation-name: antSlideDownOut;
}


@-webkit-keyframes antSlideUpIn {
  0% {
    transform: scaleY(0.8);
    transform-origin: 0% 0%;
    opacity: 0;
  }
  100% {
    transform: scaleY(1);
    transform-origin: 0% 0%;
    opacity: 1;
  }
}
@keyframes antSlideUpIn {
  0% {
    transform: scaleY(0.8);
    transform-origin: 0% 0%;
    opacity: 0;
  }
  100% {
    transform: scaleY(1);
    transform-origin: 0% 0%;
    opacity: 1;
  }
}
@-webkit-keyframes antSlideUpOut {
  0% {
    transform: scaleY(1);
    transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    transform: scaleY(0.8);
    transform-origin: 0% 0%;
    opacity: 0;
  }
}
@keyframes antSlideUpOut {
  0% {
    transform: scaleY(1);
    transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    transform: scaleY(0.8);
    transform-origin: 0% 0%;
    opacity: 0;
  }
}
@-webkit-keyframes antSlideDownIn {
  0% {
    transform: scaleY(0.8);
    transform-origin: 100% 100%;
    opacity: 0;
  }
  100% {
    transform: scaleY(1);
    transform-origin: 100% 100%;
    opacity: 1;
  }
}
@keyframes antSlideDownIn {
  0% {
    transform: scaleY(0.8);
    transform-origin: 100% 100%;
    opacity: 0;
  }
  100% {
    transform: scaleY(1);
    transform-origin: 100% 100%;
    opacity: 1;
  }
}
@-webkit-keyframes antSlideDownOut {
  0% {
    transform: scaleY(1);
    transform-origin: 100% 100%;
    opacity: 1;
  }
  100% {
    transform: scaleY(0.8);
    transform-origin: 100% 100%;
    opacity: 0;
  }
}
@keyframes antSlideDownOut {
  0% {
    transform: scaleY(1);
    transform-origin: 100% 100%;
    opacity: 1;
  }
  100% {
    transform: scaleY(0.8);
    transform-origin: 100% 100%;
    opacity: 0;
  }
}
</style>
