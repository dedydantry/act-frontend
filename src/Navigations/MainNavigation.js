import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import AuthContext from "../Context/AuthContext";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <nav>
      {!isLoggedIn && (
        <Routes>
          <Route path="/signin" element={<Sigin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      )}
      {isLoggedIn && (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </nav>
  );
};

export default MainNavigation;
