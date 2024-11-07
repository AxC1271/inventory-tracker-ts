import { NavbarMinimal } from "../../Components/Navbar/NavbarMinimal.tsx";
import "./Releases.module.css";

const Releases: React.FC = () => {
  return (
    <div className="dashboard-container">
      <NavbarMinimal />
      <div className="dashboard-content">
        <h1>Releases</h1>
        <p>Welcome to the releases!</p>
      </div>
    </div>
  );
};

export default Releases;
