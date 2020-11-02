import React, {Component} from "react";
import Degree from './Degree';
import LearningRate from "./LearningRate";
import './ModelSelection.css'
import Accuracy from './Accuracy'
import {Row, Col } from 'antd';
import Dropdown from './Dropdown';
import LinearRegreesion from './LinearRegression';
import Classification from './Classification';
import PolynomialRegression from './PolynomialRegression';

class ModelSelection extends Component {

    constructor(){
        super();
        this.state = {
          degree : 0,
          learn_rate : 0.1,
          accuracy : 0,
          model : ""
        }
        this.handleDegree = this.handleDegree.bind(this);
        this.handleLearnRate = this.handleLearnRate.bind(this);
        this.handleAccuracy = this.handleAccuracy.bind(this);
        this.handleModel = this.handleModel.bind(this);
      }
    
    handleDegree(value){
        this.setState({degree : value});
    }

    handleLearnRate(value){
        this.setState({learn_rate : value});
    }

    handleAccuracy(value){
        this.setState({ accuracy : value});
    }

    handleModel(value){
        this.setState({ model : value });
    }

    render(){

        const comp = () => {
            if(this.state.model ==="linear-reg"){
                return (
                <div>
                    <h3 >Learn Rate</h3>
                    <LearningRate handleChange={this.handleLearnRate} />
                </div>
                )
            }else if(this.state.model === "poly-reg"){
                return (
                <div>
                    <h3 >Degree</h3>  
                    <Degree handleChange={this.handleDegree}/>
                    <h3 >Learn Rate</h3>
                    <LearningRate handleChange={this.handleLearnRate}/>
                </div>
                )
            }
        }

        const Model = () => {
            if(this.state.model === "linear-reg" ){
                return  (
                    <LinearRegreesion handleAccuracy={this.handleAccuracy} learn_rate={this.state.learn_rate}/>
                )
            }else if(this.state.model === "poly-reg"){
                return (
                    <PolynomialRegression handleAccuracy={this.handleAccuracy} degree={this.state.degree} learn_rate={this.state.learn_rate}/>
                )
            }else if(this.state.model === "classification" ){
                return (
                    <Classification handleAccuracy={this.handleAccuracy} />
                )
            }
        }

        console.log(this.state.model);

        return (
            <Row>
                <Col span={6} className="side-bar">
                    <div className='maindiv' >
                        <div className="cards">
                            <p className='neon'><b>Dataset</b></p>
                            <Dropdown handleClick={this.handleModel} />
                            {comp()}   
                        </div>
                        
                    </div>    
                </Col>
                <Col span={12} className="main-content">
                    <div className="sketch">
                         {Model()}
                    </div>
                </Col>
                <Col span={6} className='side-bar'>
                    <div className="right-bar">
                        <Accuracy accuracy={this.state.accuracy}/>
                    </div>
                </Col>
            </Row>
           
        );
    }
}

export default ModelSelection;