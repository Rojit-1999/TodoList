import React, { Children } from "react";
import SideMenue from "./SideMenue/SideMenue";

function Layout({ children }) {
  return (
    <div className="flex px-[1.5rem] pt-[1rem] h-full w-full fixed  ">
      <SideMenue />
      <div className="h-screen mt-2 w-full overflow-y-scroll px-[2rem] ">{children}</div>
    </div>
  );
}

export default Layout;
