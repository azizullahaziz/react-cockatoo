import React from "react"
import "./Home.css"
import Navbar from "./Navbar"

function Home() {
  return (
    <>
      <Navbar />
      <div className="body">
        <p className="WelcomeText">Welcome to Todo App</p>
      </div>
    </>
  )
}

export default Home
