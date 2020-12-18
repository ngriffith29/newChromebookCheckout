import React, {useState} from 'react'
import Name from '../Name'
import Scan from '../Scan'
function Broke(props) {
const [tracker, setTracker] = useState({
    name: false, //name component
    assetId: false, //scan component
    loanerId: false // forogot component
})

    console.log(props)
    return (
        <div>
            <h1>Broke</h1>
            {/* <Name name={props.name}/> */}
            {/*  props.name is needed in the home componenet so it can set the state  */}
            {props.fields === "" ? <Name name={props.name}  /> : <Scan />}
        </div>
    )
}

export default Broke
