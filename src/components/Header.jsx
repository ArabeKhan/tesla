import React, { useState } from 'react'
import styled from 'styled-components'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';


function Header() {
    const [navOpen, setNavOpen] = useState(false)
    const navBarOpen = () => setNavOpen(true)
    const navBarClose = () => setNavOpen(false)
    return (
        <Container>
            <a href='#'>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                <li><a href="#">Model - S</a></li>
                <li><a href="#">Model - S</a></li>
                <li><a href="#">Model - S</a></li>
                <li><a href="#">Model - S</a></li>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={navBarOpen} />
            </RightMenu>
            <BurgerNav show={navOpen}>
                <CloseWapper>
                    <CustomClose onClick={navBarClose} />
                </CloseWapper>
                <li><a href="#">Example 01</a></li>
                <li><a href="#">Example 01</a></li>
                <li><a href="#">Example 01</a></li>
                <li><a href="#">Example 01</a></li>
                <li><a href="#">Example 01</a></li>
                <li><a href="#">Example 01</a></li>
                <li><a href="#">Example 01</a></li>
                <li><a href="#">Example 01</a></li>
                <li><a href="#">Example 01</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px ;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    li{
        font-weight: 600 ;
        text-align: center;
        text-transform: uppercase;
        padding: 0px 10px;
    }
    @media (max-width : 768px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 600 ;
        text-align: center;
        text-transform: uppercase;
        margin-right: 10px;
        @media (max-width : 556px){
        font-size: 14px;
        display: none;
    }
    }
    
`

const CustomMenu = styled(MenuOpenIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 10;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li{
        padding: 15px 0px;
        border-bottom: 1px solid rgba(0,0,0,.2) ;
        a{
            font-weight: 600;
        }
    }
    @media (max-width : 768px){
        font-size: 12px;
        width: 200px ;
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`


const CloseWapper = styled.div`
    display: flex;
    justify-content: flex-end;
`