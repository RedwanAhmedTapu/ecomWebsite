import React from 'react';
import styled from 'styled-components';


const Contact = () => {
  const Wrapper=styled.section`
 
  height: 100vh;
  
  background-color: ${({theme})=>theme.colors.bg};
    
  `
  return (
    <Wrapper>
    contact
    </Wrapper>
  )
}

export default Contact;