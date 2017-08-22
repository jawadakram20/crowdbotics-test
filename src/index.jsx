import React, { Component } from 'react';
import { render } from 'react-dom';
import Dropzone from 'react-dropzone'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      image: ''
    }
    this.onDrop = this.onDrop.bind(this)
  }

  onDrop(files) {
    let file = files[0]
    console.log(file)
    this.setState({image: file.preview})
  }
  render() {
    let self = this
    console.log(this.state)
    return (
       <div className="main">
           <h1>TEST</h1>
           <Dropzone onDrop={self.onDrop} multiple={false} accept="image/*">
             <canvas ref="canvas" ></canvas>
             <img src={self.state.image} />
           </Dropzone>
           {/*<img src={require("../images/home.png")} />*/}
       </div>
    );
  }
}

render(<Main />, document.getElementById('container'));
