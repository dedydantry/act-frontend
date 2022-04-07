import axios from "axios";

const getContactsByClientId = async (id) => {
  const result = await axios.get(`http://localhost:8080/api/contacts?id=${id}`);
  console.log(result.data);
  return result.data;
};

export { getContactsByClientId };
