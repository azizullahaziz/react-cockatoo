import React from "react"

function Navbar() {
  return (
    <>
      <nav>
        <div className="heading">
          <h4>Todo App</h4>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/todo">Todo</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
