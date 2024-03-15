import {gql ,useQuery} from '@apollo/client';
import React,{useState,useEffect,useRef} from 'react';
import styled from 'styled-components';
import { RecipeList } from './RecipeList';

export const Wrapper = styled.div`
  padding:10px 10px 0px 20px;
`;

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
export default function Home() {
  const { loading, error, data: fetchedData } = useQuery(GET_DATA, {
    context: { clientName: 'homeApi1' } // Apollo Clientの選択
  });

  useEffect(()=>{
    if (fetchedData) {
      console.log(fetchedData.recipes);
    }
  },[fetchedData])


  return (
    <Wrapper>
      {fetchedData && <RecipeList recipes={fetchedData.recipes}/>}
    </Wrapper>
  )
}
