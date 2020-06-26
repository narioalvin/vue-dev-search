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
    <b-button pill variant="primary" @click="$emit('search', query)">
      Search</b-button
    >
  </div>
</template>

<script>

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
  methods: {},
};
</script>

<style lang="scss">
.search {
  height: auto;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .form-content {
    width: 100%;
    position: relative;
    margin-bottom: 10px;

    .form-control {
      font-size: 12px;
      padding-left: 28px;
    }

    .case {
      position: absolute;
      top: 10px;
      left: 8px;
      color: #999999;
      font-size: 14px;
    }
  }
}

@media (min-width: 768px) {
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
