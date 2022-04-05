import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../Config/Firebase";

const auth = getAuth(app);

const useAuthentication = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        //console.log(user)
      } else {
        setUser();
      }
    });
    return unsubscribeFromAuthStatuChanged;
  }, []);

  return user;
};

export default useAuthentication;
