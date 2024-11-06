import React, { useContext, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <Navigate to="/" />;
  }

  const { currentUser } = authContext;

  return currentUser && currentUser.emailVerified ? (
    <>{children}</>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;

