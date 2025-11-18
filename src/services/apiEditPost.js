import axios from "axios";
const API_URL = "http://localhost:8080/posts";

const apiEditPost = axios.put({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

export default apiEditPost;