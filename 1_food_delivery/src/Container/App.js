import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import Restaurant from '../Components/Restaurant';
import './App.css';



class App extends Component {
  render () {
    return (    
     <div>
        <Navbar/> <br/> <br/>
        <Restaurant/>
     </div>

    );
  }
}

export default App;
