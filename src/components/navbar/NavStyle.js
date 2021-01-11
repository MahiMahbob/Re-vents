import styled from "styled-components";

export const NavContainer = styled.div`
    background: linear-gradient(135deg,#182a73,#218aae 69%,#20a7ac 89%);
    width: 100%;
    position: fixed;
    top: 0;
    color: #fff;
`
export const NavWrapper = styled.div`
    position: relative;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 10px;
`
export const Navlogo = styled.div`
    display: flex;
    align-items: center;
    
`
export const NavItem = styled.a`
    display: flex;
    align-items: center;
    margin: 0px 20px 0 0;

    :after{
        content: '';
        position: absolute;
        top: 0;
        left: 178px;
        background-color: hsla(0,0%,100%,.08);
        width: 1px;
        height: 100%; 
    }
`
export const Span = styled.span`
    margin-left: 3px;
`
export const Logo = styled.img`
    width: 30px;
`
export const NavBtn = styled.div`
    :before{
        content: '';
        position: absolute;
        top: 0;
        right: 150px;
        background: hsla(0,0%,100%,.08);
        width: 1px;
        height: 100%;
    }
`
export const Button = styled.button`
    color: #fff;
    background: ${({green}) => green ? 'lightcoral' : 'transparent'};
    border: 1px solid #e0e1e2;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
    padding: 5px 10px
`