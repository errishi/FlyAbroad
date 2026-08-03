import axios from "axios";

const serverUrl = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
    baseURL: serverUrl,
    withCredentials: true,
});

export const universitiesApi = {
    getAllUniversities: async (page) => {
        const response = await apiClient.get(`/api/universities?page=${page}`);
        return response.data;
    },
    getUniversityById: async (id) => {
        const response = await apiClient.get(`/api/universities/${id}`);
        return response.data;
    }
}