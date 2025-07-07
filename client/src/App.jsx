import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import Mainlayout from "./layouts/mainlayout";
import Home from "./pages/Home";
import Login from "./pages/login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/About";
import FAQPage from "./pages/FAQ";
import EvaluationForm from "./pages/evaluate";
import ReviewsPage from "./pages/AllReviews";
import RankingPage from "./pages/Ranking";
import PrivacyPolicy from "./pages/PrivacyPage";
import EvaluationPage from "./pages/EvaluationPage";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYouPage";

function App() {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          {/* Public Routes */}
          <Route element={<Mainlayout />}>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<AboutUs />} />
            <Route path="/FAQ" element={<FAQPage />} />
            <Route path="/Evaluate" element={<EvaluationForm />} />
            <Route path="/Reviews" element={<ReviewsPage />} />
            <Route path="/Rankings" element={<RankingPage />} />
            <Route path="/Policy" element={<PrivacyPolicy />} />
            <Route path="/Evaluation" element={<EvaluationPage />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/admin" element={<Login />} />
            <Route path="/ThankYou" element={<ThankYou />} />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
