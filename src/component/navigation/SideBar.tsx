import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components"

const Navbar = styled.nav`
    flex: left;
    min-width: 200px;
    min-height: 100vh;
    padding-top: 10px;
    background: #0f0e17;
`
const List = styled.div`
    margin: 0px 10px;
    padding: 10px 20px;
    list-style: none;
`
const PageLink = styled(Link)<{active: String}>`
    display: block;
    // font-size: 18px;
    margin: 0 calc(20px * -1);
    color: white;
    padding: 12px 20px;
    text-decoration: none;
    border-radius: 4px;
    ${(props) => 
        props.active === "true" && 
        css`
            color: #ff8906; 
            font-weight: bold;
        `
    }
    &:hover {
        color: white;
        background: #ff8906;
        transform: translateY(-2px);
        transition: 1s;
    }
    &:not([href]) {
        color: #a7a9be;
        background: revert;
        transform: none;
      }
`

const SideBar = () => {
    const location = useLocation();
    return (
        <Navbar>
            <List>
                <PageLink to="/todo" active={location.pathname.includes("/todo").toString()}>TodoList</PageLink>
                <PageLink to="/counter" active={location.pathname.includes("/counter").toString()}>Counter</PageLink>
                <PageLink to="/chart" active={location.pathname.includes("/chart").toString()}>Chart</PageLink>
                <PageLink to="/map" active={location.pathname.includes("/map").toString()}>Map</PageLink>
            </List>
        </Navbar>
    )
}

export default SideBar;