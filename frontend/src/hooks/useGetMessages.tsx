import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";

const useGetMessages = () =>{

    const [loading, setLoading] = useState(false);
    // We get out state, to check if there are conversations selected
    const {messages, setMessages, selectedConversation} = useConversation();

    // This useEffect runs whenever the conversation changes, meaning, whenever the user clicks on a different one
    useEffect(()=>{

        const getMessages = async () =>{

            if(!selectedConversation) return;
            setLoading(true);
            setMessages([])
            try{
                // We get all the messages that belong to that conversation
                const res = await fetch(`/api/messages/${selectedConversation.id}`);
                const data = await res.json();

                if(!res.ok){
                    throw new Error(data.error);

                }
                // If we have messages, we set them on our state




                setMessages(data)
                
                console.log("THIS IS THE DATA", messages)

            }catch(error:any){
                console.error(error.message);
                toast.error(error.message);
            }finally{
                setLoading(false);
            }
        };


        getMessages();

    },[selectedConversation])

    return {loading, messages}

}

export default useGetMessages;