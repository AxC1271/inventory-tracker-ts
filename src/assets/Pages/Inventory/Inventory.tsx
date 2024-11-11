import { NavbarMinimal } from "../../Components/Navbar/NavbarMinimal.tsx";
import "./Inventory.module.css";

const Inventory: React.FC = () => {
  return (
    <div className="dashboard-container">
      <NavbarMinimal />
      <div className="dashboard-content">
        <h1>Inventory</h1>
        <p>Welcome to the inventory!</p>
      </div>
    </div>
  );
};

export default Inventory;
