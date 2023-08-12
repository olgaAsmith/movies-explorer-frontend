import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { checkToken } from "../../utils/Auth";

function ProtectedRoute({ element: Component, ...props }) {
  
  const [login, SetLogin] = useState(false);
  const [isLoading, SetIsLoading] = useState(true);

  //*get islogin before load
  useEffect(() => {
    SetIsLoading(true);
    checkToken()
      .then((res) => {
        if (res) {
          SetLogin(true);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        SetIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return "";
  }
  return login ? <Component {...props} /> : <Navigate to="/" />;
}

export default ProtectedRoute;
