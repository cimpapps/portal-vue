import Vue from 'vue';
import Vuex from 'vuex';
import {DashboardData} from "@/store/dasboard/dasboard.model";
import {mutations} from "@/store/dasboard/dasboard.mutations";
import {actions} from "@/store/dasboard/dasboard.actions";
import {getters} from "@/store/dasboard/dashboard.getters";


Vue.use(Vuex);

export const dashboardModule =  {
    mutations,
    actions,
    getters,
}