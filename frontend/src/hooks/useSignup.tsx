import { useState } from "react";
import toast, {Toaster} from "react-hot-toast";
import { Routes } from "react-router-dom";

const useSignUp = () =>{

    const [loading, setLoading] = useState(false);

    const signup = async({fullName, username, password, confirmPassword, gender}) =>{
        const success = handleInputErrors(fullName, username, password, confirmPassword, gender);

        if(!success) return;

        setLoading(true);

        try{

            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({fullName, username, password, confirmPassword, gender})
            });

            const data = await res.json();
            console.log(data);

        }catch(error:any){
            console.log("CATCH ERROR");
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    return {loading, signup}
}



function handleInputErrors(fullName, username, password, confirmPassword, gender){

    if(!fullName || !username || !password || !confirmPassword || !gender){
        console.log("GETTING HIT ON THE FRONTEND");
        console.log(fullName)
        console.log(username)
        console.log(password)
        console.log(confirmPassword)
        console.log(gender)
        toast.error("Please make sure to fill all the fields");
        return false;
    }

    if(password !== confirmPassword){
        toast.error("Password must match");
        return false;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }


    if(username.length < 8){
        toast.error("Username must have at least 8 characters");
        return false;
    }

    if(fullName.split(" ").length < 2){
        toast.error("Please include your first and last name");
        return false;
    }

    return true;
}

export default useSignUp;
