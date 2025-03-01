import { API_URL } from "../config"; // Adjust path if needed

export const API_URL = "http://localhost:8080";
export const API_KEY = "your-secret-key"; // If needed

fetch(API_URL)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching data:", error));
