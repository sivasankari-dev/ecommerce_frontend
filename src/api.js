// import axios from "axios"

// export const BASE_URL = "http://127.0.0.1:8000/"

// const api = axios.create({
//     baseURL: "http://127.0.0.1:8000/"
// })

// export default api

import axios from "axios";

// Fallback to localhost if the environment variable isn't set
export const BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/";

const api = axios.create({
    baseURL: BASE_URL,
    // Recommended: add headers if you're sending JSON
    headers: {
        "Content-Type": "application/json",
    },
});

// If you need to handle Django CSRF tokens or Cookies later:
// api.defaults.withCredentials = true;

export default api;