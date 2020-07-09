import React, { Component } from 'react'

class Settings extends Component {
    constructor(props) {
        super(props)

    }
    
    render() {
        return (
            <div className="set-time">
                <div className="setting-structure">
                    <div className="setting-title" id="break-length">
                        Session Length
                    </div>
                    <div className="button-container">
                        <button onClick={()=>this.props.incMe("ses")}>+</button>
                        <p>{this.props.sesLen}</p>
                        <button onClick={() => this.props.decMe("ses")}>-</button>
                    </div>
                </div>
                <div className="setting-structure">
                    <div className="setting-title">
                        Break Length
                    </div>
                    <div className="button-container">
                        <button onClick={() => this.props.incMe("break")}>+</button>
                        <p>{this.props.breakLen}</p>
                        <button onClick={() => this.props.decMe("break")}>-</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Settings
