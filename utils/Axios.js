import axios from "axios";
const Axios = axios.create({
  baseURL: "https://todos-server-pi.vercel.app/",
});

export default Axios;
