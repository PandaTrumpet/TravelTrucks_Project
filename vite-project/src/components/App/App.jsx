import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "../Layout/Layout.jsx";

const HomePage = lazy(() => import("../../Pages/Home.jsx"));

const CatalogPage = lazy(() =>
  import("../../Pages/CatalogPage/CatalogPage.jsx")
);

const NotFoundPage = lazy(() =>
  import("../../Pages/NotFoundPage/NotFoundPage.jsx")
);
const VafouriteCarsPage = lazy(() =>
  import("../../Pages/VafouriteCarsPage/VafouriteCarsPage.jsx")
);
const CatalogCamper = lazy(() =>
  import("../../Pages/CatalogCamper/CatalogCamper.jsx")
);

const Features = lazy(() => import("../Features/Features.jsx"));
// import Reviews from "../Reviews/Reviews.jsx";
const Reviews = lazy(() => import("../Reviews/Reviews.jsx"));
export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CatalogCamper />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/favourite" element={<VafouriteCarsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}
