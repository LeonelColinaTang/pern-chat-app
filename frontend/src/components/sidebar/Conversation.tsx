import useConversation from "../../zustand/useConversation";


const Conversation = ({conversation, emoji}:{conversation: ConversationType, emoji:string}) =>{

  const { setSelectedConversation, selectedConversation} = useConversation();
  const isSelected = selectedConversation?.id === conversation.id;
  const isOnline = false
    return (
      <>
        <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? 'bg-sky-500' : ''}`} onClick={() => setSelectedConversation(conversation)}>
          <div className={`avatar ${isOnline ? 'online' : 'offline'}`}>
            <div className="w-12 rounded-full">
              <img
                src={conversation.profilePic}
                alt="user avatar"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200">{conversation.fullName}</p>
                <span className="text-xl">{emoji}</span>
            </div>
          </div>
        </div>
        <div className="divider my-0 py-0 h-1"></div>
      </>
    );
}

export default Conversation;

// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="input input-bordered rounded-full"
//       />
//       <button type="submit" className="btn btn-circle bg-sky-500 text-white">
//         <IoSearchSharp className="w-6 h-6 outline-none" />
//       </button>
//     </form>
//   );
// };

// export default SearchInput;