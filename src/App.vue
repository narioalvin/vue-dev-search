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
  font-family: 'Roboto';
  src: url('./assets/font/Roboto-Regular.ttf');
  src: local('Roboto Regular'), local('Roboto-Regular'),
    url('./assets/font/Roboto-Regular.ttf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto';
  src: url('./assets/font/Roboto-Medium.ttf');
  src: local('Roboto Medium'), local('Roboto-Medium'),
    url('./assets/font/Roboto-Medium.ttf') format('opentype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto';
  src: url('./assets/font/Roboto-Bold.ttf');
  src: local('Roboto Bold'), local('Roboto-Bold'),
    url('./assets/font/Roboto-Bold.ttf') format('opentype');
  font-weight: bold;
  font-style: normal;
}

body {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.btn-primary {
  min-width: 140px;
  font-size: 14px;
  width: 100%;
}

.d-padding {
  padding: 15px 15px;
}

@media (min-width: 768px) {
  .btn-primary {
    max-width: 200px;
  }

  .d-padding {
    padding: 15px 120px;
  }
}
</style>
