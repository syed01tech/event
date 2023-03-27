import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'

import './Home.css';

class Scanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    this.setState({
      result: data,
    })
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: '100%',
    }

    return(
        <div className="scanner_wrapper">
            <QrReader
                delay={this.state.delay}
                style={previewStyle}
                onError={this.handleError}
                onScan={this.handleScan}
                />
            {/* <p>{this.state.result}</p> */}
        </div>
    )
  }
}

export default Scanner;