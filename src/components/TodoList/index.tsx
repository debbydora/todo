type TodoProps = {
  tasks: any;

  toggleTask: (index:number) => void;
  index: number;
};

const TodoList = ({ tasks, toggleTask, index }: TodoProps) => {
  console.log(index, "list index");
  return (
    <div className="bg-white shadow-listShadow px-4 flex justify-between items-center rounded-md w-[382px] h-[91px]">
      {/* <input type="checkbox" /> */}
      <div className="flex items-center contain">
        <input
          type="checkbox"
          id={`myCheckbox-${index}`}
          className="hidden dinput"
          checked={tasks?.completed}
          onChange={() => toggleTask(index)}
        />
        <label
          htmlFor={`myCheckbox-${index}`}
          className="flex items-center cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full  border-[1.5px] border-[#071D55] flex items-center justify-center mr-2">
            <svg
              className="fill-current hidden w-4 h-4 text-gray-500 font-thin pointer-events-none"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          </div>
          <p
            className={`${
              tasks?.completed
                ? "line-through  text-[#8D8D8D] font-normal"
                : "text-[#071D55]"
            }text-base  font-medium`}
          >
            {tasks?.text}
          </p>
        </label>
      </div>

      <button className="text-base text-[#071D55] font-medium border-2 border-[#071D55] p-3 rounded-md">
        Edit
      </button>
    </div>
  );
};

export default TodoList;
