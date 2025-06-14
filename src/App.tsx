
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import InfoKedinasan from "./pages/InfoKedinasan";
import Blog from "./pages/Blog";
import DatabaseSoal from "./pages/DatabaseSoal";
import VideoLearning from "./pages/VideoLearning";
import Tryout from "./pages/Tryout";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/info-kedinasan" element={<InfoKedinasan />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/database-soal" element={<DatabaseSoal />} />
          <Route path="/video-pembelajaran" element={<VideoLearning />} />
          <Route path="/tryout" element={<Tryout />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
