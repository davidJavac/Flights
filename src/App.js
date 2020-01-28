import React from 'react';
import Search from './search';
import './css/home.css';

class App extends React.Component {
  
  constructor(props){

    super(props);
    
  }

  render(){
    
    return (
        <>
          <div id = 'container'>
            <div class = 'container_banner'>
              <img src={require("./images/banner_plane.jpg")} alt= 'avion' class = 'banner'/>
              <div class = 'centered'>
                <h1>Home Page</h1>    
                <h2>Promotions</h2>
              </div>
            </div>
            <div>
              <Search></Search>      
            </div>
          </div>
        
      </>
    );

  }
}

export default App;