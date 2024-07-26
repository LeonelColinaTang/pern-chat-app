import { CgLogOut } from "react-icons/cg";
import {BiLogOut} from 'react-icons/bi';

const LogoutButton = () => {
  return <div className="mt-auto">
    {/* <CgLogOut className="w-6 h-6 text-white cursor-pointer"/> */}
    <BiLogOut className="w-6 h-6 text-white cursor-pointer"/>
  </div>;
};

export default LogoutButton;



// import { CgLogOut } from "react-icons/cg";
// import { BiLogOut } from "react-icons/bi";

// const LogoutButton = () => {
//   return (
//     <div className="mt-auto">
//       {/* <CgLogOut className="w-6 h-6 text-white cursor-pointer"/> */}
//       <BiLogOut className="w-6 h-6 text-white cursor-pointer" />
//     </div>
//   );
// };

// export default LogoutButton;