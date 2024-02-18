"use client";

import trophyIcon from "../../../public/icons/trophy.svg";
import profileIcon from "../../../public/icons/profile.svg";
import Image from "next/image";
import TodoList from "../TodoList";
import add from "../../../public/icons/+.svg";
import useTodo from "@/hooks/useTodo";

const Todp = () => {
  const { tasks, toggleTask, addTask } = useTodo();
  // w-[40%]
  return (
    <div className="h-screen flex flex-col w-[414px] z-10 bg-[#F3F3F3] relative">
      <div className="bg-[#3556AB] h-[123px] px-10 py-5 flex gap-x-4 items-start shadow-navShadow">
        <Image src={profileIcon} alt="profile icon" priority />
        <div className="text-white flex flex-col gap-1">
          <p className="text-base !font-medium">Hello jonh</p>
          <p className="italic text-[25px] font-thin w-[90%] leading-[27px]">
            What are your plans for today?
          </p>
        </div>
      </div>
      <div className="bg-[#9EB031] p-[3px]">
        <div className="bg-[#CDE53D] px-10 py-5 flex gap-x-4 h-[123px] items-center relative  border-t-2 border-white">
          <Image src={trophyIcon} alt="trophy" priority />
          <p
            className="text-[18px] font-bold text-[#071D55]
"
          >
            Go Pro Upgrade Now
          </p>
          <div className="bg-[#071D55] p-6 absolute right-5 -top-1.5">
            <p className="font-500 text-yellow-500 text-[18px]">$1</p>
          </div>
        </div>
      </div>
      <div className="shadow-listShadow relative h-full">
        <div className="flex flex-col px-4 mt-4 gap-3">
          {tasks.map((task: any, index: number) => (
            <TodoList
              key={index}
              tasks={task}
              toggleTask={toggleTask}
              index={index}
            />
          ))}
        </div>
        <div className="absolute bottom-3 right-3">
          <button
            className="bg-[#3556AB] border-2 border-[#123EB1] flex justify-center items-center rounded-[100px] text-lg font-bold text-white h-[61px] w-[61px]">
            <Image src={add} alt="add" priority />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todp;
