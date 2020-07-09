import React, { Component } from 'react'
import Settings from './settings';
import Controls from './controls';
var c;
class Clock extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            minutes:25,
            seconds :0,
            play:false,
            reset:false
        }
    }
   
    startClock= () =>{
        c =setInterval(() => {
            if(this.state.seconds!=0) {
                this.setState({
                    seconds: this.state.seconds - 1
                })
            }
            else {
                this.setState({
                    seconds: 59
                })
                if(this.state.minutes!=0){
                    this.setState({
                        minutes:this.state.minutes-1
                    })
                } 
            }
        }, 1000)        
    }

    stopClock =()=>{
        clearInterval(c);
    }
    
    displayTime =(val) =>{
        if(val=='min') return (this.state.minutes < 10 )? `0${this.state.minutes}` : this.state.minutes
        else if(val=='sec') return (this.state.seconds < 10 )? `0${this.state.seconds}` : this.state.seconds
    }
    
    
    render() {
        return (
            <div className="work-area">
                <Settings />
                <div className="clock-view">
                    <input readOnly value={this.displayTime('min')} className="time" id="min" />
                    <input readOnly value={this.displayTime('sec')} className="time" id="sec" />
                </div>
                <Controls startClock={this.startClock} stopClock={this.stopClock} play={this.state.play}/>
            </div>
        )
    }
}

export default Clock
