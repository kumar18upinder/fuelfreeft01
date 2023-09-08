import React, { createContext, useContext, useState } from "react";

const UnreadNotificationContext = createContext();

const initialState = {
  unreadCount: 0,
  incrementUnreadCount: () => {},
  markNotificationAsRead: () => {},
};

export const UnreadNotificationProvider = ({ children }) => {
  const [unreadCount, setUnreadCount] = useState(initialState.unreadCount);

  const incrementUnreadCount = () => {
    setUnreadCount(unreadCount + 1);
  };

  const markNotificationAsRead = () => {
    setUnreadCount(0);
  };

  const contextValue = {
    unreadCount,
    incrementUnreadCount,
    markNotificationAsRead,
  };

  return (
    <UnreadNotificationContext.Provider value={contextValue}>
      {children}
    </UnreadNotificationContext.Provider>
  );
};

export const useUnreadNotification = () => {
  return useContext(UnreadNotificationContext);
};
