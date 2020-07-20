import {
  DashboardData,
  DashboardGetters,
  DashboardState
} from "@/store/dasboard/dasboard.model";

export const getters: DashboardGetters = {
  getAllDashboardCards(state: DashboardState): DashboardData[] {
    return state.cards;
  },

  getOneDashboardCardById: (state: DashboardState) => (
    id: number
  ): DashboardData | undefined => {
    return state.cards.find(card => card.id === id) || undefined;
  }
};
