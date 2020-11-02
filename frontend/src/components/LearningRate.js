import React, { Component } from 'react';
import { Slider ,Col} from 'antd';

export class LearningRate extends Component {

    constructor(){
        super();
        this.state = {
            learn_rate : 0.0001
        }
        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(value){
        await this.setState({
            learn_rate : value
        });
        this.props.handleChange(this.state.learn_rate);
    }

    formatter(value) {
        return `${value}%`;
    }

    render() {
        const marks = {
            0.0001: {style: {
                  color: '#696969',
                  },label: <small>0.0001</small>,},
            0.0003: {style: {
              color: '#696969',
              },label: <small>0.0003</small>,},
            0.001: {style: {
              color: '#696969',
              },label: <small>0.001</small>,},
            0.003: {style: {
              color: '#696969',
              },label: <small>0.003</small>,},
            0.01: {style: {
              color: '#696969',
              },label: <small>0.01</small>,},
            0.03:  {style: {
              color: '#696969',
              },label: <small>0.03</small>,},
            0.1:  {style: {
              color: '#696969',
              },label: <small>0.1</small>,},   
            0.3:  {style: {
                color: '#696969',
                },label: <small>0.3</small>,},
            1: {
              style: {
                color: '#f50',
              },
              label: <strong>1</strong>,
            },
          };

        console.log(this.state.learn_rate);
        
        return (
            <div>
            {/* <p>Learning Rate</p> */}
            <Col min={1} max={5} span ={18} offset={6}>
                <Slider min={0.0001} max={1} marks={marks} onChange={this.handleChange} step={null}/>
                </Col>
            </div>
        )
    }
}

export default LearningRate;
