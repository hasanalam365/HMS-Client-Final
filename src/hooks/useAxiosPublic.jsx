import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;