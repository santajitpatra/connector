import {
  VideoCameraIcon,
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/outline";
import Contact from "./Contact";

const contacts = [
  {
    name: "John Wick",
    src: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Tom Wick",
    src: "https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Nova Wick",
    src: "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Martini Wick",
    src: "https://images.pexels.com/photos/2419574/pexels-photo-2419574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Mari Wick",
    src: "https://images.pexels.com/photos/3750717/pexels-photo-3750717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Mac Wick",
    src: "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <MagnifyingGlassIcon className="h-6" />
          <EllipsisHorizontalIcon className="h-6" />
        </div>
      </div>
      {
        contacts.map((contact) =>(
            <Contact key={contact.src} src={contact.src} name={contact.name} />
        ))
      }
    </div>
  );
}

export default Widgets;
