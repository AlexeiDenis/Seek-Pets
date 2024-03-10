import { createContext, useState, useEffect } from 'react';
import supabase from '../hooks/useSupabase';

const AuthContext = createContext(0);
function Provider({ children }) {
    const [user, setUser] = useState(false);
  
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
  const valueToShare = {
    user:user
  };

  return (
    <AuthContext.Provider value={valueToShare}>
      {children}
    </AuthContext.Provider>
  );
  }
export { Provider };
export default AuthContext;