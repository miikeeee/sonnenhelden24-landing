import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SolaranlagePage from "./pages/SolaranlagePage";
import SolaranlageListPage from "./pages/SolaranlageListPage";
import RatgeberPage from "./pages/RatgeberPage";
import RatgeberListPage from "./pages/RatgeberListPage";
import ImpressumPage from "./pages/ImpressumPage";
import DatenschutzPage from "./pages/DatenschutzPage";
import AgbPage from "./pages/AgbPage";
import NotFound from "./pages/NotFound";
import KontaktPage from "./pages/KontaktPage";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CookieBanner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solaranlage" element={<SolaranlageListPage />} />
          <Route path="/solaranlage/:slug" element={<SolaranlagePage />} />
          <Route path="/solaranlage/:city/:district" element={<SolaranlagePage />} />
          <Route path="/ratgeber" element={<RatgeberListPage />} />
          <Route path="/ratgeber/:slug" element={<RatgeberPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
          <Route path="/agb" element={<AgbPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
