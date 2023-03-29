import React from 'react'

const Message = ({message}) => {

  const data = message.data || null;

  return data ? (
    <div className='message owner'>
      <div className="messageContent">
        <strong>{data.avatar} {data.username}</strong>
        <p>{data.message}</p>
      </div>
    </div>
  ) : null;
}


export default Message







