import axios from "axios";

const API = axios.create({
    baseURL : "https://blog-app-server-80n3.onrender.com",
});

export default API;
