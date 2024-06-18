import axios from "axios";

const url = "https://jsonplaceholder.org";

const blogFetch = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json",
    },
})

export default blogFetch