import React from 'react';
import { NavbarMinimal } from '../../Components/Navbar/NavbarMinimal.tsx';
import './Settings.module.css';

const Settings: React.FC = () => {
    return (
        <div className="settings-container">
            <NavbarMinimal />
            <div className="settings-content">
                <h1>Settings</h1>
                <p>Welcome to settings!</p>
            </div>
        </div>
    );
};

export default Settings;