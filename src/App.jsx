import './App.css'
import Header from './components/Header'
import { Outlet } from "react-router-dom";
import { Provider } from './context/AuthContext';
function App() {
  return (
    <>
      <Provider>
        <Header />
        <Outlet />
      </Provider>

    </>
  )
}

export default App;
