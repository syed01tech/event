// versi "react-qr-reader" 1.0.0. component API harus disesuaikan dengan yg baru

import { useState } from "react";
import {QrReader} from "react-qr-reader";

import { useNavigate } from 'react-router-dom';
import axios from "../../../axios.js";
import TokenService from '../../../TokenService.js';
import {withRouter} from '../../../App/withRouter.js';

const Scanner = () => {
  const [selected, setSelected] = useState("environment");
  const navigate = useNavigate();

  const collectStampApi = (data) => {
    const currentTime = Date.now();

    console.log(data);
    try
    {
       axios.post('', {
        "name":"scanQRCodeGenerateToken",
        "param": {
            "qr_code":data.text
        }
      })
      .then((response) => {
        //console.log(response);
        if(response.data.status == 200){
          //window.location.replace("/home/");
          if(response.data.user_role == 3){
              TokenService.setToken(response.data.token);
              TokenService.setRole(response.data.user_role);
              TokenService.setLoginTime(currentTime);
              console.log("Role:" + TokenService.getRole());
              console.log(currentTime);
              navigate("/admin/");
          } else if(response.data.user_role == 2) {
              TokenService.setToken(response.data.token);
              TokenService.setRole(response.data.user_role);
              TokenService.setLoginTime(currentTime);
              console.log("Role:" + TokenService.getRole());
              console.log(currentTime);
              navigate("/boothhelper/");
          } else if(response.data.user_role == 1) {
              TokenService.setToken(response.data.token);
              TokenService.setRole(response.data.user_role);
              TokenService.setLoginTime(currentTime);
              console.log("Role:" + TokenService.getRole());
              console.log(currentTime);
              navigate("/home");
          } else if(response.data.user_role == 0) {
              TokenService.setToken(response.data.token);
              TokenService.setRole(response.data.user_role);
              TokenService.setLoginTime(currentTime);
              console.log("Role:" + TokenService.getRole());
              console.log(currentTime);
              this.props.navigate("/home");
          } else if(response.data.user_role == 4){
              TokenService.setToken(response.data.token);
              TokenService.setRole(response.data.user_role);
              TokenService.setLoginTime(currentTime);
              console.log("Role:" + TokenService.getRole());
              console.log(currentTime);
              navigate("/giftredeemhelper/");
          } else{
              alert("User role not found")
          }
        }else{
          //alert((i18n.language == 'zh_hk')?"電話號碼或密碼輸入錯誤":"电话号码或密码输入错误");
          //alert(response.data.message);
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

  return (
    <div className="">
          <QrReader
            facingMode={selected}
            delay={1000}
            onResult={(result, error) => {
                if (!!result) {
                    collectStampApi(result);
                }

                if (!!error) {
                    //console.log(error);
                }
            }}
            // chooseDeviceId={()=>selected}
            style={{ width: "300px" }}
          />
    </div>
  );
};

export default withRouter(Scanner);
