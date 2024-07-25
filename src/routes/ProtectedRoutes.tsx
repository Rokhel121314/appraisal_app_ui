import { Navigate, useLocation } from "react-router-dom";

type PropTypes = {
  logged_in: boolean;
  children: JSX.Element;
};

const ProtectedRoutes = (props: PropTypes) => {
  const location = useLocation();

  if (props.logged_in) {
    return props.children;
  } else {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
};

export default ProtectedRoutes;
