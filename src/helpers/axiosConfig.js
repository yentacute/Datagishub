import axios from "axios";

export const BASE_URL = "https://649a96a4bf7c145d023912e1.mockapi.io/";

export default axios.create({
    baseURL: BASE_URL,
});