import SearchInput from "./SearchInput.tsx";
import ConversationsList from "./ConversationsList";
import LogoutButton from "./LogoutButton";

const Sidebar = () =>{

    return <div className="brder-r border-slate-500 p-4 flex flex-col">
        <SearchInput />
        <div className="divider px-3"></div>
        <ConversationsList />
        <LogoutButton />
    </div>
}

export default Sidebar;

// import SearchInput from "./SearchInput.tsx";
// import ConversationsList from "./ConversationsList";
// import LogoutButton from "./LogoutButton";

// const Sidebar = () => {
//   return (
//     <div className="brder-r border-slate-500 p-4 flex flex-col">
//       <SearchInput />
//       <div className="divider px-3"></div>
//       <ConversationsList />
//       <LogoutButton />
//     </div>
//   );
// };

// export default Sidebar;