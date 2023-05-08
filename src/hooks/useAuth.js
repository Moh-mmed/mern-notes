import { useSelector } from "react-redux";
import { selectCurrentData } from "../features/auth/authSlice";

const useAuth = () => {
  const {token,data} = useSelector(selectCurrentData);
  let isManager = false;
  let isAdmin = false;
  let status = "Employee";

  if (token) {
    const { username, roles } = data.user;

    isManager = roles.includes("Manager");
    isAdmin = roles.includes("Admin");

    if (isManager) status = "Manager";
    if (isAdmin) status = "Admin";

    return { username, roles, status, isManager, isAdmin };
  }

  return { username: "", roles: [], isManager, isAdmin, status };
};
export default useAuth;
