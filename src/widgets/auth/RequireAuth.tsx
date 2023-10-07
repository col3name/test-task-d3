import {useAuth} from "../../shared/services/auth/hooks";
import {Navigate, useLocation} from "react-router-dom";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const expired = useAuth();
  const location = useLocation();

  if (expired) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default RequireAuth;
