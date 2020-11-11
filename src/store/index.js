import Vuex from 'vuex';
import Vue from 'vue';
import job from './modules/job';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    job
  }
});
