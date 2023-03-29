import React, { useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'

export default function Input({ onSendMessage }) {


  const [message, setMessage] = useState('');

  function onChange(event) {
    setMessage(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    if (message !== '') {
      onSendMessage(message);
      setMessage('');
    }
  }

  return (
    <div className="chat__input">
      <form className="msg-form" onSubmit={onSubmit}>
        <input
          className="msg-form__input"
          onChange={onChange}
          value={message}
          type="text"
          placeholder="Enter your message..."
          autoFocus={true}
        />
        <button className="msg-form__btn"><AiOutlineSend style={{ fontSize: '30px', color: 'green' }} /></button>
      </form>
    </div>
  );
}
