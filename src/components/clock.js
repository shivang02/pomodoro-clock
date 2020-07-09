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
            title:'Session',
            isRunning: false,
            newSes:true
        }
    }
   
    startClock= () =>{
        this.setState({
            newSes:false
        })
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

        let audioObj = document.getElementById("beep")
        if (audioObj != null) {
            audioObj.currentTime = 0;
            audioObj.play()
        }
       
        if(this.state.break) {
            this.setState({
                minutes:this.state.breakLen,
                seconds:0,
                title:'Break'
            })
        
            this.startClock()
        }
        else {
            this.setState({
                minutes: this.state.sesLen,
                seconds: 0,
                title: 'Session'
            })
            this.startClock()
        }
    }


    displayTime =(val) =>{
        if(val=='min') return (this.state.minutes < 10 )? `0${this.state.minutes}` : this.state.minutes
        else if(val=='sec') return (this.state.seconds < 10 )? `0${this.state.seconds}` : this.state.seconds
    }
    
    resetClock =() =>{
        clearInterval(c)
        this.setState({
            sesLen: 25,
            breakLen: 5,
            minutes: 25,
            seconds: 0,
            play: false,
            reset: false,
            break: false,
            title: 'Session',
            isRunning:false,
            newSes:true
        })
    }

    incMe= (val) =>{
        let sesLen = this.state.sesLen
        let breakLen = this.state.breakLen
        let minutes= this.state.minutes
        let newSes= this.state.newSes
        if(newSes&&(val=="ses"&&sesLen<60)) {
            this.setState({
                sesLen:sesLen+1,
                minutes:minutes+1
            })
        } else if(newSes&&(val=="break")&&breakLen<60) {
            this.setState({
                breakLen: breakLen + 1,
                
            })
        }
    }

    decMe = (val) => {
        let sesLen = this.state.sesLen
        let breakLen = this.state.breakLen
        let minutes = this.state.minutes
        let newSes = this.state.newSes
        if (newSes && (val == "ses" && sesLen >1)) {
            this.setState({
                sesLen: sesLen - 1,
                minutes: minutes - 1
            })
        } else if (newSes && (val == "break") && breakLen > 1) {
            this.setState({
                breakLen: breakLen - 1,

            })
        }
    }


    render() {
        return (
            <div className="work-area">
                <Settings sesLen={this.state.sesLen} breakLen={this.state.breakLen} incMe={(val) => this.incMe(val)} decMe={(val) => this.decMe(val)}/>
                <div className="title" >
                    <input value={this.state.title} id="title"/>
                </div>
                <div className="clock-view">
                    <input readOnly value={this.displayTime('min')} className="time" id="min" />
                    <input readOnly value={this.displayTime('sec')} className="time" id="sec" />
                </div>
                <Controls startClock={this.startClock} stopClock={this.stopClock} resetClock={this.resetClock} play={this.state.play}/>
                <audio src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3" id="beep" />
            </div>
        )
    }
}

export default Clock
