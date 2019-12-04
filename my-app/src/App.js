import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import { CardImage, Button } from './components';
import styled from 'styled-components'


const App = () => {
  const [card, setCard] = useState(false)

  const handleClick = () => {
    setCard(!card)
  }
  return (
    <div className="App">
      <Container>
        <Header />
        <ContainerCards>
        <CardImage title='REACT' image={card ? '/assets/img/react2.png' : '/assets/img/react.png'}><Button onClick={handleClick}>Trocar</Button></CardImage>
        </ContainerCards>
        <ContainerCards>
          <CardImage title='React'  image='/assets/img/react.png'/>
          <CardImage title='React'  image='/assets/img/react.png'/>
          <CardImage title='React'  image='/assets/img/react.png'/>
          <CardImage title='React'  image='/assets/img/react.png'/>
        </ContainerCards>
      </Container>
      
      
    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const ContainerCards = styled.div`
  display: flex;
  width: 100%;
`
