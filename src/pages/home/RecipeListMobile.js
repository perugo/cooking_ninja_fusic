import styled from "styled-components";
import React from 'react';

const Container = styled.section`
display:flex;
flex-wrap:wrap;
padding:0 4px;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;

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
`

const SectionTitle = styled.div`
padding:16px 12px 4px 16px;
-webkit-box-align:center;
align-items:center;
display:flex;
-webkit-box-pack:justify;
justify-content:space-between;
unicode-bidi:isolate;
width:100%;
`
const RecipeItems=styled.ul`
display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style: none; /* 箇条書きのスタイルをなくす */
  margin: 0; /* 余白をなくす */
  width: 100%; /* ul要素の幅を画面の100%にする */

  border: 0;
  font-size: 100%;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
`
const SectionTitleH2 = styled.div`
  font-size:17px;
  font-weight:bold;
  letter-spacing:.15px;
  line-height:130%;
`

const Recipe = styled.li`
width: 50%; /* 各項目の幅をコンテナの50%に設定 */
  padding: 4px; /* 余白を追加 */
  box-sizing: border-box; /* パディングとボーダーを幅と高さに含める */
  margin:-2px;
`
const ItemRoot = styled.div`
 position:relative;
`
const ALink = styled.a`
  border-radius:8px;
  width:inherit;
  height:auto;
  display:block;
  overflow:hidden;
  position:relative;
`

const SVGWrapper = styled.div`
  height: inherit;
  width: inherit;
  display: flex;
  display:block;
`;
const SVGInner = styled.div`
  display:block;
  height:auto;
  width:100%;
  position: relative;
  margin-bottom:-6px;
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
  width:inherit;
  margin:8px 0;
  background:transparent;
  font-size:1;
  font-weight:400;
`
const VideoTitleRoot = styled.p`
  line-height:1em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  font-size:14px;
  font-weight:bold;
  letter-spacing:.1px;
  line-height:130%;
  box--sizing:border-box;
  margin:0;
  outline:0;
  padding:0;
  vertical-align:baseline;
`
export const RecipeListMobile = ({ recipes }) => {
  return (
    <Container>
      <SectionTitle>
        <SectionTitleH2>レシピ一覧</SectionTitleH2>
      </SectionTitle>
      <RecipeItems>
        {recipes && recipes.map((recipe, index) => (
          <Recipe key={recipe.id}
            style={{
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
      </RecipeItems>
    </Container>
  )
}
//        <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
