import "./style.scss";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useState } from "react";


function App() {

  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? <Home user={user} setUser={setUser} /> : <Login setUser={setUser} />}
    </div>
  );
}

export default App;