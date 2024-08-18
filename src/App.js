import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Upcoming from "./Upcoming/Upcoming";
import Today from "./Today/Today";
import StickyWall from "./Sticky/StickyWall";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Upcoming />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/today" element={<Today />} />
          <Route path="/Sticky" element={<StickyWall />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
