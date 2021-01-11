import React from 'react'
import { NavContainer,Span,NavWrapper,NavItem,Logo, Navlogo, NavBtn, Button } from './NavStyle'
import EventsLogo from '../../assets/logo.png'

export default function NavBar() {
    return (
        <NavContainer>
            <NavWrapper>
                <Navlogo>
                    <NavItem>
                        <Logo src={EventsLogo} alt='logo' />
                        <Span>Re-vents</Span>
                    </NavItem>
                    <NavItem>
                        Events
                    </NavItem>

                    <NavItem>
                        <Button green>Create Event</Button>
                    </NavItem>

                </Navlogo>
                <NavBtn>
                    <Button>Log In</Button>
                    <Button style={{marginLeft:'5px'}}>Sign Up</Button>
                </NavBtn>
            </NavWrapper>
        </NavContainer>
    )
}
