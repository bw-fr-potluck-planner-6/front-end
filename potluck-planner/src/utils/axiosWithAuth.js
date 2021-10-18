import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      authorization: token,
    },
    // baseURL: "insert api url here"
  });
};

export default axiosWithAuth;
