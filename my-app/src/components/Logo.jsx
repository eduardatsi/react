import React from 'react'
import styled from 'styled-components'

const Logo = () => {
  return <Image src='/assets/img/logo.png' />
}

export default Logo

const Image = styled.img`
  width: 50px;
  height: 50px;
`