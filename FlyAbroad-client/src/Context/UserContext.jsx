{/* eslint-disable react-refresh/only-export-components */}
import { createContext, useState, useContext } from "react";

const UserContext = createContext(null);

//Custom hook for consuming context
export const useData = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  // Start with null (no user) instead of empty object

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

//Alternative accessor if you prefer direct function call (custom hook name must start with "use")
export const useGetData = () => useContext(UserContext);