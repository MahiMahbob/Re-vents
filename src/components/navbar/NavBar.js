import React from 'react'
import { NavContainer,Span,NavWrapper,NavItem,Logo, Navlogo, NavBtn, Button } from './NavStyle'
import EventsLogo from '../../assets/logo.png'
import { useContextValue } from '../../context/EventContext'

export default function NavBar() {
    const {controlFormOpen} = useContextValue()
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
                        <Button green onClick={controlFormOpen}>Create Event</Button>
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
