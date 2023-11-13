import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const user = JSON.parse(localStorage.getItem("user")) 
  const isAuthenticated = user ? true : false

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated ) navigate("/login");
    },
    [isAuthenticated, navigate]
  );

  // 4. If there IS a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
