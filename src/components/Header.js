import React from 'react'
import { Container } from 'react-bootstrap'
import NavigationBar from './NavigationBar';
import Navbar from './NavigationBar';
export default function Header() {
    return (
        <header>
            <Container>
                <NavigationBar/>
            </Container>

        </header>

    )
}
