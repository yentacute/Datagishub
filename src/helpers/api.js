import http from "./axiosConfig";

const getAll = () => {
    return http.get('/application')
}

const getDetails = (id) => {
    return http.get('/application/'+ id + '/')
}

export default {
    getAll,
    getDetails
}