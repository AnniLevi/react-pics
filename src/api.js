// interation with the Unsplash API

import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID k81G9r4OcytbMOkC-K-hBJV6QZcVoBu4l9gehGBCRYc",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
