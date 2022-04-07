import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import AppAuthButton from "../Components/Elements/AppAuthButton";
import MainContext from "../Context/MainContext";
import { auth } from "../Config/Firebase";
import { getUserByEmail } from "../Api/useUserController";

function ClientPage() {
  var store = require("store");

  const { setToggleSidebar } = useContext(MainContext);

  const [name, setName] = useState("");

  const getUserId = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/users/email?email=${auth.currentUser.email}`
    );
    console.log(result.data);
    return result.data;
  };

  const submitClient = () => {
    getUserId().then(async (result) => {
      if (result) {
        const client = await axios.post(`http://localhost:8080/api/clients`, {
          name: name,
          user_id: result.message.id,
        });
        console.log(client);
        if (client) {
          const user = await getUserByEmail(auth.currentUser.email);
          store.set("clientId", user);
          return (window.location.href = "/profile");
        }
      }
    });
  };

  useEffect(() => {
    setToggleSidebar(false);
  }, []);

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
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <AppAuthButton
                size="sm"
                color="indigo"
                children="Create Project"
                fullWidth={true}
                onClick={submitClient}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientPage;
