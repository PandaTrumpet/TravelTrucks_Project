import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import HomePage from "../../Pages/Home.jsx";
import CatalogPage from "../../Pages/CatalogPage/CatalogPage.jsx";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage.jsx";
import CatalogCamper from "../../Pages/CatalogCamper.jsx";
export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CatalogCamper />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}
