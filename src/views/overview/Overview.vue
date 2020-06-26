<template>
  <div class="overview">
    <SearchBar @search="search" />
    <div class="content-loaders d-padding" v-if="showLoader">
      <ContentLoaders />
      <ContentLoaders />
      <ContentLoaders />
      <ContentLoaders />
      <ContentLoaders />
      <ContentLoaders />
      <ContentLoaders />
      <ContentLoaders />
    </div>
    <div class="overview-content d-padding" v-else>
      <div
        class="card list-item"
        v-for="(item, index) in jobs"
        :key="index"
        v-b-toggle="item.id"
      >
        <div class="list-content">
          <div class="img-section">
            <img
              v-if="item.company_logo !== null"
              :src="item.company_logo"
              alt=""
            />

            <font-awesome-icon
              v-else
              class="case"
              :icon="['fas', 'briefcase']"
            />
          </div>
          <div class="info-section">
            <h5 class="title">{{ item.title }}</h5>
            <p class="type-title">
              {{ item.company }} - <span class="type">{{ item.type }}</span>
            </p>
            <p class="sm-text">{{ item.location }}</p>
            <p class="sm-text">{{ item.$$date }}</p>
          </div>
        </div>

        <b-collapse
          :id="item.id"
          accordion="my-accordion"
          role="tabpanel"
          class="collapse-body"
        >
          <div v-html="item.description"></div>
          <div v-html="item.how_to_apply"></div>
        </b-collapse>
      </div>
    </div>

    <div class="no-result" v-if="jobs.length < 1 && !showLoader">
      <img src="../../assets/img/search.svg" alt="" />
      <h4>No results found</h4>
    </div>
    <div class="btn-load" v-if="!showLoader && jobs.length > 49">
      <b-button pill variant="primary" @click="loadMore()"> Load More</b-button>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
import moment from 'moment';
import SearchBar from '@/components/searchbar/SearchBar';
import ContentLoaders from '@/components/content-loader/ContentLoader';

export default {
  name: 'Overview',
  components: { SearchBar, ContentLoaders },
  data() {
    return {
      jobs: [],
      showLoader: true,
      page: 1,
      isSearch: false,
      query: null,
    };
  },
  created() {
    this.getJobs();
  },
  mounted() {},
  methods: {
    getJobs() {
      this.showLoader = true;
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${this.page}`
        )
        .then((response) => {
          const jobs = response.data.map((job) => {
            job['$$date'] = moment(new Date(job.created_at)).fromNow();
            return job;
          });
          this.jobs = jobs;
          this.showLoader = false;
          console.log(this.jobs);
        })
        .catch(() => {
          this.showLoader = false;
        });
    },
    search(query) {
      this.showLoader = true;
      const { description, location } = query || this.query;
      this.isSearch = true;
      this.query = query;
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?&description=${description}&location=${location}&page=${this.page}`
        )
        .then((response) => {
          const jobs = response.data.map((job) => {
            job['$$date'] = moment(new Date(job.created_at)).fromNow();
            return job;
          });
          this.jobs = jobs;
          this.showLoader = false;
        })
        .catch(() => {
          this.showLoader = false;
        });
    },
    loadMore() {
      this.showLoader = true;
      this.page += 1;
      this.isSearch ? this.search(this.query) : this.getJobs();
    },
  },
};
</script>

<style lang="scss" scoped>
.overview {
  display: flex;
  justify-content: center;
  flex-direction: column;

  .overview-content {
    padding: 5px;

    .card {
      -webkit-box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.21);
      -moz-box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.21);
      box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.21);
      height: 120px;
      margin-bottom: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;
      height: auto;

      &:hover {
        background: #f2f2f2;
      }

      .list-content {
        display: flex;

        .img-section {
          width: 150px;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            max-width: 60px;
          }

          .case {
            font-size: 30px;
          }
        }

        .info-section {
          width: 100%;
          height: 120px;
          padding: 10px;

          .type {
            color: #e83e8c;
          }

          .type-title {
            font-size: 12px;
          }

          h5 {
            margin-bottom: 4px;
            font-weight: 600;
            color: #5d4da8;
            font-size: 13px;
          }

          p,
          h1 {
            margin-bottom: 0;
          }

          .sm-text {
            color: #a6a6a6;
            font-size: 11px;
          }
        }
      }

      .collapse-body {
        div {
          padding: 15px 40px;
          font-size: 14px;
        }
      }
    }
  }

  .no-result {
    display: flex;
    justify-content: center;
    height: 75vh;
    flex-direction: column;
    align-items: center;

    img {
      width: 80%;
      max-width: 435px;
      margin-bottom: 20px;
    }
  }

  .btn-load {
    padding: 0 5px 15px 5px;
    text-align: center;
  }
}

@media (min-width: 768px) {
  .overview {
    .overview-content {
      padding: 15px 120px;

      .card {
        .list-content {
          .img-section {
            img {
              max-width: 90px;
            }
          }

          .info-section {
            .type-title {
              font-size: 16px;
            }

            h5 {
              font-size: 18px;
            }

            .sm-text {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>
