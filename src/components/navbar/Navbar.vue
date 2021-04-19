<template>
  <div class="main-nav">
    <div class="nav-body">
      <b-navbar class="d-padding" id="navbar" toggleable="lg" type="dark">
        <div class="nav-title-section">
          <img
            class="mr-2"
            src="../../assets/img/job-seeker.svg"
            width="40"
            alt=""
          />
          <div class="nav-text">
            <h3 @click="reload">
              DEV SEARCH
            </h3>
            <span>Find your next dream job here!</span>
          </div>
        </div>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item @click="reload" class="font-weight-bold">SHOW ALL JOBS</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <SearchBar />
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/searchbar/SearchBar';

export default {
  name: 'Navbar',
  components: { SearchBar },
  methods: {
    reload() {
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.main-nav {
  position: fixed;
  z-index: 9;
  padding: 0 15px;
  width: 100%;

  .nav-body {
    max-width: 1440px;
    margin: 0 auto;
    background: #502f7e;
    border-bottom-right-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    // max-height: 300px;

    .nav-title-section {
      // display: flex;

      .nav-text {
        h3 {
          color: #ffffff;
          font-weight: bold;
          margin: 0;
        }

        span {
          color: #ffffff;
          font-size: 14px;
        }
      }
    }

    .navbar {
      .navbar-brand,
      .nav-link {
        color: #ffffff;
      }
    }
  }
}
</style>
