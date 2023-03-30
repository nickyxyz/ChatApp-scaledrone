import React, { createContext, useState} from 'react'
import Chat from '../Components/Chat'
import Loader from '../Components/Loader';


export const MessagesContext = createContext({});

const Home = ({ user, setUser }) => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  return (
    <div className="container">
      <Loader loading={loading} setLoading={setLoading} />
      <MessagesContext.Provider value={[messages, setMessages]}>
        <div className='home'>
          <div className="container">
            <Chat user={user} setUser={setUser} />
          </div>
        </div>
      </MessagesContext.Provider>
    </div>
  );
};

export default Home;