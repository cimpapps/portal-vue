import axios from 'axios'
import {DashboardData} from "@/store/dasboard/dasboard.model";

export class DashboardCardsService {
    data : DashboardData[] = [];

    getAll() : Promise<DashboardData[]>{
        return axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => response) as Promise<DashboardData[]>
    }
}