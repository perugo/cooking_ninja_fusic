import styled from 'styled-components';
// styles
import { Link } from 'react-router-dom'
import React from 'react';

const Container = styled.div`
max-height:130px;
position:relative;
width:100%;
top:0;
z-index:100000;
`
const LinkBrand = styled(Link)`
background-color:#fff;
border-bottom:1px solid #ededed;
left:0;
width:100%;
position:sticky;
z-index:10000001;
`


const InnerA = styled.div`
-webkit-box-align:start;
align-items:flex-start;
box-sizing:border-box;
display:flex;
-webkit-box-pack:center;
justify-content:center;
width:100%;
  width: 100%;
  height: auto;
  margin:0;
  padding:0;
`;

const StyledImg = styled.img`
max-width:800px;
width:100%;
`;

const SearchBoxWrapper = styled.div`
width:100%;
`
export default function NavbarMobile() {
  return (
    <Container>

      <LinkBrand to="/">

        <InnerA>
          <StyledImg
            src={`${process.env.PUBLIC_URL}/navbar.png`}
            alt="sine formula"
          />
        </InnerA>
      </LinkBrand>

      <SearchBoxWrapper>
      </SearchBoxWrapper>
    </Container>
  )
}