import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () =>{

    const [ message, setMessage] = useState('');

    const {loading, sendMessage} = useSendMessage();


    const handleSubmit = async (e: React.FormEvent) =>{

        e.preventDefault();
        if(!message.trim()) return;
        await sendMessage(message);
        setMessage('');
    }


    return(
        <form action="" className="px-4 my-3" onSubmit={handleSubmit}>
            <div className="w-full relative">
                <input type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" placeholder="Send a message" onChange={e => setMessage(e.target.value)} value={message}/>
                <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3 text-gray-400">
                    {loading ? (<span className="loading loading-spinner" />) : (<BsSend />)}
                </button>
            </div>
        </form>
    )
}

export default MessageInput;


// import { BsSend } from "react-icons/bs";

// const MessageInput = () => {
//   return (
//     <form action="" className="px-4 my-3">
//       <div className="w-full">
//         <input
//           type="text"
//           className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
//           placeholder="Send a message"
//         />
//         <button
//           type="submit"
//           className="absolute inset-y-0 end-0 flex items-center pe-3"
//         >
//           <BsSend />
//         </button>
//       </div>
//     </form>
//   );
// };

// export default MessageInput;