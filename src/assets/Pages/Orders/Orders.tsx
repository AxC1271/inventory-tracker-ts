import React from 'react';
import { NavbarMinimal } from '../../Components/Navbar/NavbarMinimal.tsx';
import { TableSort } from '../../Components/TableSort/TableSort.tsx';
import './Orders.module.css';

const Orders: React.FC = () => {
    return (
        <div className="orders-container">
            <NavbarMinimal />
            <TableSort/>
            <div className="orders-content">
            </div>
        </div>
    );
};

export default Orders;