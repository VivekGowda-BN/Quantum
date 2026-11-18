import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import Layout from "@/components/Layout";
import { Toaster } from "@/components/ui/sonner";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Resources from "@/pages/Resources";
import Updates from "@/pages/Updates";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/updates" element={<Updates />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
          <Toaster
            position="bottom-right"
            toastOptions={{
              classNames: {
                toast:
                  "!rounded-sm !border !border-border !bg-background !text-foreground",
              },
            }}
          />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
