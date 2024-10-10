import './App.css'
import { useState } from 'react';
import { Navbar } from './Components/Navbar'
import { Papolar } from './Components/Papolar'
import { Quick } from './Quick';
import { Find } from './Components/Find';
import { Countless } from './Components/Countless';
import { Latest } from './Components/Latest';
import { Images } from './Components/Images';
import { Footer } from './Components/Footer';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
      document.body.classList.toggle('bg-white', !isDarkMode);
      document.body.classList.toggle('bg-gray-900', isDarkMode);
  };
  return (
    <>
    <Navbar></Navbar>
    <Papolar></Papolar>
    <Quick></Quick>
    <Find></Find>
    <Countless></Countless>
    <Latest></Latest>
    <Images></Images>
    <Footer></Footer>
    </>
  )
}

export default App
