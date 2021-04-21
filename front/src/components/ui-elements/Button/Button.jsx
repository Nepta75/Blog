import React from 'react';
import { ButtonStyled } from './Button.style';

const Button = ({
  value,
  onClick,
  type,
  background,
  color,
}) => {
  return (
    <ButtonStyled
      type={type}
      onClick={() => onClick()}
      background={background}
      color={color}
    >
      {value}
    </ButtonStyled>
  )
}

export { Button };