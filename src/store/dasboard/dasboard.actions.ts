import {Context, DashboardActions} from "@/store/dasboard/dasboard.model";
import {DashboardCardsService} from "@/store/dasboard/dasboard.service";
import {provider} from "@/store/dasboard/provider";

export const actions: DashboardActions ={

    fetchCards (context: Context): void{
        const data = provider();
        context.commit('fetchCards', data);
    }
}