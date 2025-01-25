import axios from "axios";

export const BASE_URL =
  "https://677ed52d94bde1c1252db72d.mockapi.io/api/v1/users";

export const getUsers = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response;
  } catch (error) {
    throw error;
  }
};

export const addUser = async (user) => {
  try {
    const response = await axios.post(BASE_URL, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, updatedUser) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedUser);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    throw error;
  }
};
