import { Navigate } from "react-router";

export default function PrivateRoute({user, children}){

    if(!user?.id){
        return <Navigate to="/login" replace />
    }
    return children
}