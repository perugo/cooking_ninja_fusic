import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.nav`
  background: #58249c;
  padding: 20px;
  color: #fff;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const LinkBrand = styled(Link)`
  margin-right: auto;
  color: #fff;
  text-decoration: none;
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