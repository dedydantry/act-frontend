import React from "react";
import { auth, logout, sendPasswordReset } from "../Config/Firebase";

import AppAuthButton from "../Components/Elements/AppAuthButton";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  let user = auth.currentUser;

  const navigate = useNavigate();

  const resetPassword = () => {
    sendPasswordReset(user.email);
  };

  const logoutUser = () => {
    logout();
    navigate("/signin");
  };

  return (
    <div className="container flex flex-col mx-auto w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <a href="#" className="block relative">
          <img
            alt="profil"
            src="https://randomuser.me/api/portraits/men/70.jpg"
            className="mx-auto object-cover rounded-full h-20 w-20 "
          />
        </a>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 block">
          {user.email}
        </h2>
      </div>
      <div className="flex-1 items-center justify-center mt-10">
        <AppAuthButton
          size="lg"
          color="indigo"
          children="Reset Password"
          fullWidth={true}
          onClick={resetPassword}
        />
        <AppAuthButton
          size="lg"
          color="emerald"
          children="Sign Out"
          fullWidth={true}
          onClick={logoutUser}
        />
      </div>
    </div>
  );
}

export default ProfilePage;
