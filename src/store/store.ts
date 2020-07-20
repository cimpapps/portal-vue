import Vue from "vue";
import Vuex from "vuex";
import {getters} from "@/store/dasboard/dashboard.getters";
import {mutations} from "@/store/dasboard/dasboard.mutations";
import {actions} from "@/store/dasboard/dasboard.actions";

Vue.use(Vuex);

const store = new Vuex.Store({
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production',
});

export default store;