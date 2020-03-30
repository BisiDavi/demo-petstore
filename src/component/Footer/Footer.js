import React, { Component } from 'react'
import logo from "../../logo.svg";
import styled from 'styled-components'

export default class Footer extends Component {
    render() {
        return (
            <FooterWrapper >
                <div className="container-fluid">
                    <div className="row">                        
                        <div className="col-sm-4 mt-3 mb-3 ml-0">
                        <img src={logo} alt="pethub" width="100px" height="100px" />
                        </div>
                        <div id="Information" className="col-sm-4 mt-3 mb-3 ml-0">
                            <h3>Information</h3>
                            <li><a href="#"> About Us</a></li>
                            <li><a href="#"> Contact Us</a></li>            
                        </div>
                        <div className="icons col-sm-4 mt-3 mb-3 ml-0">
                            <h3>Follow us</h3>
                            <i className="fa fa-twitter fa-lg p-2" />
                            <i className="fa fa-facebook fa-lg p-2" />
                            <i className="fa fa-youtube fa-lg p-2" />                            
                        </div>                       
                    </div>    
                    <div className="copyright">
                            <p className="text-center"> PetHub © 2019</p>
                            <p className="text-center">Designed by : &nbsp;
                            <i className="fa fa-cog fa-spin fa-fw" />&nbsp;<a href="#">WebCrew</a></p>
                    </div>                                        
                </div>
            </FooterWrapper>              
            )
        }
    }


const FooterWrapper = styled.div`
    background: var(--mainDark);
    padding-bottom: 40px;
    .icons i{
        color: var(--mainWhite);
    }
    .row a{
        color: var(--mainWhite);
        font-size: 14;
    }
    .copyright p{
        color: var(--mainWhite);
    }
    .copyright a{
        color: var(--mainWhite);
    }
    .copyright a:hover{
        color: var(--lightBlue);   
    }
    .row li:hover{
        list-style: underline;
    }
    .row a:hover{
        color: var(--lightBlue);        
    }
    .row h3{
        color: var(--mainBlue);
        font-size: 1;
        font-weight: bold;
    }
`