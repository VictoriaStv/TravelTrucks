import axios from "axios";

const apiUrl = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampersFromApi = async (filters) => {
  try {
    const { data } = await axios.get(apiUrl, { params: filters });
    console.log("Fetched data:", data);
    return data.items; 
  } catch (error) {
    console.error("Error fetching campers:", error);
    return []; 
  }
};
