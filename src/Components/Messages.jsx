import React, { useRef } from 'react';
import Message from './Message';
import useAutoScroll from '../Hooks/scroll-chat';

const Messages = ({ messages }) => {
  const messagesRef = useRef(null);
  useAutoScroll(messagesRef);


  return (
    <div className='messages' ref={messagesRef}>
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default Messages;