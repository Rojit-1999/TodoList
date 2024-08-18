import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { sideNavData } from "../Data";
import { Link } from "react-router-dom";

export default function Task() {
  return (
    <div className="py-[1.5rem] border-b-[2px] border-black/5">
      <h1 className="text-[#4d4d4d] font-[700] text-[0.8rem] mb-2">TASKS</h1>
      {sideNavData.map((task) => (
        <Link to={task.link}>
          <ul className="py-[0.5rem]">
            <div className="flex items-center  justify-between">
              <li className="flex items-center gap-[5px] text-[#5c5c5c]">
                {task.icon}
                <h1 className="text-[0.8rem] font-[500]">{task.heading}</h1>
              </li>
              {/* <h1>{task.number}</h1> */}
            </div>
          </ul>
        </Link>
      ))}
    </div>
  );
}
