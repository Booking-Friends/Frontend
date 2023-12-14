import {LoginInput, RegisterInput} from "@/types/auth.interface";
import {instance} from "@/api/axios";


export const AuthService = {
    async register (data: RegisterInput) {
        return await instance.post('/auth/register', data).then(res => res.data)
    },
    async login (data: LoginInput) {
        return await instance.post('/auth/login', data).then(res => res.data)
    },
}