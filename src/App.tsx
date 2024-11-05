import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Routes, Route } from 'react-router-dom';
import { Login } from './assets/Components/Login/Login';
import Dashboard from './assets/Pages/Dashboard/Dashboard';
import Settings from './assets/Pages/Settings/Settings';

import './App.css';

const App: React.FC = () => {
    return (
        <MantineProvider defaultColorScheme='dark'>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </MantineProvider>
    );
};

export default App;