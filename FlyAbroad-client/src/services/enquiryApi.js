import axios from "axios";

const serverUrl = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
    baseURL: serverUrl,
    withCredentials: true,
});

export const enquiryApi = {
    submitEnquiry: async (enquiryData) => {
        const response = await apiClient.post(`/api/students`, enquiryData);
        return response.data;
    },

    submitInstituteEnquiry: async (instituteData) => {
        const response = await apiClient.post(`/api/institutes`, instituteData);
        return response.data;
    }
}