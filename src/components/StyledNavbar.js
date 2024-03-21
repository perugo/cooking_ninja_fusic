import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.nav`
  background: #fff;
  color: #fff;
  position:sticky;
  width:100%;
  top:0;
  z-index:100000;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 1069px;
  border-bottom:2px solid #ededed;
  box-sizing:border-box;
  gap:8px;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  flex-flow:column nowrap;
  justify-content:center;
  padding-block:16px;
  position:sticky;
  top:0;
  width:100%;
  margin: 0 auto;
`;

export const LinkBrand = styled(Link)`
 -webkit-box-align:center;
 align-items:center;
 display: flex;
 -webkit-box-orient: horizontal;
 -webkit-box-direction: normal;
 -ms-flex-flow: row nowrap;
 flex-flow: row nowrap;
 z-index: 4;
 max-width:1340px;
 min-width:1024px;
 width:100%;
 margin-top:-7px;
 
`;
export const LinkNavbar = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-left: 40px;
  padding: 8px;
  border: 1px solid #fff;
  border-radius: 4px;

  &:last-child {
    color: #fff;
  }

  &:hover {
    background: #fff;
    color: #333;
  }
`;
export const H1=styled.h1`
  margin: 0;
`