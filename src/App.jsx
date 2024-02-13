import './App.css'
import Header from './components/Header'
import { Outlet } from "react-router-dom";
import { createContext, useState, useEffect } from 'react';
import supabase from './hooks/useSupabase';
export const authContext = createContext();
function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
      const session = supabase.auth.getSession();
      setUser(session?.user ?? null);

      const { data: authListener } = supabase.auth.onAuthStateChange(
          async (_event, session) => {
              const currentUser = session?.user;
              setUser(currentUser ?? null);
          }
      );

      return () => {
          authListener?.subscription.unsubscribe();
      };
  }, []);
  return (
    <>
    <authContext.Provider value={user}>
      <Header />
      <Outlet />
    </authContext.Provider>
      
    </>
  )
}

export default App
