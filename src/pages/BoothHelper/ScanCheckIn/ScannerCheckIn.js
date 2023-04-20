import { height, margin } from '@mui/system';
import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'

import axios from "../../../axios.js";
import TokenService from '../../../TokenService.js';
import {withRouter} from '../../../App/withRouter.js';

class ScannerCheckIn extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }

  collectStampApi(data){
    console.log(data);
    try
    {
      axios.get('get/', {
        params: {
          name: 'getBoothHelperBoothApi',
          headers: {
            'Authorization': 'Bearer ' + TokenService.getToken()
          },
        }
      })
      .then((response) => {          
          axios.post('', {
            "name":"userChceckinBoothApi",
            "headers": {
              'Authorization': 'Bearer ' + TokenService.getToken()
            },
            "param": {
              "booth_id": response.data.booth.booth_id,
              "user_id":data.text
            }
          })
          .then((response) => {
            console.log(response);
            if(response.data.status == 200){
              //window.location.replace("/home/");
              this.props.navigate("/boothhelper/scanresult", {state:{user_id: data.text}});
            }else{
              //alert((i18n.language == 'zh_hk')?"電話號碼或密碼輸入錯誤":"电话号码或密码输入错误");
            }
          })
          .catch((error) => {
            console.log(error);
          });
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
      this.collectStampApi(this.state.result);
    }
  }

  handleError(err){
    console.error(err)
  }

  render(){
    const previewStyle = {
      height: '50vh'
    }

    return(
      <div className="checkin_scanner_wrapper" onClick={event =>  {}}>
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

export default withRouter(ScannerCheckIn);