import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_SERVER
})

export const queryClient = new QueryClient()

export default instance