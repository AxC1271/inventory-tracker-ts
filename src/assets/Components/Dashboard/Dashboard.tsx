import React from 'react';
import { NavbarMinimal } from '../Navbar/NavbarMinimal.tsx';
import './Dashboard.module.css';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-container">
            <NavbarMinimal />
            <div className="dashboard-content">
                <h1>Dashboard</h1>
                <p>Welcome to the dashboard!</p>
            </div>
        </div>
    );
};

export default Dashboard;