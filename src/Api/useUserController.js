import axios from "axios";

const getUserByEmail = async (email) => {
  const result = await axios.get(
    `http://localhost:8080/api/users/email?email=${email}`
  );
  return result.data.message.client.id;
};

const createUser = async (name, email) => {
  const result = await axios.post(`http://localhost:8080/api/users`, {
    name,
    email,
  });
  console.log(result.data);
  return result.data;
};

export { getUserByEmail, createUser };
