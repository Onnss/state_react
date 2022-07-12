import React from 'react';
import './App.css';
import Timer from './Component/Timer';
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Person :{ fullName:'Flen Ben Foulen',bio:'too shy to talk', imgSrc:'https://simg.nicepng.com/png/small/128-1280406_view-user-icon-png-user-circle-icon-png.png', profession:'Student'},
      shows:true,
      timer : 0,
      intervall : null
    };
  }
  
  render() {
    return(
    <div className='App container card shadow-lg p-3 mb-5 bg-body rounded mt-5 w-25'>
    {this.state.shows && <> 
    <h1>{this.state.Person.fullName}</h1>
    <h2>{this.state.Person.profession}</h2>
    <h3>{this.state.Person.bio}</h3>
    <img src={this.state.Person.imgSrc} alt="person" className='w-100'/>
    </>}
    <button onClick={()=>this.setState({shows:!this.state.shows})} className='btn btn-success fs-3'>{this.state.shows? 'Hide': 'Show' }</button>
    {this.state.shows && <><hr /><Timer/></> }
    </div>)
  }
}

export default App;
