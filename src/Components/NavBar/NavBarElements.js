import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';


export const Nav = styled.nav`
    position: relative;
    display: flex;
    align-items: center;
    height: 80px;
    padding: 0 3rem;
    z-index: 10;
`;

export const NavLink = styled(Link)`
    display: block;
    padding: 0 .7rem;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: var(--orange-dark);
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        position: absolute;
        top: 20%;
        right: 0;
        display: block;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    white-space: nowrap;

    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;

        @media screen and (max-width: 768px) {
            display: none;
        }
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    padding: 10px 15px;
    margin-left: 10px;
    font-weight: 600;
    color: #fff;
    background: var(--orange-dark);
    border: none;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    transition: all .5s ease-in-out;

    &:hover {
        color: var(--orange-dark);
        background: #fff;
    }
`;