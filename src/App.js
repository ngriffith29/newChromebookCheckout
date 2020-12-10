import { pulse, flash} from 'react-animations'
import styled, { keyframes } from 'styled-components';
import Scan from './Components/Scan'

const StartText =  styled.h1`
  font-size: 1.5em;


`
const Wrapper = styled.div `
  display: flex;


`


function App() {
  return (
    <Wrapper>
    <StartText>I</StartText>
    <div>Broke my chromebook</div>
    
    </Wrapper>
  );
}

export default App;
