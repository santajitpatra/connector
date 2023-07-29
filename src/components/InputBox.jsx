import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRef } from "react";
import { db } from "../../firebase";

function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null)


  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("posts").add({
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: Date.now(),
    });

  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6 ">
      <div className="flex space-x-4 p-4 items-center ">
        <Image
          className="rounded-full"
            src={session.user.image}
          width={40}
          height={40}
          alt="Picture of the author"
          // layout="fixed"
        />
        <form className="flex flex-1" action="ok">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder={`What's on your mind ${session.user.name} ?`}
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
