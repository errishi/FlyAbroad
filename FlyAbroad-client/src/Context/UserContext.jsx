import { createContext, useState, useEffect } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in on mount
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        // Optionally verify token or fetch user profile from backend
        // For now, just check if token exists
        const userData = localStorage.getItem('userData');
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error('Error loading user:', error);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userData');
      }
    }
    setIsLoading(false);
  }, []);

  const updateUser = (userData) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem('userData', JSON.stringify(userData));
    } else {
      localStorage.removeItem('userData');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userData');
  };

  return (
    <UserContext.Provider value={{ user, setUser: updateUser, logout, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
