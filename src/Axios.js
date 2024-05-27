import axios from "axios";

const Axios = axios.create({
        baseURL : "http://localhost:9192/"
    })
export default Axios;