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
    postReq = (myObj: {}) => {
        return axiosInstance.post<T>(this.endpoint, myObj)
            .then(res => res.data);
    }
    deleteReq = (id: number | string) => {
        return axiosInstance.delete<T>(this.endpoint + '/' + id )
            .then (res => res.data);
    }
    updateReq = (myObj: {}) => {
        return axiosInstance.put<T>(this.endpoint , myObj)
            .then(res => res.data);
    }
}

//axios.put(`/api/users/${userId}`, newData)