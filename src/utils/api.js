import axios from "axios";
import { YOUTUBE_API } from "./constant";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
    try {
        const response = await axios.get(`${YOUTUBE_API}${url}`, options);
        return response.data;
    } catch (error) {
        console.log("API error", error);
    }
}
