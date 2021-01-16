import './App.css';
import {Router, Link} from '@reach/router';
import Main from './views/Main';
import Create from './views/Create';

function App() {
  return (
    <div className="App">
        <div className="d-flex justify-content-center flex-column">
            <h1 className="text-center">Disco dogs</h1>
            <Link to = "/">Home</Link>            
        </div>
        <Router>
            <Main path ="/"></Main>
            <Create path = "/new"></Create>
        </Router>
    </div>
  );
}

export default App;
