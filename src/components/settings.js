import React, { Component } from 'react'

class Settings extends Component {
    render() {
        return (
            <div className="set-time">
                <div className="setting-structure">
                    <div className="setting-title" id="break-length">
                        Session Length
                    </div>
                    <div className="button-container">
                        <button>+</button>
                        <p>~</p>
                        <button>-</button>
                    </div>
                </div>
                <div className="setting-structure">
                    <div className="setting-title">
                        Session Length
                    </div>
                    <div className="button-container">
                        <button>+</button>
                        <p>~</p>
                        <button>-</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Settings
