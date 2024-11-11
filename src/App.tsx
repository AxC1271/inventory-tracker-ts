import { MantineProvider } from "@mantine/core";
import { Login } from "./assets/Components/Login/Login";
import { ForgotPassword } from "./assets/Components/ForgotPassword/ForgotPassword";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./assets/Pages/Dashboard/Dashboard";
import ContactPage from "./assets/Pages/ContactPage/ContactPage";
import Orders from "./assets/Pages/Orders/Orders";
import Analytics from "./assets/Pages/Analytics/Analytics";
import Inventory from "./assets/Pages/Inventory/Inventory";
import Account from "./assets/Pages/Account/Account";
import { AuthProvider } from "../src/auth/AuthContext";
import "@mantine/core/styles.css";
import "./App.css";


const App: React.FC = () => {
  return (
    <MantineProvider defaultColorScheme="dark">
      <AuthProvider>
        <Router>
          <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route 
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
           />
           <Route 
          path="/contact-us"
          element={
            <PrivateRoute>
              <ContactPage />
            </PrivateRoute>
          }
           />
           <Route 
          path="/orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
           />
           <Route 
          path="/analytics"
          element={
            <PrivateRoute>
              <Analytics />
            </PrivateRoute>
          }
           />
           <Route 
          path="/inventory"
          element={
            <PrivateRoute>
              <Inventory />
            </PrivateRoute>
          }
           />
           <Route 
          path="/account"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
           />
          </Routes>
        </Router>
      </AuthProvider>
    </MantineProvider>
  );
};

export default App;

