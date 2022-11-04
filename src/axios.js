import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-ba8a3/us-central1/api",
});

export default instance;
