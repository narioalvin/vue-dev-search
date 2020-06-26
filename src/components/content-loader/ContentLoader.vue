<template>
  <ContentLoader
    height="60"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="4" y="8" rx="3" ry="3" width="2" height="50" />
    <rect x="5" y="8" rx="3" ry="3" width="390" height="2" />
    <rect x="5" y="57" rx="3" ry="3" width="390" height="2" />
    <rect x="393" y="8" rx="3" ry="3" width="2" height="50" />

    <rect x="70" y="13" rx="3" ry="3" width="300" height="7" />
    <rect x="70" y="25" rx="3" ry="3" width="250" height="7" />
    <rect x="70" y="35" rx="3" ry="3" width="200" height="6" />
    <rect x="70" y="45" rx="3" ry="3" width="150" height="6" />
    <circle cx="35" cy="33" r="22" />
  </ContentLoader>
</template>

<script>
import { ContentLoader } from 'vue-content-loader';

export default {
  name: 'ContentLoaders',
  components: { ContentLoader },
};
</script>

<style></style>
