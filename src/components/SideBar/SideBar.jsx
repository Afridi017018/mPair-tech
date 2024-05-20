import { GoHome } from "react-icons/go";
import { IoVideocamOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-full w-64" style={{background: "rgba(228, 242, 248, 1)"}}>
        <h3 className="text-lg font-semibold my-5 px-3" style={{color: "rgba(35, 151, 200, 1)"}}>Accounting</h3>
      <ul>
        <li>
            <div className="p-3 hover:bg-blue-200 hover:text-sky-500 hover:border-sky-500 hover:border-2 hover:border-s-8 cursor-pointer flex items-center gap-2">
            <GoHome />
          <a to="/dashboard" className="">Dashboard</a>
            </div>
        </li>
        
        <li>
            <div className="p-3 hover:bg-blue-200 hover:text-sky-500 hover:border-sky-500 hover:border-2 hover:border-s-8 cursor-pointer flex items-center gap-2">
            <IoVideocamOutline />
          <a to="/accounting">Accounting</a>
            </div>
        </li>

        <li>
            <div className="p-3 hover:bg-blue-200 hover:text-sky-500 hover:border-sky-500 hover:border-2 hover:border-s-8 cursor-pointer flex items-center gap-2">
            <FaEdit />
          <a to="/reports">Reports</a>
            </div>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
