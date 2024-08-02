import useGetConversations from '../../hooks/useGetConversations.tsx';
import { getRandomEmoji } from '../../utils/emojis.ts';
import Conversation from './Conversation.tsx'

const ConversationsList = () =>{

    const {conversations, loading }= useGetConversations();
    return( 
    <div className="py-2 flex flex-col overflow-auto">
            {conversations.map((conversation) =>(
                <Conversation key={conversation.id} conversation={conversation} emoji={getRandomEmoji()}/>
            ))}
            {loading ? (
                <span  className='loading loading-spinner mx-auto'/>  
            ): null}
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