import React, { Component } from 'react'

class Controls extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             toggle:false
        }
    }
    

    clickToggle= ()=>{
        let toggle= this.state.toggle
        this.setState({
            toggle:!toggle
        })
     if(!toggle) {
        this.props.startClock()
    }
    else {
        this.props.stopClock()
    }
    }

    render() {
        return (
            <div className="control-pad">
                <button onClick={() => this.clickToggle()}><i class="fa fa-play" aria-hidden="true"></i><i class="fa fa-pause" aria-hidden="true"></i></button>
                <button onClick={this.props.resetClock}><i class="fa fa-retweet" ></i></button>
            </div>
        )
    }
}

export default Controls
