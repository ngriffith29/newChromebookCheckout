import logo from './logo.svg';
import './App.css';
import { pulse, flash} from 'react-animations'
import styled, { keyframes } from 'styled-components';
import Scan from './Components/Scan'

const bounceAnimation = keyframes`${flash}`;


const BouncyDiv= styled.h1 `
  color: red;
  animation: 5s ${bounceAnimation};
  height: 25%;
  width: 25%;
  animation-fill-mode: forwards;
  font-size: 200px;


`


function App() {
  return (
    <div className="App">
      {/* <BouncyDiv>hi</BouncyDiv> */}
     <Scan />
    </div>
  );
}

export default App;
