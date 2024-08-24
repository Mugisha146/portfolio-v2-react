import axios, { AxiosInstance } from "axios";

const API_URL = "https://portifolio-backend-api.onrender.com/";

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// API methods
export const logIn = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const response = await api.post("/login", credentials);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const signUp = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await api.post("/signup", userData);
    return response.data;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

export const resetPassword = async (data: {
  email: string;
  newPassword: string;
}) => {
  try {
    const response = await api.post("/reset-password", data);
    return response.data;
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
};

// Function to submit the contact form
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}api/contact`, formData); // Change to your actual endpoint
    return response.data;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error; // Re-throw to be handled by calling function
  }
};

export const submitEmail = async (email: string) => {
  try {
    const response = await axios.post(`${API_URL}api/subscribe`, { email });
    return response.data; // Adjust according to your API response
  } catch (error) {
    console.error("Error subscribing email:", error);
    throw error; // Re-throw to be handled by calling function
  }
};

export const fetchData = async (endpoint: string) => {
  try {
    const response = await axios.get(`${API_URL}${endpoint}`);
    return response.data; // Return data directly
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw to be handled by calling function
  }
};

// Function to get projects
export const getProjects = async () => {
  return await fetchData("api/projects"); // Directly return the result
};

// Function to get skills
export const getSkills = async () => {
  return await fetchData("api/skills"); // Directly return the result
};

// Function to get blogs
export const getBlogs = async () => {
  return await fetchData("api/blogs"); // Directly return the result
};

export default {
  getProjects,
  getSkills,
  getBlogs,
  submitContactForm,
  submitEmail,
}; // Export as an object to allow further expansion
