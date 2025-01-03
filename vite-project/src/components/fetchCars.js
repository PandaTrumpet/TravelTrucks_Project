import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const showCars = async () => {
  try {
    const response = await axios.get("/campers");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const showCarsId = async (id) => {
  try {
    const response = await axios.get(`/campers/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
