import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Service Pages
import SoftwareAMedida from "./pages/services/SoftwareAMedida";
import BrandingRedesSociales from "./pages/services/BrandingRedesSociales";
import AutomatizacionesIA from "./pages/services/AutomatizacionesIA";
import AgentesIA from "./pages/services/AgentesIA";
import AgentesIAAvanzados from "./pages/services/AgentesIAAvanzados";
import SistemasGestion from "./pages/services/SistemasGestion";
import TarjetaDigital from "./pages/services/TarjetaDigital";
import DisenoWebApp from "./pages/services/DisenoWebApp";
import MentoriaCapacitacion from "./pages/services/MentoriaCapacitacion";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Service Routes - SEO Optimized URLs */}
          <Route path="/diseno-software-medida-premium-calgary" element={<SoftwareAMedida />} />
          <Route path="/branding-estrategia-redes-sociales-calgary" element={<BrandingRedesSociales />} />
          <Route path="/automatizaciones-ia-operaciones-calgary" element={<AutomatizacionesIA />} />
          <Route path="/creacion-agentes-ia-inteligencia-calgary" element={<AgentesIA />} />
          <Route path="/agentes-ia-avanzados-calgary" element={<AgentesIAAvanzados />} />
          <Route path="/sistemas-gestion-operaciones-calgary" element={<SistemasGestion />} />
          <Route path="/tarjeta-digital-profesional-calgary" element={<TarjetaDigital />} />
          <Route path="/diseno-web-app-movil-calgary" element={<DisenoWebApp />} />
          <Route path="/mentoria-capacitacion-digital-calgary" element={<MentoriaCapacitacion />} />
          
          {/* Legacy Routes - Redirects for old URLs */}
          <Route path="/servicios/software-medida" element={<SoftwareAMedida />} />
          <Route path="/servicios/branding-redes" element={<BrandingRedesSociales />} />
          <Route path="/servicios/automatizaciones-ia" element={<AutomatizacionesIA />} />
          <Route path="/servicios/agentes-ia" element={<AgentesIA />} />
          <Route path="/servicios/sistemas-gestion" element={<SistemasGestion />} />
          <Route path="/servicios/tarjeta-digital" element={<TarjetaDigital />} />
          <Route path="/servicios/diseno-web-app" element={<DisenoWebApp />} />
          <Route path="/servicios/mentoria-capacitacion" element={<MentoriaCapacitacion />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;