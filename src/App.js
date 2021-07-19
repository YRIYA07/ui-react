import React, { useState } from "react";
import Login from "./Component/Login";
import Inner from "./Component/Inner";

function App() {
  const [logged, setLogged] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLogged(true);
  };

  const src =
    "https://media.istockphoto.com/photos/portrait-of-businessman-black-and-white-picture-id514581268?k=6&m=514581268&s=612x612&w=0&h=BdyzkkExo13L_7ee_ccsWNrg1YuoZ_x9nGx8F0cuABg=";

  return (
    <div className="app">
      {!logged ? <Login logged={handleLogin} src={src} /> : <Inner src={src} />}
    </div>
  
  );
}

export default App;
