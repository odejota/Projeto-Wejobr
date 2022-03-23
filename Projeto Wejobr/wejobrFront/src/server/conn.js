import axios from 'axios';

// const conn = axios.create({
//     baseURL: "http://localhost:8080/"
// });

const conn = axios.create({
    baseURL: "https://wejobr.herokuapp.com/"
});

export default conn;