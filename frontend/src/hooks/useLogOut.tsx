import { useAuthContext } from "../context/AuthContext";


const useLogOut = () =>{

    const {authUser, setAuthUser, isLoading} = useAuthContext();

    if(authUser){

    }

}

export default useLogOut;