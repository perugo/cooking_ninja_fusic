import styled from "styled-components";

const Container = styled.section`
width:696px;
`
const RecipesFlexWrapper = styled.div`
  display:flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  flex-wrap: wrap;
  
  margin:0;
  padding:0;
  background:transparent;
  outline:0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
`

const Recipe=styled.li`
 display:block;
`
const ItemRoot=styled.div`
 width:216px;
 position:relative;
`
const ALink=styled.a`
  border-radius:8px;
  width:216px;
  height:auto;
  display:block;
  overflow:hidden;
  position:relative;
`

const SVGWrapper = styled.div`
  margin-left:5px;
  height: 148px;
  width: 100px;
  margin-top: 2px;
  margin-bottom: 2px;
  display: flex;
`;
const SVGInner = styled.div`
  position: relative;
  width: inherit;
  height: inherit;
  margin: auto;
`;
const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2; // Ensure the image is always on top
`;

export const RecipeList = ({ recipes }) => {
  return (
    <Container>
      <RecipesFlexWrapper>

        {recipes.map((recipe, index) => (
          <Recipe key={recipe.id}>
            <ItemRoot>
            <ALink href={`/recipes/${recipe.id}`}>
            <SVGWrapper>
              <SVGInner>
                <StyledImg
                  src={recipe.frontImg}
                  alt="sine formula"
                />
              </SVGInner>
            </SVGWrapper>
            </ALink>
            <h3>{recipe.title}</h3>
           </ItemRoot>
          </Recipe>
        ))}

      </RecipesFlexWrapper>
    </Container>
  )
}
//        <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
