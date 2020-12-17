import React, {useState} from 'react'

function Name(props) {

    const [name, setName] = useState({
        firstName: '',
        lastName: '',


    })

    const onChange = (e) => {
        setName({...name, [e.target.name]: e.target.value })
      
    } 
const sub = (e) => {
    e.preventDefault()
    props.name({...name, [e.target.name]: e.target.value })
    setName({
        firstName: '',
        lastName: '',
    })

}
    return (
        <form onSubmit={sub}>
          <input type="text" name="firstName" value={name.firstName} onChange={onChange} />
            <br />
          <input type="text" name="lastName" value={name.lastName}  onChange={onChange} />
          <br />  
          <button type="submit">Submit</button>
        </form>
    )
}

export default Name
