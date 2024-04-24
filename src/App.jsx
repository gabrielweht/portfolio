import { useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Profile from './sections/profile/profile'
import Stack from './sections/stack/stack'

function App() {

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = '#profile'
    }
  }, [])

  return (
    <>
        <Profile />
        <Stack />
        <Navbar />

    </>
  )
}

export default App
