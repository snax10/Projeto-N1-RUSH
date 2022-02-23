import React from 'react';
import { Container } from './styles';

interface HemburgerButtonProps {
    checked: boolean;
}

function HamburgerButton ({ checked }: HemburgerButtonProps) {
    return (
        <Container>
            <input type="checkbox" defaultChecked={checked} />

            <span />
            <span />
            <span />
        </Container>
    );
}

export default HamburgerButton;