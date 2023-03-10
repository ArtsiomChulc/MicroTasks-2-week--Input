import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { InputWithButton } from './components/InputWithButton';

function App() {

  let [message, setMessage] = useState(
    [
      { message: "message1" },
      { message: "message2" },
      { message: "message3" },
      { message: "message4" },
    ]
  )

  let [title, setTitle] = useState('')


  const addMessage = (title: string) => {
    let newMessage = { message: title };
    setMessage([newMessage, ...message])
  }

  const callBackHandler = () => {
    addMessage(title);
    setTitle('');
  }

  let messages = message.map((el, i) => {
    return (
      <div key={i}>{el.message}</div>
    )
  })

  return (
    <div className="App">
      {/* <InputWithButton callBack={addMessage} /> */}
      <Input setTitle={setTitle} title={title} />
      <Button name='+' callBack={callBackHandler} />
      {messages}
    </div>
  );
}

export default App;
