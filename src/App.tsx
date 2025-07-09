
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Bootcamp from "./pages/Bootcamp";
import Masterclass from "./pages/Masterclass";
import MasterclassGratuita from "./pages/MasterclassGratuita";
import Campus from "./pages/Campus";
import CursoInicia from "./pages/CursoInicia";
import Hackatones from "./pages/Hackatones";

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
          <Route path="/curso-inicia" element={<CursoInicia />} />
          <Route path="/hackatones" element={<Hackatones />} />
          <Route path="/masterclass" element={<Masterclass />} />
          <Route path="/masterclass-gratuita" element={<MasterclassGratuita />} />
          <Route path="/campus" element={<Campus />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
