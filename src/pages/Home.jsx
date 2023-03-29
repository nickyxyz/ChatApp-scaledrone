import React, { createContext, useState, useEffect } from 'react'
import Chat from '../Components/Chat'


export const MessagesContext = createContext({});

const Home = ({ user, setUser }) => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [messages, setMessages] = useState([]);

  return (
    <div className="container">
      {loading ? (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      ) : (
    <MessagesContext.Provider value={[messages, setMessages]}>
    <div className='home'>
        <div className="container">
            <Chat user={user} setUser={setUser}  />
        </div>
    </div>
    </MessagesContext.Provider>
      )}
    </div>
  )
}

export default Home