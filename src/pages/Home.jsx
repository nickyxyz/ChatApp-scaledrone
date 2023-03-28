import React, { createContext, useState } from 'react'
import Chat from '../Components/Chat'


export const MessagesContext = createContext({});

const Home = ({ user, setUser }) => {

  const [messages, setMessages] = useState([]);

  return (
    <MessagesContext.Provider value={[messages, setMessages]}>
    <div className='home'>
        <div className="container">
            <Chat user={user} setUser={setUser}  />
        </div>
    </div>
    </MessagesContext.Provider>
  )
}

export default Home