import {
  CalendarIcon,
  ClockIcon,
  ComputerDesktopIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import SidebarRow from "./SidebarRow";
import { useSession } from "next-auth/react";

const Sidebar = () => {
  const { session, loading } = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      {/* <SidebarRow src={session.user.image} title={session.user.name} /> */}

      <SidebarRow Icon={UserIcon} title="Friend" />
      <SidebarRow Icon={UserGroupIcon} title="Group" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={ComputerDesktopIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
};

export default Sidebar;
