import axios from "axios";

axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: "https://joze-app.herokuapp.com/players",
  withCredentials: true,
});

api.defaults.headers["Content-Type"] = "application/json";

export default api;
