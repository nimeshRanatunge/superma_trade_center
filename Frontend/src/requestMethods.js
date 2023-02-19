import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTZhY2JjMDFmNjI5MWJiYTU5NmZjNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NjgxNzM4MCwiZXhwIjoxNjc3MDc2NTgwfQ.EIKLkhy7tPmlluG5FyoGXG0dpj9MaUUfr3b-ha3zWA0";


export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });

  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });