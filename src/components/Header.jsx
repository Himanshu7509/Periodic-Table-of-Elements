import React from 'react'
import { ThemeContext } from '../App'
import { useContext } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'


export default function Header({ toggleDarkMode }) {
    const isDarkMode = useContext(ThemeContext)

    let fontColor = isDarkMode ? "text-white" : "text-slate-800"

    return (
        <div className={ isDarkMode? `bg-slate-700 border-b border-slate-400`: `bg-slate-100 border-b border-slate-200` }>
                <div className="flex justify-around py-4 ">
                    <h1 className={`text-xl font-bold ${fontColor}`}>The Periodic Table of Elements</h1>
                    <span className="cursor-pointer">
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