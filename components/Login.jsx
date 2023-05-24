"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="grid place-items-center my-20">
      <Image
        src="/logo.png"
        width={400}
        height={400}
        alt="Picture of the author"
        objectFit="contain"
      />
      <h2
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer my-20">
        LogIn With Facebook
      </h2>
    </div>
  );
};

export default Login;
