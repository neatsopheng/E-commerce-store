import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/'
})
interface FetchResponse<T> {}

export class ApiClient <T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance.get<T>(this.endpoint, config)
            .then(res => res.data);
    }
}