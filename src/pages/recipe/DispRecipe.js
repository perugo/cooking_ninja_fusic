import styled from "styled-components";
import React from "react";
const Container = styled.section`
margin:0 auto;
position:relative;
width:100%;
background:#fff;
`

const Article = styled.article`
  -webkit-box-align:center;
  align-items:center;
  display:flex;
  flex-flow:column nowrap;
  height:auto;
  width:100%;
`
const ContentTopBreadCrumbRoot = styled.div`
border-bottom:1px solid #d3d2cd;
overflow-x:auto;
position:relative;
z-index:1001;
`

const ContentWrapper = styled.div`
display:flex;
flex-flow:row nowrap;
height:auto;
margin:0 0 48px;
padding:30px 0 0;
width:850px;
`

const MainContent = styled.div`
  display:flex;
  -webkit-box-flex:0;
  flex:0 0 auto;
  flex-flow:column nowrap;
  height:auto;
  width:696px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  font-weight:400;
  line-height:1em;
`
const MainRecipeWrapper = styled.div`
  display:block; 
`

const TitleWrapper = styled.div`
margin:40px 0 8px;
`
const TitleText = styled.h1`
color: #000;
margin: 0 20px 0 0;
font-size: 24px;
font-weight: bold;
letter-spacing: 0;
line-height: 130%;
background: transparent;
border: 0;
font-size: 100%;
margin: 0;
outline: 0;
padding: 0;
vertical-align: baseline;
`
const Introduction = styled.p`
color:#000;
font-size:17px;
line-height:25px;
margin:16px 0 0;
padding:0 20px 0 0;
white-space:pre-wrap;
word-wrap:break-word;

`
const Ingredients = styled.section`
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  flex-flow:column nowrap;
  margin: 44px 0 0;
  padding: 0 20px 0 0;
`
const IngredientsText = styled.h2`
color:#000;
font-size:20px;
font-weight:bold;
line-height:20px;
padding:0 0 8px;

border:0;
margin:0;
outline:0;
vertical-align:baseline;
`
const ServingText = styled.span`
  font-size:14px;
  font-weight:normal;
  margin:0 0 0 8px;
`

const IngredientsList = styled.ul`
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  flex-flow:column nowrap;
  margin:11px 0 0;
  list-style:none;
  border:0;
  outline:0;
  padding:0;
  vertical-align:baseline;
`
const CategoryName = styled.div`
`
const IngredientItem = styled.li`
  -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    border-bottom: solid 1px rgb(235,231,231);
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 8px 0;

    font-size: 100%;
    margin: 0;
    outline: 0;
    vertical-align: baseline;
`

const IngredientName = styled.p`
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
color: #000;
display: -webkit-inline-box;
display: -ms-inline-flexbox;
display: inline-flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-flow: row nowrap;
flex-flow: row nowrap;
font-size: 18px;
font-weight: normal;
line-height: 25px;
text-decoration:none;
margin:0px;
`
const IngredientQuantity = styled.span`
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
color: #000;
display: -webkit-inline-box;
display: -ms-inline-flexbox;
display: inline-flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-flow: row nowrap;
flex-flow: row nowrap;
font-size: 17px;
font-weight: normal;
line-height: 25px;
`

const InstructionsWrapper = styled.section`
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  flex-flow:column nowrap;
  margin:40px 0 0;
  padding:0 20px 0 0;
`
const InstructionsTitle = styled.h2`
  color:#000;
  font-size:20px;
  font-weight:bold;
  padding:0 0 8px;

  border:0;
  margin:0;
  outline:0;
  vertical-align:baseline;
`
const InstructionList = styled.ol`
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  flex-flow:column nowrap;
  margin:16px 0 0;
  list-style:none;
  outline:0;
  padding:0;
  vertical-align:baseline;
  border:0;
`
const InstructionListItem = styled.li`
border-bottom: 1px solid #f4f2f0;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-flow: row nowrap;
flex-flow: row nowrap;
font-size: 17px;
line-height: 25px;
padding: 8px 0;

vertical-align: baseline;
margin: 0;
outline: 0;
}
`
const InstructionListIndex = styled.span`
-webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    font-weight: bold;
    width: 30px;
    
    background: transparent;
    border: 0;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;

`
const IngredientCategoryTitle = styled.div`
  border-bottom:none;
  color:#635f5a;
  font-size:14px;
  padding:16px 0 8px;
  border:0px;
  font-weight:bold;
  align-items:flex-end;
  -webkit-box-align:end;
  display:inline-flex;
  flex-flow:row nowrap;
  justify-content:space-between;
`

const InstructionListContent = styled.span`
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    font-weight: normal;

    background: transparent;
    border: 0;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
`

const Memo = styled.section`
  margin:40px 0 0;
  padding:0 20px 0 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  line-height:1em;
`
const MemoTitle = styled.h2`
color:#000;
font-size:20px;
font-weight:bold;
padding: 0 0 8px;
margin:0;
outline:0;
vertical-align:baseline;
border:0;
`


const RecipeImageWrapper = styled.div`
  display:flex;
  -webkit-box-pack:center;
  justify-content:center;
`


const SVGWrapper = styled.div`
  height: 560px;
  width: 560px;
  position:relative;
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
  border-radius:11px;

`;

export const DispRecipe = ({ recipe }) => {
  return (
    <Container>
      <Article>
        <ContentTopBreadCrumbRoot>

        </ContentTopBreadCrumbRoot>
        <ContentWrapper>
          <MainContent>
            {recipe && (
              <MainRecipeWrapper key={recipe.id}>

                <RecipeImageWrapper >
                  <SVGWrapper>
                    <SVGInner>
                      <StyledImg
                        src={`${recipe.frontImg}`}
                        alt="sine formula"
                      />
                    </SVGInner>
                  </SVGWrapper>
                </RecipeImageWrapper>
                <TitleWrapper><TitleText>{recipe.title}</TitleText></TitleWrapper>
                <Introduction>{recipe.description}</Introduction>
                <Ingredients>
                  <IngredientsText>材料 <ServingText>({recipe.serving})</ServingText></IngredientsText>
                  <IngredientsList>
                    {recipe.categories.map((category, categoryIndex) => (
                      <React.Fragment key={categoryIndex}>
                        {/* カテゴリー名を動的に表示 */}
                        {category.categoryName !== "" && (
                          <IngredientCategoryTitle>{category.categoryName}</IngredientCategoryTitle>
                        )}
                        {category.ingredients.map((ingredient, ingredientIndex) => (
                          <IngredientItem key={ingredientIndex}   style={category.categoryName !== "" ? { borderLeft: "3px solid #f4f2f0", paddingLeft: "8px" } : {}}
                          >
                            <IngredientName>{ingredient.name}</IngredientName> <IngredientQuantity>{ingredient.amount}</IngredientQuantity>
                          </IngredientItem>
                        ))}
                      </React.Fragment>
                    ))}
                  </IngredientsList>
                </Ingredients>
                <InstructionsWrapper>
                  <InstructionsTitle>作り方</InstructionsTitle>
                  <InstructionList>
                    {recipe.instructions.map((instruction, index) => (
                      <InstructionListItem key={index}>
                        <InstructionListIndex>{index + 1}</InstructionListIndex>
                        <InstructionListContent>{instruction}</InstructionListContent>
                      </InstructionListItem>
                    ))}
                  </InstructionList>
                </InstructionsWrapper>
              </MainRecipeWrapper>
            )}
          </MainContent>
        </ContentWrapper>

      </Article>
    </Container >

  )
}
//        <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
/*
                      ))}

*/