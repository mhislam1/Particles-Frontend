// import React from 'react'; 
// npx create-react-app did NOT 
// come with this import 
import './App.css';
import Home from './components/index.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from './components/Resume.js'
import {Route} from 'react-router-dom';

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path='/' component={Home} />
      <Route path='/resume' component={Resume} />
    </>
  );
};

export default App;
