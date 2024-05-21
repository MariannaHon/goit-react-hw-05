import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const params = new URLSearchParams({
    include_adult: false,
    language: 'en-US',
    api_key: '199fbbfc8ead542e2e57dd31e97ba947',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTlmYmJmYzhlYWQ1NDJlMmU1N2RkMzFlOTdiYTk0NyIsInN1YiI6IjY2NDVlNTk1N2QyYmM5MzA4YjFiZTdhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32P2VYxNF7-zM_AiCG2vb9Rue5eActY6GraR_VUrp3Q'
    }
})

export const fetchFilms = async () => {
    const response = await axios.get(`trending/movie/day?${params}`);
    return response.data;
};

export const fetchFilmsWithSearch = async (search) => {
    const response = await axios.get(`search/movie?${params}&query=${search}`);
    return response.data;
};

export const fetchFilmsDetails = async (movieId) => {
    const response = await axios.get(`movie/${movieId}?${params}`);
    return response.data;
};

export const fetchFilmsCast = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/credits?${params}`);
    return response.data;
};

export const fetchFilmsReviews = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/reviews?${params}`);
    return response.data;
};
