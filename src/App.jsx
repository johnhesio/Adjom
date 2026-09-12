import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Sites from "./pages/Sites";
import Sistemas from "./pages/Sistemas";
import AutomacaoIA from "./pages/AutomacaoIA";
import Branding from "./pages/Branding";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/layout/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sites" element={<Sites />} />
          <Route path="/sistemas" element={<Sistemas />} />
          <Route path="/automacao-ia" element={<AutomacaoIA />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
