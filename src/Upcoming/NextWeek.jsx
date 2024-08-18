import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { upcomingTomorrowData } from "../Data";

function NextWeek() {

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit() {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]);
      setInputValue("");
    }
  }

  function handleDelete(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div>
      <div className="border-[1px] w-screen p-[1.5rem] rounded-[10px] border-opacity-100">
        <h1 className="text-[1.2rem] font-[600]">Tomorrow</h1>
        <div
          className="flex items-center gap-[14px]  text-[#6d6d6d] mt-[12px]
                        rounded-[10px] pl-[14px] bg-black/5 mb-[8px]"
        >
          <FaPlus onClick={handleSubmit} className="hover:cursor-pointer" />
          <input
            type="text"
            placeholder=" Add new task"
            className=" py-[0.8rem] bg-transparent outline-none"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        {upcomingTomorrowData.map((upcomingtoday) => (
          <div className="text-[#363636] flex items-center justify-between py-[0.7rem] border-b-[1px]  mt-[1rem]">
            <div className="flex items-center gap-[10px] ">
              {upcomingtoday.check}
              <p>{upcomingtoday.text}</p>
            </div>
            <div>{upcomingtoday.icon}</div>
          </div>
        ))}

        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b-[1px]  mt-[1rem] py-[0.5rem]"
            >
              {todo}
              <button
                onClick={() => handleDelete(index)}
                className="bg-blue-300/50 px-[5px] rounded-[6px]"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NextWeek;
