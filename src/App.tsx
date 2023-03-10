import React, { useState } from 'react';
import './App.css';
import { Input } from './components/Input';

function App() {

  let [message, setMessage] = useState(
    [
      { message: "message1" },
      { message: "message2" },
      { message: "message3" },
      { message: "message4" },
    ]
  )

  const addMessage = (title: string) => {
    let newMessage = { message: title };
    setMessage([newMessage, ...message])
  }

  let messages = message.map((el, i) => {
    return (
      <div key={i}>{el.message}</div>
    )
  })

  return (
    <div className="App">
      <Input callBack={addMessage} />
      {messages}
    </div>
  );
}

export default App;
