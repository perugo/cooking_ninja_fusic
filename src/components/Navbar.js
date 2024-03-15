import { Container, NavContainer, LinkBrand, LinkNavbar, H1 } from './StyledNavbar';

// styles

export default function Navbar() {
  return (
    <Container>
      <NavContainer>

        <LinkBrand to="/">
          <H1>Cooking Book</H1>
        </LinkBrand>

        <LinkNavbar to="/create">
          Create Recipe
        </LinkNavbar>

      </NavContainer>
    </Container>
  )
}