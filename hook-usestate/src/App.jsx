import { BrowserRouter as Router,Routes,Route } 
from 'react-router';
import RegistroEstudiantes from './components/RegistroEstud/RegistroEstud';
import Todo from './components/Todo/Todo';
import Calculadora from './components/Calculadora/Calculadora';
import Nav from './components/Nav';

function App() {

  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Calculadora/>} />
          <Route path="/registroEstud" element={<RegistroEstudiantes/>} />
          <Route path="/todo" element={<Todo/>} />
          
        </Routes>
      </Router>
     
    </>
  )
}

export default App

