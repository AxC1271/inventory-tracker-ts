import { useState, useEffect } from 'react';
import { NavbarMinimal } from '../../Components/Navbar/NavbarMinimal.tsx';
import { TableSort } from '../../Components/TableSort/TableSort.tsx';
import { ButtonMenu } from '../../Components/ButtonMenu/ButtonMenu.tsx';
import CreateOrderModal from "../../Components/CreateOrderModal/CreateOrderModal.tsx";
import './Orders.module.css';

const Orders: React.FC = () => {
    const [modalOpened, setModalOpened] = useState(false);

    const openModalForm = () => {
        setModalOpened(true);
    }

    const handleModalClose = () => {
        setModalOpened(false);
    };

    useEffect(() => {
        console.log(modalOpened);
    }, [modalOpened])

    return (
        <div className="orders-container">
            <NavbarMinimal />
            <TableSort />
            <ButtonMenu onCreateOrderClick={openModalForm} />
            <CreateOrderModal opened={modalOpened} onClose={handleModalClose} />
        </div>
    );
};

export default Orders;
