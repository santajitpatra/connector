import Image from "next/image";

const stories = [
  {
    name: "John Wick",
    src: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profile:
      "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Tom Wick",
    src: "https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profile:
      "https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Nova Wick",
    src: "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profile:
      "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Martini Wick",
    src: "https://images.pexels.com/photos/2419574/pexels-photo-2419574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profile:
      "https://images.pexels.com/photos/2419574/pexels-photo-2419574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Mari Wick",
    src: "https://images.pexels.com/photos/3750717/pexels-photo-3750717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profile:
      "https://images.pexels.com/photos/3750717/pexels-photo-3750717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Mac Wick",
    src: "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profile:
      "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <div
          key={story.id}
          className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x-auto p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse"
        >
          <Image
            className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
            src={story.profile}
            width={40}
            height={40}
            alt="Picture"
            layout="fixed"
            objectFit="cover"
          />
          <Image
            className="object-cover filter brightness-75 rounded-full lg:rounded-3xl "
            src={story.src}
            alt="Picture"
            layout="fill"
          />
          <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate">
            {story.name}
          </p>
                {/* {stories.map((story) => {
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />;
      })} */}
        </div>
      ))}
    </div>
  );
};

export default Stories;
