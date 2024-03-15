import {gql ,useQuery} from '@apollo/client';
import React,{useState,useEffect,useRef} from 'react';
import { useParams } from 'react-router-dom'

import styled from 'styled-components';
import { DispRecipe } from './DispRecipe';

export const Wrapper = styled.div`
  padding:10px 10px 0px 20px;
`;

const GET_RECIPE = gql`
  query GetRECIPE($id: String!) {
    recipe(id:$id) {
      id
      title
      ingredients
      method
      cookingTime
    }
  }
`;
export default function Recipe() {
  const { id } = useParams()
  const { loading, error, data: fetchedData } = useQuery(GET_RECIPE, {
    variables: { id }, // Pass the id as a variable to your GraphQL query
    context: { clientName: 'homeApi1' } // Apollo Clientの選択
  });

  useEffect(()=>{
    if (fetchedData) {
      console.log(fetchedData.recipe);
    }
  },[fetchedData])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;

  return (
    <Wrapper>

      {fetchedData && <DispRecipe recipe={fetchedData.recipe}/>}
    </Wrapper>
  )
}