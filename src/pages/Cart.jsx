import React from 'react';
import styled from 'styled-components';

const Cart = () => {
  const Wrapper=styled.section`
 
  height: 100vh;
  
  background-color: ${({theme})=>theme.colors.bg};
    
  `
  return (
    <Wrapper>
    cart
    </Wrapper>
  )
}

export default Cart;