/* ============================================================
   App.tsx – DN AirTecH GmbH
   Design: "Thermal Precision" – Industrial Neo-Futurism 2040
   Theme: Dark (deep space background)
   ============================================================ */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import Home from "./pages/Home";
import Waermepumpen from "./pages/Waermepumpen";
import Klimageraete from "./pages/Klimageraete";
import Ventilation from "./pages/Ventilation";
import Sanitaer from "./pages/Sanitaer";
import Referenzprojekte from "./pages/Referenzprojekte";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/waermepumpen" component={Waermepumpen} />
      <Route path="/klimageraete" component={Klimageraete} />
      <Route path="/ventilation" component={Ventilation} />
      <Route path="/sanitaer" component={Sanitaer} />
      <Route path="/referenzprojekte" component={Referenzprojekte} />
      <Route path="/kontakt" component={Kontakt} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/datenschutz" component={Datenschutz} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <CookieBanner />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
