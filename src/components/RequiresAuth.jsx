import { Navigate, useLocation } from "react-router"
import { useLoginContext } from "../contexts/LoginProvider";

export const RequiresAuth = ({children}) => {
    const { login } = useLoginContext();
    return login ? <>{children}</> : <Navigate to="/login"/>
}