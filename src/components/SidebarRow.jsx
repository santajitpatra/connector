import Image from "next/image";

const SidebarRow = ({src, Icon, title}) => {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-full cursor-pointer">
      {src && (
        <Image
        className="rounded-full"
          src={src}
          width={30}
          height={30}
          // layout="fixed"
          alt="Picture of the author"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
};

export default SidebarRow;
