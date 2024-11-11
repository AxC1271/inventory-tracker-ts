import React from 'react';
import { NavbarMinimal } from '../../Components/Navbar/NavbarMinimal.tsx';
import { TableSort } from '../../Components/TableSort/TableSort.tsx';
import { ButtonMenu } from '../../Components/ButtonMenu/ButtonMenu.tsx';
import './Orders.module.css';

const Orders: React.FC = () => {
    return (
        <div className="orders-container">
            <NavbarMinimal />
            <TableSort />
            <ButtonMenu />
        </div>
    );
};

export default Orders;