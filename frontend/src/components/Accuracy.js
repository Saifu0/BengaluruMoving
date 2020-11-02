import React, { Component } from 'react'


class Accuracy extends Component {
    render() {
        return (
            <div className="maindiv">
                <div className="cards">
                    <h2 className='neon'>REPORT OF THE MODEL</h2>
                    <h3><b>Accuracy:  {this.props.accuracy}</b></h3>  
                </div>
            </div>
        )
    }
}

export default Accuracy
