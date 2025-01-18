import axios from "axios";

const apiUrl = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampersFromApi = async (filters) => {
  try {
    const { data } = await axios.get(apiUrl, { params: filters }); // Отримуємо дані з API, передаючи фільтри
    console.log("Fetched data:", data);
    return data.items; // Повертаємо масив camper items
  } catch (error) {
    console.error("Error fetching campers:", error);
    return []; // Повертаємо порожній масив у разі помилки
  }
};
