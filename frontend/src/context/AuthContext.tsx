import { createContext, useContext, useState } from "react";



export const AuthContext = createContext('');

// We create the hook to use Context right here so we don't have to import AuthContext AND useContext in other files
export const useAuthContext = () =>{
    return useContext(AuthContext);
}

export const AuthProvider = (props: any) =>{
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user"))|| null)

    return(
        <AuthContext.Provider value={setAuthUser}>
            {props.children}
        </AuthContext.Provider>
    )
}