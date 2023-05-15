import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import ChatIcon from './components/ChatIcon/ChatIcon'
import Recommended from './components/Recommended/Recommended'
import Dropdown from './components/Navbar/Dropdown'

function App() {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className='app'>
      <Dropdown
        classname={ !showDropdown ? 'hidden' : '' }
        handleDropdown={ setShowDropdown }
      />
      <Navbar
        handleDropdown={ setShowDropdown }
      />
      <Hero />
      <Products />
      <Recommended />
      <ChatIcon />
    </div>
  )
}

export default App
