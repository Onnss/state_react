import React from "react";
class Timer extends React.Component {
    constructor(){
        super();
        this.state={
            timer : 0,
            intervall : null
        }
    }
    componentDidMount(){
        this.setState({
         intervall : setInterval(()=> this.setState({
            timer: this.state.timer +1
         }),1000)
        })
    }
    
    componentWillUnmount(){
        clearInterval(this.state.intervall)
    }
    render() { 
        return (
            <h6>The Timer has mounted since {this.state.timer}</h6>
        );
    }
}
 
export default Timer;