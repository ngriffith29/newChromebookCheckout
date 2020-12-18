import React, {useState} from 'react'

import { pulse, flash} from 'react-animations'
import styled, { keyframes } from 'styled-components';
import Scan from './Components/Scan'
import Broke from './Components/Broke/Broke'
import Return from './Components/Return/Return'
import Forgot from './Components/Forgot/Forgot'
import Name from './Components/Name'
import { Button } from 'reactstrap';




const StartText =  styled.h1`
  font-size: 3em;


`
const Wrapper = styled.div `
  display: flex;
  justify-content: center;
`

const BrokeReason = styled.div `
  margin-top: 15px;

  margin-right: 5px;
  margin-left: 3px;
  border: solid #292b2c 2px;
  border-radius: 3px;
  background-color: #0275d8;
  font-size: 1.5em;
  padding: 5px;
  cursor: pointer;
  color: ${props => props.broke || props.return || props.forgot ? 'white' : 'grey'}

`
const TotalWrap = styled.div `


`
const HeaderContainer = styled.div `
  display: flex;
  justify-content: center;
 
`
function App() {

const [reason, setReason] = useState({
    broke: false,
    forgot: false,
    return: false
})


const [name, setName] = useState({
  firstName: '',
  lastName: '',


})

const click = (event) => {
 
  if(event.currentTarget.textContent === 'I Broke My Chromebook'){

      setReason({...reason, broke: !reason.broke })
  } else if (event.currentTarget.textContent === 'I am returning my chromebook') {
    setReason({...reason, return: !reason.return })
  }else {
    setReason({...reason, forgot: !reason.forgot })
  }


}

  return (
    <TotalWrap>
    
      <HeaderContainer>
      <h1>Select your problem</h1>
      </HeaderContainer>
    <Wrapper>
    <BrokeReason broke={reason.broke} onClick={click}>I Broke My Chromebook</BrokeReason>
    <BrokeReason broke={reason.return} onClick={click}>I am returning my chromebook</BrokeReason>
    <BrokeReason broke={reason.forgot} onClick={click}>I Forgot my chromebook</BrokeReason>
    </Wrapper>
    {/* <Scan /> */}
    {reason.broke ? <Broke name={setName} fields={name.firstName}   /> : null || reason.return ? <Return name={setName}  /> : null || reason.forgot ? <Forgot name={setName}  /> : null}
  
    {/* <Name name={setName} /> */}

    </TotalWrap>
  );
}

export default App;
