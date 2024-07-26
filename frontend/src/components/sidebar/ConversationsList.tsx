import Conversation from './Conversation.tsx'

const ConversationsList = () =>{
    return( 
    <div className="py-2 flex flex-col overflow-auto">
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
    </div>
    )
}

export default ConversationsList;

// import Conversation from "./Conversation.tsx";

// const ConversationsList = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//     </div>
//   );
// };

// export default ConversationsList;