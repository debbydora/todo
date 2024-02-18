"use client";

import { useState } from "react";

const useTodo = () => {
  const [tasks, setTasks] = useState([
    { text: "Training at the Gym", completed: false },
    { text: "Play Paddle with friends", completed: false },
    { text: "Burger BBQ with family", completed: false },
  ]);
    const [inputValue, setInputValue] = useState("");
    const [add,setAdd] = useState(false)
    
  const toggleTask = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
      setTasks(updatedTasks);
    };
    
  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue("");
      }
      
  };
  console.log(tasks, "taska");
  return {
    tasks,
    toggleTask,
      addTask,
    inputValue,
      setInputValue,
      add,
    setAdd
  };
};

export default useTodo;
