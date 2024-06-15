import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com/'
})
interface FetchResponse<T> {}

export class ApiClient <T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance.get<T>(this.endpoint)
            .then(res => res.data);
    }
}