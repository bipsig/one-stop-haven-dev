import { API_URL } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
    const options = { 
        method: 'GET', 
        headers: { 'User-Agent': 'Insomnia/2023.5.6' } 
    };

    try {
        const res = await fetch(`${API_URL}${endpoint}`, options);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        // console.log("Response status:", res.status);
        // console.log("Response headers:", res.headers);
        // console.log("Data received:", data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
