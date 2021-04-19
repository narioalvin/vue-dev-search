<template>
  <div class="overview">
    <div class="content-loaders d-padding" v-if="loading">
      <div class="loader"></div>
    </div>
    <div class="overview-content d-padding" v-else>
      <div
        class="card list-item"
        v-for="(item, index) in jobs"
        :key="index"
        v-b-toggle="item.id"
        @click="itemClick(index)"
      >
        <div class="accordion">
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
              <p class="sm-text">
                <span>
                  <div>
                    <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
                  </div>
                </span>
                {{ item.location }}
              </p>
              <p class="sm-text">
                <span>
                  <div>
                    <font-awesome-icon :icon="['fas', 'clock']" /></div></span
                >{{ item.$$date }}
              </p>
            </div>
          </div>

          <div class="arrow">
            <font-awesome-icon
              :class="{ 'active-arrow': item.$$open }"
              :icon="['fas', 'angle-down']"
            />
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

    <div class="no-result" v-if="jobs.length < 1 && !loading">
      <img src="../../assets/img/search.svg" alt="" />
      <h4>No results found</h4>
    </div>
    <div
      class="btn-load"
      v-if="!loading && jobs.length > 49 && showLoadMoreBtn"
    >
      <button class="pr-button" @click="loadMore()">
        Load more
        <b-spinner
          variant="light"
          v-if="loadingMore"
          class="load-more-spinner"
        ></b-spinner>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Overview',
  computed: mapGetters(['jobs', 'loading', 'showLoadMoreBtn']),
  data() {
    return {
      isSearch: false,
      query: null,
      loadingMore: false,
    };
  },
  created() {
    this.getJobs();
  },
  mounted() {},
  methods: {
    ...mapActions(['getAll', 'getMore', 'activeState']),
    getJobs() {
      this.getAll();
    },
    loadMore() {
      this.loadingMore = true;
      this.getMore().then(() => {
        this.loadingMore = false;
      });
    },
    itemClick(index) {
      this.activeState(index);
    },
  },
};
</script>

<style lang="scss" scoped>
.overview {
  .content-loaders {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .overview-content {
    padding: 5px 15px;
    padding-top: 330px;

    .card {
      box-shadow: 0px 3px 10px 0 rgba(13, 51, 32, 0.2);
      height: 120px;
      width: 100%;
      display: flex;
      flex-direction: column;
      height: auto;
      max-width: 1440px;
      margin: 0 auto;
      margin-bottom: 15px;
      border: 0;

      .accordion {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 20px;

        .arrow svg {
          font-size: 24px;
          color: #ff9066;
          transition: all 0.4s ease-out;
        }

        .active-arrow {
          transform: rotate(180deg);
          transition: all 0.4s ease-out;
        }
      }

      &:hover {
        background: #f2f2f2;
        transition: 0.3s;
      }

      &:active,
      &:focus {
        outline: 0;
      }

      .list-content {
        display: flex;

        .img-section {
          min-width: 150px;
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
          min-height: 120px;
          padding: 10px;

          .type {
            color: #e83e8c;
          }

          .type-title {
            font-size: 12px;
          }

          h5 {
            margin-bottom: 4px;
            font-weight: bold;
            font-size: 13px;
          }

          p,
          h1 {
            margin-bottom: 0;
          }

          .sm-text {
            color: #a6a6a6;
            font-size: 11px;
            display: flex;
            align-items: center;
            margin-bottom: 2px;

            span {
              display: inline-block;

              div {
                width: 20px;
              }
            }
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

    button {
      width: 100%;

      .load-more-spinner {
        height: 20px;
        width: 20px;
        margin-left: 10px;
      }
    }
  }
}

@media (min-width: 769px) {
  .overview {
    .overview-content .card {
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
            font-size: 17px;
          }

          .sm-text {
            font-size: 14px;
          }
        }
      }
    }

    .btn-load button {
      width: 250px;
    }
  }
}

@media (min-width: 1024px) {
  .overview .overview-content {
    padding-top: 220px;
  }
}

@media (max-width: 640px) {
  .overview {
    overflow: scroll;
  }
}
</style>
