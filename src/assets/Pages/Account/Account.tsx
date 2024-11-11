import { NavbarMinimal } from "../../Components/Navbar/NavbarMinimal.tsx";
import "./Account.module.css";

const Account: React.FC = () => {
  return (
    <div className="dashboard-container">
      <NavbarMinimal />
      <div className="dashboard-content">
        <h1>Account</h1>
        <p>Welcome to your account!</p>
      </div>
    </div>
  );
};

export default Account;