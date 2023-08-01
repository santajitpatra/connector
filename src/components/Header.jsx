import {
  HomeIcon,
  BellIcon,
  ChatBubbleLeftEllipsisIcon,
  ChevronDownIcon,
  UserGroupIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";
import {
  FlagIcon,
  PlayCircleIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import { useSession, signOut } from "next-auth/react";



const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          width={200}
          height={200}
          // layout="fixed"/
          alt="Picture of the author"
          priority
        />
        <div className="hidden md:inline-flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <MagnifyingGlassIcon className="h-6 to-gray-600" />
          <input
            type="text"
            placeholder="connector"
            className="hidden lg:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
          />
        </div>
      </div>

      <div className="flex justify-center flex-grow">
        <div className="flex  space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayCircleIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          onClick={() => signOut()}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width={40}
          height={40}
          // layout="fixed"
          alt="Picture of the author"
        />
        <p className="hidden lg:inline-flex text-sm whitespace-nowrap font-semibold pr-3">
          {session.user.name}
        </p>
        <Squares2X2Icon className="icon" />
        <ChatBubbleLeftEllipsisIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
