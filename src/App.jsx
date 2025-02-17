import MediaPage from "./Pages/MediaPage";
import NoPage from "./Pages/Nopage";
import Layout from "./Pages/Layout";
import CastPage from "./Pages/CastPage";
import MediaDetailsPage from "./Pages/MediaDetailsPage";
import CastDetailsPage from "./Pages/CastDetailsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MediaPage type={"movie"} />} />
          <Route path="/movie/:id" element={<MediaPage type={"movie"} />} />
          <Route path="/tv/:id" element={<MediaPage type={"tv"} />} />
          <Route path="/detailVideo/movie/:id" element={<MediaDetailsPage />} />
          <Route path="/detailVideo/tv/:id" element={<MediaDetailsPage />} />
          <Route path="/person" element={<CastPage />} />
          <Route path="/person/:id" element={<CastDetailsPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
