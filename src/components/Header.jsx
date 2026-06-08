import React from 'react'
import { ThemeContext } from '../App'
import { useContext } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'


export default function Header({ toggleDarkMode }) {
    const isDarkMode = useContext(ThemeContext)

    let fontColor = isDarkMode ? "text-white" : "text-slate-800"
    let headerBg = isDarkMode ? "bg-slate-800/80 backdrop-blur-md border-b border-slate-600/50 shadow-lg" : "bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-lg"

    return (
        <div className={headerBg}>
                <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
                    <h1 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent`}>
                        The Periodic Table of Elements
                    </h1>
                    <span className="cursor-pointer hover:scale-110 transition-transform duration-200">
                    <DarkModeSwitch
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={30}
                        />
                    </span>
                    
                </div>
            
        </div>
    )
}