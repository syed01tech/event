import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'

import './Home.css';
import axios from "../../axios.js";

class Scanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }

  collectStampApi(data){
    try
    {
       axios.post('', {
        "name":"collectStampApi",
        "param": {
            "stamp_qr":data
        }
      })
      .then((response) => {
        console.log(response);
        if(response.data.status == 200){
          window.location.replace("");
        }else{
          //alert((i18n.language == 'zh_hk')?"電話號碼或密碼輸入錯誤":"电话号码或密码输入错误");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
    catch (error)
    {
      alert(error);
    }
  }

  handleScan(data){
    this.setState({
      result: data,
    })

    if(this.state.result != null){
      this.collectStampApi(data);
    }
  }

  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: '100%',
    }

    return(
        <div className="scanner_wrapper" onClick={event =>  window.location.href='/home/stamp'}>
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