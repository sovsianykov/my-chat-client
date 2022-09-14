import React, { createContext, useState } from "react";

export const NameContext = createContext();

const Context = ({ children }) => {
  const [name, setName] = useState("guest");

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

export default Context;
