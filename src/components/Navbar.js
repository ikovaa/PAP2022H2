import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AbcIcon from '@mui/icons-material/Abc';
import MenuIcon from '@mui/icons-material/Menu';


export default class Navbar extends Component {
    render() {  
        return (
            <>
            <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
                <ul className='nav d-flex justify-content-around'>
                    <li className="nav-item">
                        <Link to='/'>
                            <ButtonContainer>
                                <AbcIcon />
                            </ButtonContainer>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Produtos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart" className="ml-auto">
                            <ButtonContainer>
                                <ShoppingCartIcon />
                            </ButtonContainer>
                        </Link>
                    </li>
                </ul>
            </NavWrapper>
            <NavWrapper className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                    </a>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 link-secondary">Inicio</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Produtos</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">FAQ</a></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <ButtonContainer>
                            <ShoppingCartIcon />
                        </ButtonContainer>
                        <ButtonContainer>
                            <MenuIcon />
                        </ButtonContainer>
                    </div>
                </header>
            </NavWrapper>
            </>
        )
    }
}
const NavWrapper = styled.nav`
background:var(--plain);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3 rem;
    text-transform:capitalize;
}
`;
