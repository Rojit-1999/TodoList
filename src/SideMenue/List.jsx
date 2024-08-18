import React from "react";
import { listData } from "../Data";

function ListSection() {
  return (
    <div className="py-[1rem]">
      <div>
        <h1 className="text-[#4d4d4d] font-[700] text-[0.8rem] mb-2">TASKS</h1>
        {listData.map((list) => (
          <ul className="py-[0.5rem]">
            <div className="flex items-center  justify-between">
              <li className="flex items-center gap-[5px] text-[#5c5c5c]">
                {list.div}
                <h1 className="text-[0.8rem] font-[500]">{list.text}</h1>
              </li>
              {/* <h1>{task.number}</h1> */}
            </div>
          </ul>
        ))}{" "}
      </div>
    </div>
  );
}

export default ListSection;
