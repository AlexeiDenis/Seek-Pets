import './App.css'
import Header from './components/Header'
import { Outlet } from "react-router-dom";
import { createContext, useState, useEffect,useContext } from 'react';
import supabase from './hooks/useSupabase';
const authContext = createContext(0);
function App() {

  const [user, setUser] = useState(false);
  const l = useContext(authContext)
  console.log(l)
  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
    

      if (event === 'INITIAL_SESSION') {
        if (event === null) { return } else {

          setUser(session?.user.aud);
        }
      } else if (event === 'SIGNED_IN') {
        if (event === null) { return } else {

          setUser(session?.user.aud);
        }
      } else if (event === 'SIGNED_OUT') {
        setUser(false)
      }
    })

    return () => {
      data.subscription.unsubscribe()
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

export default App;
