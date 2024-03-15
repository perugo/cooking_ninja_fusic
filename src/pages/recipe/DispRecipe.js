import styled from "styled-components";

const SVGWrapper = styled.div`
margin-left:5px;
  height: 130px;
  width: 170px;
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

export const DispRecipe = ({ recipe }) => {
  return (
    <div className="recipe-list">
      {recipe && (

        <div key={recipe.id} className="card">
          <SVGWrapper>
            <SVGInner>
              <StyledImg
                src={`${process.env.PUBLIC_URL}/image/${recipe.id}.jpg`}
                alt="sine formula"
              />
            </SVGInner>
          </SVGWrapper>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
        </div>
      )}
    </div>
    
  )
}
//        <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
