import React from "react";
import HeaderIcon from "./HeaderIcon";



const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      <div className="flex items-center">
        <p>Connector</p>
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
className="h-6 to-gray-600"          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input type="text" placeholder="connector"
          className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500" />
        </div>
      </div>

      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          {/* <HeaderIcon Icon={HomeIcon}/> */}

        </div>
      </div>
       
       <div className="flex items-center sm:space-x-2 justify-end">
        <p className="whitespace-nowrap font-semibold pr-3">
          Santajit Patra
        </p>
        <h5 className="icon">icon</h5>
       </div>

    </div>
  );
};

export default Header;
