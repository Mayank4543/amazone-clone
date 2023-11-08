import axios from "axios";
const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-8c606/us-central1/api",
});
export default instance;
