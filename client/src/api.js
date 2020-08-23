import axios from 'axios';

export const getShortURL = code => {
    return axios.get('/api/short/'+code);
}

export const shortenURL = (originalURL, shortBaseURL) => {
    return axios.post('/api/short', {originalURL, shortBaseURL});
}

export const deleteShortURL = code => {
    return axios.delete('/api/short/'+code);
}