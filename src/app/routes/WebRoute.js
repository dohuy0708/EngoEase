import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vocabulary from "../pages/Vocabulary/Vocabulary";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Grammar from "../pages/Grammar/Grammar";
import Video from "../pages/Video/Video";
import Practice from "../pages/Practice/Practice";
import Lesson from "../pages/Lesson";
import LessonDetail from "../pages/Grammar/partials/LessionDetails";
import Profile from "../pages/Profile/Profile";

function WebRoute() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/vocabulary" element={<Vocabulary />} />
            <Route path="/grammar" element={<Grammar />} />
            <Route path="/grammar/:lessonId" element={<LessonDetail />} />
            <Route path="/video" element={<Video />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/lesson" element={<Lesson />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default WebRoute;
