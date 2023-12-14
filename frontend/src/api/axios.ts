import axios from "axios";
import Cookies from "js-cookie";

export const instance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Cookies.get("access-token")}`
    }
});