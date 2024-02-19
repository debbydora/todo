"use client";

import {  useState } from "react";

const useTodo = () => {
  const initialState = [
    { text: "Training at the Gym", completed: true },
    { text: "Play Paddle with friends", completed: false },
    { text: "Burger BBQ with family", completed: false },
  ];

  const [tasks, setTasks] = useState(initialState);
  const [inputValue, setInputValue] = useState("");
  const [addToggle, setAdd] = useState(true);
  const [editToggle, setEdit] = useState(false);
  const [saveIndex, setSaveIndex] = useState<number | null>(null);

  const toggleTask = (index: number) => {
    setSaveIndex(index);
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const addTask = () => {
    if (inputValue.trim() !== "") {
        setTasks((prev) => [...prev, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const editTask = (index: number | null, newText: any) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    setInputValue("");
    setSaveIndex(null);
  };

  const deleteTask = (index: number | null) => {
    setTasks(tasks.filter((_, i) => i !== index));
    setEdit(false);
  };

  return {
    toggleTask,
    addTask,
    inputValue,
    setInputValue,
    addToggle,
    setAdd,
    editTask,
    saveIndex,
    setSaveIndex,
    deleteTask,
    editToggle,
    setEdit,
    tasks,
  };
};

export default useTodo;
