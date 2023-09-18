 import { useState } from 'react'

import './App.css'

function App() {
  const [site, setSite] = useState(null)
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  function handleSiteChange() {
    const Site = document.getElementById('site').value
    const user = document.getElementById('user').value
    const pass = document.getElementById('pass').value


    setSite(Site)
    setUsername(user)
    setPassword(pass)
    
    if (site === null || username === null || password === null) {
      alert('Please enter all fields')
    }
    else {
    console.log(site)
    console.log(username)
    }
  }




  return (
    <>
      <input id="site" type="text" placeholder="Enter site" />
      <input id="user" type="text" placeholder="Enter username" />
      <input id="pass" type="text" placeholder="Enter password" />
      <button onClick={handleSiteChange}>SAVE</button>
    </>
  )
}

export default App
