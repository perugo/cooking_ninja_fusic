import { Container, NavContainer, LinkBrand, LinkNavbar, H1 } from './StyledNavbar';
import styled from 'styled-components';
import React from 'react';

// styles
const SVGWrapperLogo = styled.div`
  height: 44px;
  width: 160px;
  position:relative;

`;
const SVGWrapperIcon = styled.div`
  height: 47px;
  width: 48px;
  position:relative;
`;

const SVGInnerIcon = styled.div`
  position: relative;
  width: inherit;
  height: inherit;
  margin: auto;
`;
const SVGInnerLogo = styled.div`
  position: relative;
  width: inherit;
  height: inherit;
  margin: auto;
`;
const StyledImgIcon = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100%;
  z-index: 2; // Ensure the image is always on top
`;
const StyledImgLogo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 2; // Ensure the image is always on top
`;

const SearchBoxWrapper=styled.div`
width:800px;
`
export default function Navbar() {
  return (
    <Container>
      <NavContainer>

        <LinkBrand to="/">
          <div>
            <SVGWrapperIcon>
              <SVGInnerIcon>
                <StyledImgIcon
                  src={`${process.env.PUBLIC_URL}/icon_apple.png`}
                  alt="sine formula"
                />
              </SVGInnerIcon>
            </SVGWrapperIcon>
          </div>
          <div>
            <SVGWrapperLogo>
              <SVGInnerLogo>
                <StyledImgLogo
                  src={`${process.env.PUBLIC_URL}/logoGirashiru.png`}
                  alt="sine formula"
                />
              </SVGInnerLogo>
            </SVGWrapperLogo>
          </div>
        </LinkBrand>
        <SearchBoxWrapper>

        </SearchBoxWrapper>
      </NavContainer>
    </Container>
  )
}