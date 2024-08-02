import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState, ReactNode } from "react";



const AuthContext = createContext<{
    authUser: AuthUserType | null;
    setAuthUser: Dispatch<SetStateAction<AuthUserType | null>>;
    isLoading: boolean;
}>({
    authUser: null,
    setAuthUser: () =>{},
    isLoading: true
});

// We create the hook to use Context right here so we don't have to import AuthContext AND useContext in other files
export const useAuthContext = () =>{
    return useContext(AuthContext);
}


export const AuthProvider = ({children}:{children:ReactNode}) =>{
    const [authUser, setAuthUser] = useState<AuthUserType | null>(null)
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
      const fetchAuthUser = async () => {
        try {
          const res = await fetch("/api/auth/me");
          const data = await res.json();

          if (!res.ok) {
            throw new Error(data.error);
          }
          setAuthUser(data);

        } catch (error: any) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
      };

      fetchAuthUser();
    }, []);


    return(
        <AuthContext.Provider value={{
            authUser,
            isLoading,
            setAuthUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}