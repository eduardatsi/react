import React from 'react'
import styled from 'styled-components'
import { color } from '../themes'

const Button = ({ variant, children }) => {
  return(
    <StyledButton>{children}</StyledButton>
  )

}

export default Button

const StyledButton = styled.button`
  border-radius: 5px;
  border-style: solid;
  border-width: 2px;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: bold;
  outline: none;
  padding: 10px 20px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  width: 100%;
  background-color: ${color.grey};
  border-color: ${color.grey};
  color: ${color.light};
`