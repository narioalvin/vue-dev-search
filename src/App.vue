<template>
  <div id="app">
    <Navbar />
    <Overview />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Navbar from './components/navbar/Navbar';
import Overview from './views/overview/Overview';

export default {
  name: 'App',
  components: { Navbar, Overview },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: 'Lato';
  src: url('./assets/font/Lato-Regular.ttf');
  src: local('Lato Regular'), local('Lato-Regular'),
    url('./assets/font/Lato-Regular.ttf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Lato';
  src: url('./assets/font/Lato-Light.ttf');
  src: local('Lato Light'), local('Lato-Light'),
    url('./assets/font/Lato-Light.ttf') format('opentype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Lato';
  src: url('./assets/font/Lato-Bold.ttf');
  src: local('Lato Bold'), local('Lato-Bold'),
    url('./assets/font/Lato-Bold.ttf') format('opentype');
  font-weight: bold;
  font-style: normal;
}

body {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f2f2f2;
}

.pr-button {
  background: #67439a;
  border: #67439a;
  color: #ffffff;
  height: 45px;
  border-radius: 25px;
  width: 100%;
  margin-top: 5px;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
}

.btn-primary {
  min-width: 140px;
  font-size: 14px;
  width: 100%;
}

.d-padding {
  padding: 15px 15px;
}

.loader {
   width:45px;
   height:45px;
   display:inline-block;
   padding:0px;
   border-radius:100%;
   border:5px solid;
   border-top-color:#502f7e;
   border-bottom-color:#d9d9d9;
   border-left-color:#502f7e;
   border-right-color:#d9d9d9;
   -webkit-animation: loader 1s ease-in-out infinite;
   animation: loader 1s ease-in-out infinite;
}
@keyframes loader {
   from {transform: rotate(0deg);}
   to {transform: rotate(360deg);}
}
@-webkit-keyframes loader {
   from {-webkit-transform: rotate(0deg);}
   to {-webkit-transform: rotate(360deg);}
}

@media (min-width: 1024px) {
  .btn-primary {
    max-width: 200px;
  }

  .d-padding {
    padding: 15px 120px;
  }
}
</style>
