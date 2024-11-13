import {BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import { Provider } from 'react-redux';


// Import from my homemade files
import Exercise from './components/Exercise';
import Home from './components/Home';
import { store } from './store';


//import styles & bootstrap to make the webpages gorgeous
import './AppStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercise />} />
        </Routes>
      </Router>
    </Provider>

  )
}

export default App;