
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnalyticsTracker } from "./components/AnalyticsTracker";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Bootcamp from "./pages/Bootcamp";
import BootcampOferta from "./pages/BootcampOferta";
import BootcampV3 from "./pages/BootcampV3";
import BootcampLanding from "./pages/BootcampLanding";
import BootcampIA from "./pages/BootcampIA";
import Masterclass from "./pages/Masterclass";
import MasterclassGratuita from "./pages/MasterclassGratuita";
import CursorAIClass from "./pages/CursorAIClass";
import CursoInicia from "./pages/CursoInicia";
import Hackatones from "./pages/Hackatones";
import BootcampAplicar from "./pages/BootcampAplicar";
import Aplicar from "./pages/Aplicar";
import BootcampQuieroCrearConIA from "./pages/BootcampQuieroCrearConIA";
import PostAplicacion from './pages/PostAplicacion';
import PostAplicacionOrganico from './pages/PostAplicacionOrganico';
import FormularioBootcamp from './pages/FormularioBootcamp';
import Checkout from "./pages/Checkout";
import IaParaTodos from "./pages/IaParaTodos";
import IaParaTodosGracias from "./pages/IaParaTodosGracias";
import IaParaTodosEntrada from "./pages/IaParaTodosEntrada";
import ClaseGratuitaIA from "./pages/ClaseGratuitaIA";
import ClaseHerramientasApp from "./pages/ClaseHerramientasApp";
import GuiaPrd from "./pages/GuiaPrd";

import AdminLayout from "./components/admin/AdminLayout";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminHub from "./pages/admin/AdminHub";
import CohortesManager from "./pages/admin/CohortesManager";
import LeadsManager from "./pages/admin/LeadsManager";
import ClasesManager from "./pages/admin/ClasesManager";

import Links from "./pages/Links";
import DynamicLeadMagnet from "./pages/DynamicLeadMagnet";

// TikTok Funnel Pages
import BootcampTikTok from "./pages/tiktok/BootcampTikTok";
import BootcampAplicarTikTok from "./pages/tiktok/BootcampAplicarTikTok";
import PostAplicacionTikTok from "./pages/tiktok/PostAplicacionTikTok";
import ClaseGratuitaIATikTok from "./pages/tiktok/ClaseGratuitaIATikTok";
import LinksTikTok from "./pages/tiktok/LinksTikTok";
import { Analytics } from "@vercel/analytics/react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsTracker />
        <Analytics />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/bootcamp-oferta" element={<BootcampOferta />} />
          <Route path="/bootcamp-v3" element={<BootcampV3 />} />
          <Route path="/bootcamp-landing" element={<BootcampLanding />} />
          <Route path="/bootcamp-ia" element={<BootcampIA />} />
          <Route path="/ia-para-todos" element={<IaParaTodos />} />
          <Route path="/ia-para-todos/gracias" element={<IaParaTodosGracias />} />
          <Route path="/ia-para-todos/entrada/:id" element={<IaParaTodosEntrada />} />
          <Route path="/bootcamp/aplicar" element={<BootcampAplicar />} />
          <Route path="/aplicar" element={<Aplicar />} />
          <Route path="/bootcamp/quiero-crear-con-ia" element={<BootcampQuieroCrearConIA />} />
          <Route path="/curso-inicia" element={<CursoInicia />} />
          <Route path="/hackatones" element={<Hackatones />} />
          <Route path="/masterclass" element={<Masterclass />} />
          <Route path="/masterclsacaass-gratuita" element={<MasterclassGratuita />} />
          <Route path="/cursor-ai-class" element={<CursorAIClass />} />

          <Route path="/post-aplicacion" element={<PostAplicacion />} />
          <Route path="/post-aplicacion-organico" element={<PostAplicacionOrganico />} />
          <Route path="/formulario-bootcamp" element={<FormularioBootcamp />} />
          <Route path="/clase-gratuita-ia" element={<ClaseGratuitaIA />} />
          <Route path="/clase-herramientas-app" element={<ClaseHerramientasApp />} />
          <Route path="/guia-prd" element={<GuiaPrd />} />
          <Route path="/clase/:slug" element={<DynamicLeadMagnet />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/links" element={<Links />} />

          {/* TikTok Funnel Routes */}
          <Route path="/tiktok/clase-gratuita-ia" element={<ClaseGratuitaIATikTok />} />
          <Route path="/tiktok/bootcamp" element={<BootcampTikTok />} />
          <Route path="/tiktok/bootcamp/aplicar" element={<BootcampAplicarTikTok />} />
          <Route path="/tiktok/post-aplicacion" element={<PostAplicacionTikTok />} />
          <Route path="/tiktok/links" element={<LinksTikTok />} />


          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHub />} />
            <Route path="cohortes" element={<CohortesManager />} />
            <Route path="leads" element={<LeadsManager />} />
            <Route path="clases" element={<ClasesManager />} />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
