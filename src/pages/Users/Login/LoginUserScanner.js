import { height, margin } from '@mui/system';
import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'

import axios from "../../../axios.js";
import TokenService from '../../../TokenService.js';
import {withRouter} from '../../../App/withRouter.js';

class Scanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }

    //this.qrReader = React.createRef();
    this.handleScan = this.handleScan.bind(this)
    //this.openImageDialog = this.openImageDialog.bind(this)
  }

  collectStampApi(data){
    const currentTime = Date.now();

    console.log(data);
  }

  handleScan(data){
    this.setState({
      result: data,
    })

    if(this.state.result != null){
      this.collectStampApi(this.state.result);
    }
  }

  handleError(err){
    console.error(err)
  }

  // openImageDialog() {
  //   // const ref = this.refs.qrReader1;

  //   // ref.openImageDialog()
    
  //   //this.qrReader.current.openImageDialog();
  //   console.log(this.qrReader);
  // }

  render(){
    const previewStyle = {
      height: '50vh',
    }

    return(
      <div className="login_user_qr_scanner_wrapper" onClick={event =>  {}}>
          <QrReader
              ref={this.qrReader}
              delay={this.state.delay}
              style={previewStyle}
              onError={this.handleError}
              onScan={this.handleScan}
              facingMode="rear"
              //legacyMode={true}
              />
          {/* <input type="button" value="Submit QR Code" onClick={this.openImageDialog} /> */}
          {/* <p>{this.state.result}</p> */}
      </div>
    )
  }
}

export default withRouter(Scanner);