<template>
  <div class="search d-padding">
    <div class="form-content">
      <font-awesome-icon class="case" :icon="['fas', 'briefcase']" />
      <b-form-input
        v-model="query.description"
        size="lg"
        placeholder="Filter by title, benefits, companies or experties"
      ></b-form-input>
    </div>
    <div class="form-content">
      <font-awesome-icon class="case" :icon="['fas', 'globe-asia']" />
      <b-form-input
        v-model="query.location"
        size="lg"
        placeholder="Filter by city, state, zip code or country"
      ></b-form-input>
    </div>
    <button class="pr-button" @click="clickSearch">Search</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SearchBar',
  data() {
    return {
      query: {
        description: '',
        location: '',
      },
    };
  },
  methods: {
    ...mapActions(['search']),
    clickSearch() {
      // const { description, location } = this.query;
      console.log(this.query)
      this.search(this.query);
    },
  },
};
</script>

<style lang="scss">
.search {
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .form-content {
    width: 100%;
    position: relative;
    margin-bottom: 10px;

    .form-control {
      font-size: 16px;
      padding-left: 35px;
      height: 45px;
      border-radius: 10px;
      border: 0;
    }

    .case {
      position: absolute;
      top: 15px;
      left: 12px;
      color: #999999;
      font-size: 15px;
    }
  }
}

@media (min-width: 769px) {
  .search button {
    margin-top: 0;
  }
}

@media (min-width: 1024px) {
  .search {
    flex-direction: row;

    .form-content {
      margin-bottom: 0;
      margin-right: 20px;
      width: 100%;
    }
  }
}
</style>
