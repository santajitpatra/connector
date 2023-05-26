import { useSession } from "next-auth/react";
import Image from "next/image";

function InputBox() {
  const { session } = useSession();

  return (
    <div>
      <div>
      {/* <Image
      className="rounded-full"
      src={session.user.image}
      width={500}
      height={500}
      alt="Picture of the author"
      layout="fixed"
    /> */}
    
      </div>
    </div>
  );
}


export default InputBox;
