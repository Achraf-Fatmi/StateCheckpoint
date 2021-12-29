import React from "react";

import Pic from '../Profile/assets/pic.jpg'

class Profile extends React.Component {
state={
name: 'steve',
bio: 'a 10 year old monkey',
profession:'an entertainer',
interval : null,
timer: 0,

}
componentDidMount(){
    this.setState({
        interval : setInterval (()=>{
            this.setState({timer : this.state.timer +1})
        },1000)
    })
}
render(){
    return(
        <div>
            <h1 style={{color:'red'}}>Steve's Profile</h1>
            <h1 >This is {this.state.name} </h1>
            
            <p>he is {this.state.bio} and he works as {this.state.profession}</p>
           
            <img src={Pic} alt='Steve' width={300}/>

            <h2 style={{color:'red'}} >{this.state.timer} </h2>

        </div>
    )
}
}




export default Profile;

