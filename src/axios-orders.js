import axios from "axios";

const instance = axios.create({
  baseURL: "https://burder-builder-7c3cf-default-rtdb.firebaseio.com/",
});

export default instance;
