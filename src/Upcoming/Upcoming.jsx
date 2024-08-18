import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import {
  upcomingTodayData,
  upcomingTomorrowData,
  upcomingThisWeek,
} from "../Data";

function Upcoming() {
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
      <div className="border-[1px] p-[1.5rem] rounded-[10px] border-opacity-100">
        <h1 className="font-[600] text-[1.2rem]">Today</h1>
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
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b-[1px]  mt-[1rem] py-[0.5rem]"
            >
              <div className="flex items-center gap-[10px]">
                <input type="checkbox" />
                {todo}
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="bg-blue-300/50 px-[5px] rounded-[6px]"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {upcomingTodayData.map((upcomingtoday,index) => (
          <div className="text-[#363636] flex items-center justify-between py-[0.7rem] border-b-[1px]  mt-[1rem]">
            <div className="flex items-center gap-[10px] ">
              {upcomingtoday.check}
              <p>{upcomingtoday.text}</p>
            </div>
            <div>
             
              <button
                onClick={() => handleDelete(index)}
                className="bg-blue-300/50 px-[5px] rounded-[6px]"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[2rem] flex items-start gap-[1.5rem]  justify-between">
        <div className="border-[1px] w-screen p-[1.5rem] rounded-[10px] border-opacity-100">
          <h1 className="text-[1.2rem] font-[600]">Tomorrow</h1>
          <div
            className="flex items-center gap-[14px]  text-[#6d6d6d] mt-[12px]
                        rounded-[10px] pl-[14px] bg-black/5 mb-[8px]"
          >
            <FaPlus />
            <input
              type="text"
              placeholder=" Add new task"
              className=" py-[0.8rem] bg-transparent outline-none"
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
        </div>
        <div className="border-[1px] w-screen p-[1.5rem] rounded-[10px] border-opacity-100">
          <h1 className="text-[1.2rem] font-[600]">Next Week</h1>
          <div
            className="flex items-center gap-[14px]  text-[#6d6d6d] mt-[12px]
                        rounded-[10px] pl-[14px] bg-black/5 mb-[8px]"
          >
            <FaPlus />
            <input
              type="text"
              placeholder=" Add new task"
              className=" py-[0.8rem] bg-transparent outline-none"
            />
          </div>
          {upcomingThisWeek.map((upcomingtoday) => (
            <div className="text-[#363636] flex items-center justify-between py-[0.7rem] border-b-[1px]  mt-[1rem]">
              <div className="flex items-center gap-[10px] ">
                {upcomingtoday.check}
                <p>{upcomingtoday.text}</p>
              </div>
              <div>{upcomingtoday.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
