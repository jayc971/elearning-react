import './App.css';
import Home from './routes/Home/Home';
import {Outlet} from "react-router-dom";

function App() {
  return (<>
      <Outlet/>
      <main>
          <Home/>
      </main>
  </>);
}

export default App;
