import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  padding: 0;
`;

export const OptionsItem = styled.li ``;

export const Button = styled.button`
cursor: pointer;
background-color: #4caf50; 
color: white; 
padding: 10px 20px;
border: none; 
border-radius: 25px;
font-size: 16px; 
transition: background-color 0.3s ease;

&:hover {
  background-color: #45a049; 
}

&:focus {
  outline: none; 
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); 
}

&:first-letter {
  text-transform: uppercase;
}

`;