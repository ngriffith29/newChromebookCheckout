import React, {useState} from 'react'
import Barcode from './1.jpg'

function Scan() {
   
const [assetId, setId] = useState("")

const onChange = (e) => {
    setId(e.target.value)
}

const sub = (e) => {
    e.preventDefault()
    console.log(assetId)
    setId("")
}


    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
         
           <form onSubmit={sub} style={{backgroundColor: 'beige'}}>
        
            <label>
            <h3>Scan the barcode on the back of your device<br></br></h3>
            <img src={Barcode}  style={{height: '200px', marginBottom: "25px", marginLeft: '37%'}}  />
            <br />
            <input type="text" value={assetId} onChange={onChange} style={{marginLeft: '32%'}} autoFocus onFocus={e => e.currentTarget.select()} />
            </label>
            <br />
            <input type="submit" value="submit" style={{marginLeft: '45%', marginBottom: '4%'}}   />
           </form>
        </div>
    )

  
}

export default Scan
