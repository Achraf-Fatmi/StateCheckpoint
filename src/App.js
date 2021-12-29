

import React from 'react';
import './App.css';
import Profile from './Component/Profile/Profile';


class  App extends React.Component {
  state={
show: false
  }
  
toggleVisibility=()=>{
  this.setState({
    show: !this.state.show,
  })
}

  render(){
  return (
  
    <div className="App" style={{alignItems: 'center' ,color: 'dodgerblue' , textAlign:'center'}} >
  <button style={{color:'white', background:'dodgerblue', borderRadius:10, border:'none'}} onClick={this.toggleVisibility}>
  {this.state.show ? "Hide profile": "Show profile"}
  </button>

      
     {this.state.show && <Profile/>}
    </div>
  );
}
}

export default App;
