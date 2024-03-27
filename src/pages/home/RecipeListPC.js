import styled from "styled-components";
import React from 'react';

const Container = styled.section`
width:696px;
margin:0px auto;
display:flex;
padding-top:30px;
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

const Recipe = styled.li`
 display:block;
`
const ItemRoot = styled.div`
 width:216px;
 position:relative;
`
const ALink = styled.a`
  border-radius:8px;
  width:216px;
  height:auto;
  display:block;
  overflow:hidden;
  position:relative;
`

const SVGWrapper = styled.div`
  height: 216px;
  width: 216px;
  display: flex;
  display:block;
`;
const SVGInner = styled.div`
  display:block;
  height:auto;
  width:100%;
  position: relative;
  margin: 0;
`;
const StyledImg = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2; // Ensure the image is always on top
`;

const VideoListInfo = styled.div`
  background:transparent;
  border:0;
  margin:0;
  padding:0;
  vertical-align:baseline;
  
`
const VideoListTitle = styled.div`
  height:44px;
  width:216px;
  margin:8px 0;
  background:transparent;
  font-size:1;
  font-weight:400;
`
const VideoTitleRoot = styled.p`
  line-height:1em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  font-size:17px;
  font-weight:bold;
  letter-spacing:.15px;
  line-height:130%;
`
export const RecipeListPC = ({ recipes }) => {
  return (
    <Container>
      <RecipesFlexWrapper>

        {recipes && recipes.map((recipe, index) => (
          <Recipe key={recipe.id}
            style={{
              // インデックスを使用して条件をチェックする（配列のインデックスは0から始まるため、+1をして調整）
              margin: ((index + 1) % 3 === 2) ? '0px 16px' : '0'
            }}>
            <ItemRoot>
              <ALink href={`${window.location.protocol}//${window.location.host}/recipes/${recipe.id}`}>
                <SVGWrapper>
                  <SVGInner>
                    <StyledImg
                      src={recipe.frontImg}
                      alt="sine formula"
                    />
                  </SVGInner>
                </SVGWrapper>
              </ALink>
              <VideoListInfo>
                <VideoListTitle>
                  <VideoTitleRoot>{recipe.title}</VideoTitleRoot>
                </VideoListTitle>
              </VideoListInfo>
            </ItemRoot>
          </Recipe>
        ))}

      </RecipesFlexWrapper>
    </Container>
  )
}
//        <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
