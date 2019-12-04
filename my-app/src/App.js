import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import { CardImage, Button } from './components';
import styled from 'styled-components'


const App = () => {
  const [card, setCard] = useState(false)
  return (
    <div className="App">
      <Container>
        <Header />
        <ContainerCards>
          <CardImage title='Javascript'  image='/assets/img/js.png'><Button>Trocar</Button></CardImage>
          <CardImage title='Javascript'  image='/assets/img/js.png'/>
          <CardImage title='Javascript'  image='/assets/img/js.png'/>
          <CardImage title='Javascript'  image='/assets/img/js.png'/>
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
