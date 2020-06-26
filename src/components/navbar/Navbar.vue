<template>
  <b-navbar class="d-padding" id="navbar" toggleable="lg" type="dark">
    <b-navbar-brand href="#" @click="reload">Dev Search</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="reload">All Jobs</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    reload() {
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background: #5d4da8;

  .navbar-brand,
  .nav-link {
    color: #ffffff;
  }
}
</style>
