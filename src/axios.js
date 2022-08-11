import axios from "axios";

const instance = axios.create({
  baseURL: "https://warm-retreat-23874.herokuapp.com/",
});

export default instance;
