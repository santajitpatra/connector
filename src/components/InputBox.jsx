import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { db, storage } from "../../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  setDoc,
} from "firebase/firestore";

import {
  ref,
  uploadString,
  set,
  getDownloadURL,
  
} from "firebase/storage";

function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = async (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    const result = await addDoc(collection(db, "posts"), {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,

      timestamp: serverTimestamp(),
    });
    if (imageToPost) {
      uploadPost(result);
    }
    inputRef.current.value = "";
  };

  const uploadPost = async (docs) => {
    if (imageToPost) {
    const storageRef = ref(storage, `posts/${docs.id}`);
    const uploadTask = uploadString(storageRef, imageToPost, "data_url");
      

      removeImage();
  uploadTask
    .then(async () => {
      const downloadURL = await getDownloadURL(storageRef);

      getDownloadURL(storageRef).then((url) => {
        // Update the Firestore document with the download URL
           const postRef =  doc(db, "posts", docs.id);
           setDoc(postRef, { postImage: downloadURL }, { merge: true })
             .then(() => {
               console.log("Firestore document updated successfully");
             })
             .catch((error) => {
               console.error("Error updating Firestore document:", error);
             });
      });
    })
    .catch((error) => {
      console.error("Error during file upload:", error);
    });

    }
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
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
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img
              className="h-10 object-contain "
              src={imageToPost}
              alt="post"
            />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-300 " />
          <p className="text-xs sm:text-sm">Live Video</p>
        </div>

        <div
          className="inputIcon"
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="h-7 text-green-300 " />
          <p className="text-xs sm:text-sm">Photo/Video</p>
          <input
            ref={filePickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
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
