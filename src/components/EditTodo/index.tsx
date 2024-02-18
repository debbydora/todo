"use client";
import useTodo from "@/hooks/useTodo";

const EditTodo = () => {
  const { addTask, inputValue, setInputValue } = useTodo();
  return (
    <div className="w-full relative">
      <div className="bg-[#3556AB] h-[123px] w-full px-10 py-5 flex justify-center items-center shadow-navShadow ">
        <p className="font-500 text-white text-2xl">Edit Task</p>
      </div>
      <div className="p-4 relative">
        <div className=" mt-2 flex flex-col gap-3">
          <p className="text-base font-normal">Task Name</p>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            className="bg-white w-[80%] rounded-[9px] border-2 border-[#CBCBCB] h-[69px] outline-none p-3"
          />
        </div>
      </div>
      <div className="absolute bottom-3 left-4 flex gap-x-6 text-white text-lg w-[90%]">
        <button className="bg-[#AB3535] border-2 border-[#720D0D] rounded-[6px] px-5 py-4 shadow-listShadow">
          Delete
        </button>
        <button
          onClick={addTask}
          className="bg-[#3556AB] border-2 border-[#0D2972] rounded-[6px] px-5 py-4 w-full shadow-navShadow"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditTodo;
