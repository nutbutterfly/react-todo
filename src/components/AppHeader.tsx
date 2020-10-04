import React from 'react';
import Navbar from 'react-bootstrap/esm/Navbar';

function AppHeader() {
    return (
        <header className="sticky-top">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand className="w-100 text-center">To-Do App</Navbar.Brand>
            </Navbar>
        </header>
    );
}

export default AppHeader;