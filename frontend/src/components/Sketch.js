import React, { Component } from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense

let x = [];
let y = [];

let y1, y2;

const ws = new WebSocket("ws://localhost:8000/ws/visualizer/");

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

class sketch extends Component {
  constructor(props) {
    super(props);
  }

  setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  draw = (p5: p5Types) => {
    if (p5.mouseIsPressed) {
      let x1 = p5.map(p5.mouseX, 0, p5.width, 0, 1);
      let y1 = p5.map(p5.mouseY, 0, p5.height, 1, 0);
      if (p5.mouseButton === p5.LEFT) {
        y.push(1);
      } else {
        y.push(0);
      }
      x.push([x1, y1]);
    }
    p5.background(0);

    let obj = {
      x_train: x,
      y_train: y,
    };

    ws.send(JSON.stringify(obj, null, 1));

    p5.strokeWeight(8);
    for (let i = 0; i < x.length; i++) {
      if (y[i] === 1) {
        p5.stroke("blue");
      } else {
        p5.stroke("red");
      }
      let px = p5.map(x[i][0], 0, 1, 0, p5.width);
      let py = p5.map(x[i][1], 0, 1, p5.height, 0);
      p5.point(px, py);
    }

    ws.onmessage = (evt) => {
      const message = JSON.parse(evt.data);

      y1 = p5.map(message["y1"], 0, 1, p5.height, 0);

      y2 = p5.map(message["y2"], 0, 1, p5.height, 0);
    };
    const lineX = [0, 1];
    let x1 = p5.map(lineX[0], 0, 1, 0, p5.width);
    let x2 = p5.map(lineX[1], 0, 1, 0, p5.width);

    p5.stroke(255);
    p5.strokeWeight(2);
    p5.line(x1, y1, x2, y2);

    ws.onclose = () => {
      console.log("disconnected");
    };
  };

  render() {
    return (
      <div>
        <Sketch setup={this.setup} draw={this.draw} />
      </div>
    );
  }
}

export default sketch;
