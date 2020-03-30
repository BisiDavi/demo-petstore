import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from "../logo.svg";
import styled from 'styled-components';
import { ButtonContainer } from './Button';


export default class Navbar extends Component {
 render() {
  return (
   <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
    {
     /* insert a link */
    }
    <Link to="/">
     <img src={logo} width="150px" alt="store" className="navbar-brand" />
    </Link>

    <ul className="navbar-nav align-items-center">
     <li className="nav-item ml-1">
      <Link to="/" className="nav-link">
       PetHub
      </Link>
     </li>
    </ul>
    <i className="fas fa-search" placeholder="Search for your pet" />
    <Link to="/cart" className="ml-auto">
     <ButtonContainer>
      <span className="mr-2">
       <i className="fas fa-cart-plus" />
      </span>
      my cart
                    </ButtonContainer>
    </Link>
   </NavWrapper>
  );
 }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color:var(--mainWhite)!important;
        font-size:1.3rem;
    }
  `;