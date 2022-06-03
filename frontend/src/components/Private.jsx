import { useTransactionContext } from "../state/UserContext";
import { Navigate } from "react-router-dom";

export default function Private({ children }) {
  const [state] = useTransactionContext();
  const auth = state.user.data.data
    ? state.user.data.data.email
      ? true
      : false
    : false;
  return auth ? children : <Navigate to="/" />;
}
