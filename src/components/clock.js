import React, { Component } from 'react'
import Settings from './settings';
import Controls from './controls';
var c;
class Clock extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            sesLen:25,
            breakLen:5,
            minutes:25,
            seconds :0,
            play:false,
            reset:false,
            break:false,
            title:'Session'
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
                else {
                    clearInterval(c);
                    this.setState({break:!this.state.break})
                    this.typeChecker()
                } 
            }
        }, 1000)        
    }

    stopClock =()=>{
        clearInterval(c);
    }
    
    typeChecker =() =>{
        clearInterval(c);
        if(this.state.break) {
            this.setState({
                minutes:this.state.breakLen,
                seconds:0
            })
            this.startClock()
        }
        else {
            this.setState({
                minutes: this.state.sesLen,
                seconds: 0
            })
            this.startClock()
        }
    }


    displayTime =(val) =>{
        if(val=='min') return (this.state.minutes < 10 )? `0${this.state.minutes}` : this.state.minutes
        else if(val=='sec') return (this.state.seconds < 10 )? `0${this.state.seconds}` : this.state.seconds
    }
    
    
    render() {
        return (
            <div className="work-area">
                <Settings />
                <div className="title" >
                    <input value={this.state.title} id="title"/>
                </div>
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
