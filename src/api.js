// interation with the Unsplash API

import axios from "axios";

const apiUrl = process.env.REACT_APP_IMAGES_HOST_URL;
const accessKey = process.env.REACT_APP_IMAGES_HOST_ACCESS_KEY;

const searchImages = async (term) => {
  const response = await axios.get(apiUrl, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
