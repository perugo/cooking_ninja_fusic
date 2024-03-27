import { gql, useQuery } from '@apollo/client';
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { RecipeListPC } from './RecipeListPC';
import { RecipeListMobile } from './RecipeListMobile';

export const Wrapper = styled.div`
  background-color:#fff;
`;
/*
const GET_DATA = gql`
  query GetHello {
    recipes {
      id
      title
      frontImg
      description
      servings
      ingredients {
        name
        amount
      }
      instructions
    }
  }
`;
*/
const GET_DATA = gql`
  query GetHello($windowWidth: Int!) {
    recipes(windowWidth:$windowWidth) {
      id
      frontImg
      title
    }
  }
`;

export default function Home({ windowWidth,isMobile }) {

  const { loading, error, data: fetchedData } = useQuery(GET_DATA, {
    variables: { windowWidth },
    context: { clientName: 'homeApi1' } // Apollo Clientの選択
  });

  useEffect(() => {
    if (fetchedData) {
      console.log(fetchedData.recipes);
    }
  }, [fetchedData])


  return (
    <Wrapper>
      {fetchedData && (
        isMobile ?
          <RecipeListMobile recipes={fetchedData.recipes} /> :
          <RecipeListPC recipes={fetchedData.recipes} />
      )}
    </Wrapper>
  )
}
