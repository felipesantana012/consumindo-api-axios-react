import axios from "axios";

const blogFetch = axios.create({
    baseURL:"https://jsonplaceholder.org",
    headers: {
        "Content-Type": "aplication/json",
    },
})

export default blogFetch