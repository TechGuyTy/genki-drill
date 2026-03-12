import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./routes/HomePage";
import { LessonPage } from "./routes/LessonPage";
import { StudyPage } from "./routes/StudyPage";
import { ReviewPage } from "./routes/ReviewPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lessons/:lessonId" element={<LessonPage />} />
        <Route path="/study/:lessonId/:mode" element={<StudyPage />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
    </HashRouter>
  );
}
