import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Heading from '../components/Heading';
import Paraline from '../components/Paraline';
import Currenttime from '../components/Currenttime';
function App() {
  
         return(
          <div>
          <Heading/>
          <Paraline/>
          <Currenttime/>
          </div>
    
          
         );
}

export default App
