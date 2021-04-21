import styled from 'styled-components';

export const ButtonStyled = styled.button`
  color: ${({ color }) => color ? color : '#fff'};
  border: none;
  display: block;
  height: 50px;
  background-color: ${({ background }) => background ? background : '#444'};
  cursor: pointer;
  width: 100%;
  padding: 20px;
  margin: 10px;
`;