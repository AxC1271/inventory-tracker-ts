import React from 'react';
import { NavbarMinimal } from '../../Components/Navbar/NavbarMinimal.tsx';
import { ContactUs } from '../../Components/ContactUs/ContactUs.tsx';
import './ContactPage.module.css';

const Settings: React.FC = () => {
    return (
        <div className="settings-container">
            <NavbarMinimal />
            <div className="settings-content">
                <ContactUs />
            </div>
        </div>
    );
};

export default Settings;