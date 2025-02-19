import { useContext } from "react";
import { AuthContext } from "../contexts/index";

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export default useAuth;
