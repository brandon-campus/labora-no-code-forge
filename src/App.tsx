
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Bootcamp from "./pages/Bootcamp";
import BootcampV3 from "./pages/BootcampV3";
import BootcampLanding from "./pages/BootcampLanding";
import BootcampIA from "./pages/BootcampIA";
import Masterclass from "./pages/Masterclass";
import MasterclassGratuita from "./pages/MasterclassGratuita";
import CursorAIClass from "./pages/CursorAIClass";
import Campus from "./pages/Campus";
import CursoInicia from "./pages/CursoInicia";
import Hackatones from "./pages/Hackatones";
import BootcampAplicar from "./pages/BootcampAplicar";
import BootcampQuieroCrearConIA from "./pages/BootcampQuieroCrearConIA";
import CursoCampusPage from "./pages/CursoCampus";
import RegistroCurso from "./pages/RegistroCurso";
import OnboardingCurso from "./pages/OnboardingCurso";
import LoginCurso from "./pages/LoginCurso";
import PostAplicacion from './pages/PostAplicacion';
import FormularioBootcamp from './pages/FormularioBootcamp';
import IaParaTodos from "./pages/IaParaTodos";
import IaParaTodosGracias from "./pages/IaParaTodosGracias";
import IaParaTodosEntrada from "./pages/IaParaTodosEntrada";
import ClaseGratuitaIA from "./pages/ClaseGratuitaIA";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/bootcamp-v3" element={<BootcampV3 />} />
          <Route path="/bootcamp-landing" element={<BootcampLanding />} />
          <Route path="/bootcamp-ia" element={<BootcampIA />} />
          <Route path="/ia-para-todos" element={<IaParaTodos />} />
          <Route path="/ia-para-todos/gracias" element={<IaParaTodosGracias />} />
          <Route path="/ia-para-todos/entrada/:id" element={<IaParaTodosEntrada />} />
          <Route path="/bootcamp/aplicar" element={<BootcampAplicar />} />
          <Route path="/bootcamp/quiero-crear-con-ia" element={<BootcampQuieroCrearConIA />} />
          <Route path="/curso-inicia" element={<CursoInicia />} />
          <Route path="/hackatones" element={<Hackatones />} />
          <Route path="/masterclass" element={<Masterclass />} />
          <Route path="/masterclsacaass-gratuita" element={<MasterclassGratuita />} />
          <Route path="/cursor-ai-class" element={<CursorAIClass />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/login-curso" element={<LoginCurso />} />
          <Route path="/registro-curso" element={<RegistroCurso />} />
          <Route path="/onboarding-curso" element={<OnboardingCurso />} />
          <Route path="/curso-campus" element={<CursoCampusPage />} />
          <Route path="/post-aplicacion" element={<PostAplicacion />} />
          <Route path="/formulario-bootcamp" element={<FormularioBootcamp />} />
          <Route path="/clase-gratuita-ia" element={<ClaseGratuitaIA />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
