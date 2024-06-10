import Navbar from './Pages/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
      <Router>
        <Routes>
        <Route path='/' element={<Navbar/>}/>

        </Routes>
      </Router>

  );
}

export default App;
