import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import "./App.css"

export default function App() {
    return (
        <div className="container">
              <div className="main">
              <Navbar />
            <Main />
              </div>
           
        </div>
    )
}