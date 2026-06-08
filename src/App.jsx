import { useState } from 'react'
import './App.css'
import Table from './components/Table'
import Header from './components/Header'
import { createContext } from 'react'

const ThemeContext = createContext()

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)

function toggleDarkMode(){
    setIsDarkMode(prevState=> !prevState)
}

let bgColor = isDarkMode ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" : "bg-gradient-to-br from-slate-50 via-white to-slate-100"
  let textColor = isDarkMode ? "text-white" : "text-slate-800"
  
  return (
    <ThemeContext.Provider value={isDarkMode}>
      <div className={`${bgColor} min-h-screen transition-all duration-500 ease-in-out ${textColor}`}>
 
          <Header 
            toggleDarkMode={toggleDarkMode} />
          <Table />

      </div>
     
    

    </ThemeContext.Provider>
   
  )
}

export default App
export { ThemeContext }