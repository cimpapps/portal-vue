import {
  DashboardData,
  DashboardMutations,
  DashboardState
} from "@/store/dasboard/dasboard.model";

export const mutations: DashboardMutations = {
  fetchDashboardCards(state: DashboardState, payload: DashboardData[]): void {
    //payload + volare la state
    payload.map(card => state.cards.push(card));
  }
};
