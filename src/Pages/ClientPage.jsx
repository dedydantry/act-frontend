import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import AppAuthButton from "../Components/Elements/AppAuthButton";
import MainContext from "../Context/MainContext";
import { auth } from "../Config/Firebase";

function ClientPage() {
  const { toggleSidebar, setToggleSidebar } = useContext(MainContext);

  const navigate = useNavigate();

  let user = auth.currentUser;
  let email = user.email;

  const [user_id, setUser_Id] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setToggleSidebar(false);
    console.log(toggleSidebar, "toggleSidebar");
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.post("http://localhost:8080/api/users/email", {
  //       email,
  //     });
  //     setUser_Id(result.data);
  //     console.log(user_id);
  //   };
  //   fetchData();
  // }, []);

  // const getID = async () => {
  //   try {
  //     const result = await axios.post("http://localhost:8080/api/clients", {
  //       name,
  //       user_id: user_id.message,
  //     });
  //     console.log(result);
  //     if (result.data.status) {
  //       navigate("/client");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     alert(err.message);
  //   }
  // };
  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create Project
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Project Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <AppAuthButton
                size="sm"
                color="indigo"
                children="Sign In"
                fullWidth={true}
                // onClick={getID}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientPage;
