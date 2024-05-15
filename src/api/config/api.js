import axios from "axios";

const api = axios.create({
  baseURL: "https://3up5y4cklgrnvcokh4xrbnlyf40vvcxv.lambda-url.eu-central-1.on.aws/v1",
});

export default api;
