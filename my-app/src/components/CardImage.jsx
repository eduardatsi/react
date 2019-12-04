import React from 'react'
import styled from 'styled-components'
import { color } from '../themes'
import Header from './Header'

const CardImage = ({ title, image, children }) => {
  return (
    <Container>
      <HeaderCard>
        <Title>{title}</Title>
      </HeaderCard>
      <ImageCard src={image} />
      {children}
    </Container>
  )
  
}

export default CardImage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  justify-content: center;
  align-items: center;
  background-color: ${color.grey};
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  margin: 40px 20px;
  padding: 30px 15px;
`
const HeaderCard = styled.div`
  width: 100%;
  height: 30px;
  padding: 10px;
  margin: 0;
`
const ImageCard = styled.img`
  width: 100%;
`
const Title = styled.h1`
  font-size: 24px;
  color: ${color.yellow};
  margin: 0;
`