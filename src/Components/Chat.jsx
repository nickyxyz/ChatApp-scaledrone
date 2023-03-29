import React, { useContext, useEffect } from 'react'
import Messages from './Messages'
import Input from './Input'
import { MessagesContext } from '../pages/Home';
import { SlLogout } from 'react-icons/sl'

const CHANNEL_ID = "vnc4ZvZOQv5i9eca";

const Chat = ({ user, setUser }) => {

  const [messages, setMessages] = useContext(MessagesContext);

  const hour = new Date().getHours();
  const welcomeTypes = ["Good Morning!", "Good Afternoon!", "Good Evening!"];
  let welcomeText = "";
  if (hour < 12) {
    welcomeText = welcomeTypes[0];
  } else if (hour < 18) {
    welcomeText = welcomeTypes[1];
  } else {
    welcomeText = welcomeTypes[2];
  }

  const handleLogout = (event) => {
    setUser(null);
  }


  let drone = new window.Scaledrone(CHANNEL_ID, {
    username: user.username,
    avatar: user.avatar
  });

  useEffect(() => {
    drone = new window.Scaledrone(CHANNEL_ID, {
      username: user.username,
      avatar: user.avatar
    });

    drone.on('open', () => {
      console.log('Connected to Scaledrone');
      const room = drone.subscribe("general");
      room.on('message', (message) => {
        console.log('Received message:', message);
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    });

    return () => {
      console.log('Disconnected from Scaledrone');
      drone.close();
    };
  }, []);

  const handleSendMessage = (message) => {
    drone.publish({
      room: "general",
      message: {
        username: user.username,
        avatar: user.avatar,
        message: message,
      },
    });
  }

  return (
    <div className='chat'>
      <div className="chatInfo">
        <div>
          <button onClick={handleLogout}><SlLogout className='logout' style={{ fontSize: '20px' }} /></button>
        </div>
        <div>
          <span>{welcomeText} {user.avatar} {user.username}</span>
        </div>
      </div>
      <Messages messages={messages || []} />
      <Input onSendMessage={handleSendMessage} />
    </div>
  )
}

export default Chat
