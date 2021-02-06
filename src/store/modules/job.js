import axios from 'axios';
import moment from 'moment';

const url =
  'https://my-personal-portfolio-api.herokuapp.com/api/project/githubjobs';

const state = {
  jobs: [],
  page: 1,
  loading: false,
  showLoadMoreBtn: true,
};

const getters = {
  jobs: (state) => state.jobs,
  page: (state) => state.page,
  loading: (state) => state.loading,
  showLoadMoreBtn: (state) => state.showLoadMoreBtn,
};

const actions = {
  getAll({ commit }) {
    return new Promise((resolve, reject) => {
      state.loading = true;
      axios
        .get(url)
        .then((response) => {
          const jobs = initJobs(response.data);
          commit('setJobs', jobs);
          state.loading = false;
          resolve(response);
        })
        .catch(() => reject((state.loading = false)));
    });
  },
  getMore({ commit }) {
    return new Promise((resolve, reject) => {
      ++state.page;
      axios
        .get(`${url}?page=${state.page}`)
        .then((response) => {
          const jobs = initJobs(response.data);
          if (jobs.length < 50) {
            state.showLoadMoreBtn = false;
          }
          commit('mergeJobs', jobs);
          resolve(response);
        })
        .catch((error) => reject(error));
    });
  },
  search({ commit }, query) {
    return new Promise((resolve, reject) => {
      state.loading = true;
      axios
        .get(
          `${url}?description=${query.description}&location=${query.location}`
        )
        .then((response) => {
          const jobs = initJobs(response.data);
          commit('setJobs', jobs);
          state.loading = false;
          resolve(response);
        })
        .catch(() => reject((state.loading = false)));
    });
  },
  activeState(_, index) {
    state.jobs.forEach((job, i) => {
      if (index === i) {
        setTimeout(() => {
          job.$$open = !job.$$open;
        }, 10);
      }
    });
  },
};

const mutations = {
  setJobs: (state, jobs) => (state.jobs = jobs),
  mergeJobs: (state, newJobs) => (state.jobs = state.jobs.concat(newJobs)),
};

const initJobs = (jobs) => {
  return jobs.map((job) => {
    job['$$date'] = moment(new Date(job.created_at)).fromNow();
    job['$$open'] = false;
    return job;
  });
};

export default {
  state,
  getters,
  actions,
  mutations,
};
