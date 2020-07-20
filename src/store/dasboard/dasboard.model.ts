import {
  ActionContext,
  ActionTree,
  GetterTree,
  MutationTree,
  Store
} from "vuex";
import {DashboardCardsService} from "@/store/dasboard/dasboard.service";

export interface DashboardData {
  readonly id?: number;
  readonly title: string;
  readonly content: string;
  readonly short: string;
}

export interface DashboardModel {

}

// provide interface for the state
export interface DashboardState {
  cards: DashboardData[];
}

export type DashboardStore = Store<DashboardState>;

//getters model

export interface DashboardGetters
  extends GetterTree<DashboardState, DashboardState> {
  getAllDashboardCards(
    this: Store<DashboardState>,
    state: DashboardState
  ): DashboardData[];
  getOneDashboardCardById(
    this: Store<DashboardState>,
    state: DashboardState
  ): (id: number) => DashboardData | undefined;
}

//mutations type
export interface DashboardMutations extends MutationTree<DashboardState> {
  fetchDashboardCards(
    this: Store<DashboardState>,
    state: DashboardState,
    payload: DashboardData[]
  ): void;
}

//actions model

export type Context = ActionContext<DashboardState, DashboardState>;

export interface DashboardActions extends ActionTree<DashboardState, DashboardState> {
  fetchCards(this: Store<DashboardState>, context: Context): void;
}

// provider model

export interface DashboardProvider {
  dashboardCardsService : DashboardCardsService
}
