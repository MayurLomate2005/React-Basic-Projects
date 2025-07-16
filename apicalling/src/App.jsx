import axios from 'axios'

import './App.css'
import { useState } from 'react'

function App() {
  const [user , setuser ] = useState(null)


  const apihandle = async() =>{
    const response = await axios.get('https://randomuser.me/api/')
    const data = response.data.results[0]
    console.log(data);
    setuser({
      Name : `${data.first} ${data.last}` ,
      Picture : data.picture.large,
      DOB : data.dob.age
    })

  }

  return (
    <>
    <button onClick={apihandle}>
      Click me !
    </button>
    {user && (

      <div>
        <div><img src={user.Picture} alt="" /></div>
        <div>{user.Name}</div>
        <div>{user.DOB}</div>
      </div>



    )
    }
      
    </>
  )
}

export default App
