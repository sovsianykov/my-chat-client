import React, { useCallback, useEffect, useState } from "react";
import MyEventSource from "./components/MyEventSource/MyEventSource";
import Login from "./components/Login/Login";
import Context from "./Context";
import "react-toastify/dist/ReactToastify.css";
import MainTitle from "./components/Title/MainTitle";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {}, []);

  const onLoginHandler = useCallback((isAuth: boolean) => {
    setIsLogged(isAuth);
  }, []);

  return (
    <Context>
      <MainTitle />
      {!isLogged ? <Login onLogin={onLoginHandler} /> : <MyEventSource />}
    </Context>
  );
}

export default App;
