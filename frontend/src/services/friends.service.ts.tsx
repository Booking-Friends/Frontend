import {instance} from "@/api/axios";


export const FriendsService = {
    async getAll() {
        return await instance.get('/users/friends').then(res => res.data)
    }
}