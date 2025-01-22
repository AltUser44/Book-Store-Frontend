import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { BiBuoy } from "react-icons/bi";
import userImg from "../assets/John.jpg";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  return (
    <FlowbiteSidebar aria-label="Sidebar with content separator example">
      <FlowbiteSidebar.Logo
        href="/"
        img={user?.photoURL || userImg}
         imgAlt="User Profile"
        className="flex items-center gap-3 pl-2"
      >
        <p>
          {
            user?.displayName || "Demo User"
          }</p>
      </FlowbiteSidebar.Logo>
      <FlowbiteSidebar.Items>
        <FlowbiteSidebar.ItemGroup>
          <FlowbiteSidebar.Item href="/admin/dashboard" icon={HiChartPie} className="gap-3">
            Dashboard
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} className="gap-3">
            Upload Book
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="/admin/dashboard/manage" icon={HiInbox} className="gap-3">
            Manage Books
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="/user-profile" icon={HiUser} className="gap-3">
            User Profile
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="/login" icon={HiArrowSmRight} className="gap-3">
            Sign In
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="/logout" icon={HiTable} className="gap-3">
            Log Out
          </FlowbiteSidebar.Item>
        </FlowbiteSidebar.ItemGroup>
        <FlowbiteSidebar.ItemGroup>
          <FlowbiteSidebar.Item href="/help" icon={BiBuoy} className="gap-3">
            Help
          </FlowbiteSidebar.Item>
        </FlowbiteSidebar.ItemGroup>
      </FlowbiteSidebar.Items>
    </FlowbiteSidebar>
  );
};


export default Sidebar; // Default export
