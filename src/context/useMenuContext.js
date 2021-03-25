import React, { createContext, useContext, useState } from 'react';

const Context = createContext({});


export const Provider = (props) => {
  const { children } = props;

  const [showMenu, setShowMenu] = useState(false);

  const context = {
    showMenu,
    setShowMenu,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};



export const useMenuContext = () => useContext(Context);
