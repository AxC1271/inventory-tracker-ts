import { MantineProvider } from "@mantine/core";
import { Login } from "./assets/Components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./assets/Pages/Dashboard/Dashboard";
import Settings from "./assets/Pages/Settings/Settings";
import Orders from "./assets/Pages/Orders/Orders";
import Analytics from "./assets/Pages/Analytics/Analytics";
import Releases from "./assets/Pages/Releases/Releases";
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
          <Route 
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
           />
           <Route 
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
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
          path="/releases"
          element={
            <PrivateRoute>
              <Releases />
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

