import React from "react";
import TopSection from "./TopSection";
import Task from "./Task";
import ListSection from "./List";
import Footer from "./Footer";

function SideMenue() {
  return (
    <div className="bg-[#f2f2f2] px-[1rem] max-w-[16rem] rounded-[10px] h-screen">
      <TopSection />
      <Task />
      <ListSection />
      <div className="absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default SideMenue;
