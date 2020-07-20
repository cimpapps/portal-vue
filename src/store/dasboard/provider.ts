import {DashboardCardsService} from "@/store/dasboard/dasboard.service";
import {DashboardProvider} from "@/store/dasboard/dasboard.model";

export const provider = (): DashboardProvider => ({
    dashboardCardsService : new DashboardCardsService()
})