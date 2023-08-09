import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { checkToken } from "../../utils/Auth";
import { useEffect } from "react";
import Preloader from "../Preloader/Preloader";

function ProtectedRoute({ element: Component, ...props }) {
  const [login, SetLogin] = useState(false);

  //*get islogin before load
  useEffect(() => {
      checkToken()
        .then((res) => {
          if (res) {
            SetLogin(true);
          }
        })
        .catch((error) => {
          console.log(error);
        })
    });

  return login ? <Component {...props} /> : <Navigate to="/" />;
}

export default ProtectedRoute;
