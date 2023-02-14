import axios from "axios";

const API = axios.create({
    baseURL: "https://j-server.onrender.com/",
});

export default API