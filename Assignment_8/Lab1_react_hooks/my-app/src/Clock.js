import React, { useState, useEffect } from 'react';

const Clock = (props) => {

  const [date, setDate] = useState(new Date());
  const [textInput, setTextInput] = useState(React.createRef);

  const focusInput = () => {
    setTextInput(textInput?.current.focus());
  }

  useEffect(() => {
    setInterval(() => tick(), 1000)
  }, [])

  const tick = () => {
    setDate(new Date())
  }

  return(
    <div>
      <h1>Hello</h1>
      <h2>It is {date.toLocaleString()}</h2>
      <input type="text" ref={textInput} onClick={focusInput}></input>
    </div>
  )
}

export default Clock;

