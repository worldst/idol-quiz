import { Navigate, Route, Routes } from "react-router";

import RootLayout from "@/layouts/RootLayout";
import AboutPage from "@/pages/AboutPage";
import IdolBookPage from "@/pages/IdolBookPage";
import IdolQuizPage from "@/pages/IdolQuizPage";
import MainPage from "@/pages/MainPage";
import StatsPage from "@/pages/StatsPage";

const RootRoutes = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/idol-quiz" element={<IdolQuizPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/idol-book" element={<IdolBookPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>

      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default RootRoutes;
