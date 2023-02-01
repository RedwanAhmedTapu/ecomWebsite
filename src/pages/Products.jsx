import React from 'react';
import styled from 'styled-components';

const Products = () => {
  const Wrapper=styled.section`
 
  height: 100vh;
  
  background-color: ${({theme})=>theme.colors.bg};
    
  `
  return (
    <Wrapper>
    products
    </Wrapper>
  )
}

export default Products;