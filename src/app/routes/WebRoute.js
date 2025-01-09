import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vocabulary from "../pages/Vocabulary/Vocabulary";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Grammar from "../pages/Grammar/Grammar";
import Video from "../pages/Video/Video";
import Practice from "../pages/Practice/Practice";

function WebRoute() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/vocabulary" element={<Vocabulary />} />
            <Route path="/grammar" element={<Grammar />} />
            <Route path="/video" element={<Video />} />
            <Route path="/practice" element={<Practice />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default WebRoute;
