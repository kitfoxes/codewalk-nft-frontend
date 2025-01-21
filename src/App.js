import "./App.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Marketplace from "./pages/Marketplace";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import ProtectedRoute from "./auth/ProtectedRoute";
import { AuthProvider } from "./auth/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Theme appearance="light">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Marketplace />} />
              <Route
                path="/create"
                element={
                  <ProtectedRoute activePage={1}>
                    <Create />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute activePage={2}>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="/nft/:address" element={<Product />} />
            </Routes>
          </BrowserRouter>
        </Theme>
      </AuthProvider>
    </>
  );
}

export default App;
