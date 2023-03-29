import React, { useState, useRef } from "react";

const avatars = ['😄', '😊', '😎', '🙄', '👻', '🤠', '😋', '🥰'];

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState(avatars[0]);
  const selectedAvatar = useRef(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  function handleAvatarChange(event) {
    setAvatar(event.target.value);
    const selected = selectedAvatar.current;
    if (selected) {
      selected.style.backgroundColor = "";
    }
    event.target.parentNode.classList.add("selected");
    selectedAvatar.current = event.target.parentNode;
  }

  const handleAvatarClick = (event) => {
    const selected = selectedAvatar.current;
    if (selected) {
      selected.style.backgroundColor = "";
    }
    event.target.style.backgroundColor = "rgb(226, 134, 150)";
    selectedAvatar.current = event.target;
    setAvatar(event.target.textContent);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username !== "" && avatar !== "") {
      setUser({ username: username, avatar: avatar });
    }
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input className="inputUsername" type="text" placeholder="username" value={username} onChange={handleUsernameChange} />
          <ul className="selectAvatar">
            {avatars.map((a, index) => (
              <li key={"avatar" + index}>
                <label>
                  <input
                    className="emoji"
                    type="radio"
                    name="avatar"
                    value={a}
                    checked={avatar === a}
                    onChange={handleAvatarChange}
                    style={{ display: "none" }}
                  />
                  <span
                    className={"avatar" + (avatar === a ? " selected" : "")}
                    onClick={handleAvatarClick}
                  >
                    {a}
                  </span>
                </label>
              </li>
            ))}
          </ul>
          <button className="enterChat" type="submit">Enter chat</button>
        </form>
      </div>
    </div>
  );
};


export default Login