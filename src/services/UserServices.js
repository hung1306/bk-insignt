import axios from "axios";
import ENV_VARS from "../../env";

const apiURL = ENV_VARS.API_URL;
export const axiosJWT = axios.create();

export const loginUser = async (data) => {
  const res = await axios.post(`${apiURL}/user/log-in`, data);

  return res.data;
};

export const signupUser = async (data) => {
  try {
    const res = await axios.post(`${apiURL}/user/sign-up`, data);
    console.log("res.data:", res.data); // Log data received from the server
    return res.data;
  } catch (error) {
    console.error("Error signing up user:", error);
    throw error; // Throw the error to be handled in the calling component
  }
};

export const getDetailsUser = async (id, access_token) => {
  const res = await axiosJWT.get(`${apiURL}/user/get-details/${id}`, {
    headers: {
      token: `Bearer ${access_token}`,
    },
  });
  return res.data;
};

export const refreshToken = async (refreshToken) => {
  console.log("refreshToken", refreshToken);
  const res = await axios.post(
    `${apiURL}/user/refresh-token`,
    {},
    {
      headers: {
        token: `Bearer ${refreshToken}`,
      },
    }
  );
  return res.data;
};

export const logoutUser = async () => {
  const res = await axios.post(`${apiURL}/user/log-out`);
  return res.data;
};

export const updateUser = async (id, data, access_token) => {
  const res = await axiosJWT.put(`${apiURL}/user/update-user/${id}`, data, {
    headers: {
      token: `Bearer ${access_token}`,
    },
  });
  return res.data;
};

export const sendEmail = async (data) => {
  const res = await axios.post(`${apiURL}/user/sendEmail`, data);
  return res.data;
};
