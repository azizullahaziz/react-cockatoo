import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"

const InputWithLabel = ({ todoTitle, handleTitleChange }) => {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <>
      <input type="text" id="todoTitle" name="todoTitle" value={todoTitle} onChange={handleTitleChange} ref={inputRef} className="TodoInput" placeholder="New Todo Title" autoComplete="off" />
    </>
  )
}

InputWithLabel.propTypes = {
  handleTitleChange: PropTypes.func.isRequired,
}

export default InputWithLabel
