import React, { Component } from "react";
import PolynomialRegression from './PolynomialRegression';
import LinearRegression from './LinearRegression';
import Classification from './Classification';


class sketch extends Component {

  render() {

    console.log(this.props.model_selection);
    const comp = () => {
      
      if(this.props.model_selection === "linear-reg"){
        return (<LinearRegression  />)
      }else if(this.props.model_selection === "poly-reg"){
        return (<PolynomialRegression  />)
      }else{
        return (<Classification  />)
      }
    }
   
    return (
      <div>
        {comp()}
      </div>
    );
  }
}

export default sketch;
