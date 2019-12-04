import React from 'react'
import styled from 'styled-components'
import { color } from '../themes'
import Logo from './Logo'

const Header = () => {
  return (
    <Container>
      <Logo />
    </Container>
  )
  
}

export default Header

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${color.light};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  margin: 0;
  padding: 10px;
  background: ${color.grey};
`