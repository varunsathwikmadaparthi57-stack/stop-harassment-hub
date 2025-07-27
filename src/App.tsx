import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BeatingApps from "./pages/BeatingApps";
import FakeLoanApps from "./pages/FakeLoanApps";
import LoanApps from "./pages/LoanApps";
import Emergency from "./pages/Emergency";
import News from "./pages/News";
import BookSlot from "./pages/BookSlot";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beating-apps" element={<BeatingApps />} />
          <Route path="/fake-loan-apps" element={<FakeLoanApps />} />
          <Route path="/loan-apps" element={<LoanApps />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/news" element={<News />} />
          <Route path="/book-slot" element={<BookSlot />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Emergency />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
