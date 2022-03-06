import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

{
  /* Function to fetch the data from the API  */
}
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "c4f827b8f6msh2ab38f079f1c3e1p14f8bdjsn855105d29264",
    },
  });

  return data;
};
