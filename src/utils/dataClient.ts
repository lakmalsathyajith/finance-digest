import axios from "axios";

const baseURL = "https://finnhub.io/api/v1";
const token = "crals9pr01qhk4bqotb0crals9pr01qhk4bqotbg";

/**
 * Create a custom axios object with default params attached.
 *
 */
const dataClient = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    token,
  },
});

export default dataClient;
