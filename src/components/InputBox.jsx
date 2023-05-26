import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Image from "next/image";

function InputBox() {
  const { session } = useSession();
  const sendPost = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6 ">
      <div className="flex space-x-4 p-4 items-center ">
        <Image
          className="rounded-full"
          //   src={session.user.image}
          src={"/santajit.jpeg"}
          width={40}
          height={40}
          alt="Picture of the author"
          layout="fixed"
        />
        <form className="flex flex-1" action="ok">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            // placeholder={`What's on your mind ${session.user.name} ?`}
            placeholder={`What's on your mind Santajit Patra ?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-300 " />
          <p className="text-xs sm:text-sm">Live Video</p>
        </div>
        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-300 " /> 
          <p className="text-xs sm:text-sm">Photo/Video</p>
        </div>
        <div className="inputIcon">
          <FaceSmileIcon className="h-7 text-yellow-300 " />
          <p className="text-xs sm:text-sm">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
