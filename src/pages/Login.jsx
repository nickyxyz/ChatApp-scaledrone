import React, { useState } from "react";

const avatars = ['😄', '😊', '😎', '🙄', '👻', '🤠', '😋', '🥰'];

const Login = ({ setUser }) => {

  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState(avatars[0]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }


  const handleAvatarChange = (event) => {
    setAvatar(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(username !== "" && avatar !== ""){
      setUser({username: username, avatar: avatar});
    }
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" value={username} onChange={handleUsernameChange} />
            <ul className="selectAvatar">
              {avatars.map((a, index) => (
                <li key={"avatar"+index}>
                  <label>
                    <input
                      type="radio"
                      name="avatar"
                      value={a}
                      checked={avatar === a}
                      onChange={handleAvatarChange}
                    />
                    {a}
                  </label>
                </li>
              ))}
            </ul>        
            <button type="submit">Enter chat</button>
        </form>
        
      </div>
    </div>
  );
};

//label zapravo zamjenjuje 'odaberi datoteku'button i moze biti slika
export default Login;
