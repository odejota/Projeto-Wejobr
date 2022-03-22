import axios from 'axios';

const conn = axios.create({
    baseURL: "https://wejobr.herokuapp.com/"
});

export default conn;