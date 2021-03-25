import React, { createContext, useContext, useState } from 'react';

export const Context = createContext({});


export const Provider = (props) => {
  const { children } = props;

  const [showSidebar, setShowSidebar] = useState(false);

  const context = {
    showSidebar,
    setShowSidebar,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

export const useSidebarContext = () => useContext(Context);
