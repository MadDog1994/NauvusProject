import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactElement;
  access_token: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  access_token,
}) => {
  return access_token ? children : <Navigate to="/sign-up" />;
};

export default PrivateRoute;
