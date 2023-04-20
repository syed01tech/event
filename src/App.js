import './App.css';
import {BrowserRouter as Router, Route, Routes, useParams} from "react-router-dom";

import useToken from './App/useToken.js';
import useRole from './App/useRole.js';
import useLoggedInTime from './App/useLoggedInTime.js';
import TokenService from './TokenService.js';

import Sidebar from './components/Sidebar';
import MobileSidebar from './components/MobileSidebar';

import Landing from './pages/Users/Landing/Landing.js';
import Login from './pages/Login/Login';
import UserLogin from './pages/Users/Login/LoginUser.jsx';
import Register from './pages/Users/Register/Register.js';
import RegistrationComplete from './pages/Users/RegistrationComplete/RegistrationComplete.js';
import QRCode from './pages/Users/QRCode/QRCode.jsx';
import BoothMap from './pages/Users/BoothMap/BoothMap.jsx';
import CouponGet from './pages/Users/BoothMap/CouponGet.jsx';
import RedemptionList from './pages/Users/RedemptionList/RedemptionList.jsx';

import AdminLanding from './pages/Admin/Landing/AdminLanding.js';
import AdminDashboard from './pages/Admin/Dashboard/Dashboard.jsx';
import AdminBoothHelperInfo from './pages/Admin/BoothHelperInfo/BoothHelperInfo.jsx';
import AdminAddBoothHelper from './pages/Admin/BoothHelperInfo/AddBoothHelper.jsx';
import AdminEditBoothHelper from './pages/Admin/BoothHelperInfo/EditBoothHelper.jsx';
import AdminScan from './pages/Admin/Scan/Scan.jsx';
import AdminScanResult from './pages/Admin/ScanResult/ScanResult.jsx';
import AdminGiftRedeemInfo from './pages/Admin/GiftRedeemInfo/GiftRedeemInfo.jsx';
import AdminAddGiftRedeem from './pages/Admin/GiftRedeemInfo/AddGiftRedeemHelper.jsx';
import AdminEditGiftRedeem from './pages/Admin/GiftRedeemInfo/EditGiftRedeemHelper.jsx';
import AdminUserGroup from './pages/Admin/UserGroup/UserGroup.jsx';
import AdminAddUserGroup from './pages/Admin/UserGroup/AddUserGroup.jsx';
import AdminEditUserGroup from './pages/Admin/UserGroup/EditUserGroup.jsx';
import AdminUsersInfo from './pages/Admin/UsersInfo/UsersInfo.jsx';
import AdminAddUser from './pages/Admin/UsersInfo/AddUser.jsx';
import AdminEditUser from './pages/Admin/UsersInfo/EditUser.jsx';
import AdminApproveUser from './pages/Admin/UsersInfo/ApproveUser.jsx';

import BoothLanding from './pages/BoothHelper/BoothHelperLanding/BoothHelperLanding.js';
import BoothUserList from './pages/BoothHelper/UserList/UserList.jsx';
import BoothScan from './pages/BoothHelper/ScanCheckIn/ScanCheckIn.jsx';
import BoothScanResult from './pages/BoothHelper/ScanCheckIn/ScanResult/ScanResult.jsx';

import GiftLanding from './pages/GiftHelper/GiftHelperLanding/GiftHelperLanding.js';
import GiftScan from './pages/GiftHelper/ScanRedeem/ScanRedeem.jsx';
import GiftScanResult from './pages/GiftHelper/ScanRedeem/ScanResult/ScanResult.jsx';

import React from 'react';

function setToken(userToken){
  TokenService.setToken(userToken);
}
function getToken(){
  return TokenService.getToken();
}
function setRole(userRole){
  TokenService.setRole(userRole);
}
function getRole(){
  return TokenService.getRole();
}
function setTime(time){
  TokenService.setRole(time);
}
function getTime(){
  return TokenService.getRole();
}

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

const MobileComponent = () =>{
  const {token, setToken } = useToken();
  const {role, setRole } = useRole();
  const {time, setTime } = useLoggedInTime();
  const currentTime = Date.now();

    return (
      <Router basename={'/reactapp'}>
        <MobileSidebar>
          <Routes>
            <Route index element={<UserLogin/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/user/" element={<UserLogin />} />
              <Route path="/user/login" element={<UserLogin />} />
              <Route path="/register" element={<Register />} />
              <Route path="/register/complete" element={<RegistrationComplete />} />
              <Route path="/home" element={<QRCode/>} />
              <Route path="/home/qrcode" element={<QRCode/>} />
              <Route path="/home/map" element={<BoothMap/>} />
              <Route path="/home/map/couponget" element={<CouponGet/>} />
              <Route path="/home/redemption_list" element={<RedemptionList/>} />
              <Route path="/boothhelper/" element={<BoothUserList/>} />
              <Route path="/boothhelper/userlist" element={<BoothUserList/>} />
              <Route path="/boothhelper/scan" element={<BoothScan/>} />
              <Route path="/boothhelper/scanresult" element={<BoothScanResult/>} />
              <Route path="/admin" element={<AdminDashboard/>} />
              <Route path="/admin/dashboard" element={<AdminDashboard/>} />
              <Route path="/admin/boothhelper" element={<AdminBoothHelperInfo/>} />
              <Route path="/admin/boothhelper/add" element={<AdminAddBoothHelper/>} />
              <Route path="/admin/boothhelper/edit" element={<AdminEditBoothHelper/>} />
              <Route path="/admin/scan" element={<AdminScan/>} />
              <Route path="/admin/scanresult" element={<AdminScanResult/>} />
              <Route path="/admin/giftredeem" element={<AdminGiftRedeemInfo/>} />
              <Route path="/admin/giftredeem/add" element={<AdminAddGiftRedeem/>} />
              <Route path="/admin/giftredeem/edit" element={<AdminEditGiftRedeem/>} />
              <Route path="/admin/usergroup" element={<AdminUserGroup/>} />
              <Route path="/admin/usergroup/add" element={<AdminAddUserGroup/>} />
              <Route path="/admin/usergroup/edit" element={<AdminEditUserGroup/>} />
              <Route path="/admin/usersinfo" element={<AdminUsersInfo/>} />
              <Route path="/admin/usersinfo/add" element={<AdminAddUser/>} />
              <Route path="/admin/usersinfo/edit" element={<AdminEditUser/>} />
              <Route path="/admin/usersinfo/approveuser" element={<AdminApproveUser/>} />
              <Route path="/giftredeemhelper/" element={<GiftScan/>} />
              <Route path="/giftredeemhelper/scan" element={<GiftScan/>} />
              <Route path="/giftredeemhelper/scanresult" element={<GiftScanResult/>} />
              <Route path="/home" element={<QRCode/>} />
              <Route path="/home/qrcode" element={<QRCode/>} />
              <Route path="/home/map" element={<BoothMap/>} />
              <Route path="/home/map/couponget" element={<CouponGet/>} />
              <Route path="/home/redemption_list" element={<RedemptionList/>} />
          </Routes>
        </MobileSidebar>
      </Router>
    )
};

const DesktopComponent = () => {
  const {token, setToken } = useToken();
  const {role, setRole } = useRole();
  const {time, setTime } = useLoggedInTime();
  const currentTime = Date.now();

  return (
    <Router basename={'/reactapp'}>
      <Sidebar>
        <Routes>
          <Route index element={<UserLogin/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/user/" element={<UserLogin />} />
            <Route path="/user/login" element={<UserLogin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register/complete" element={<RegistrationComplete />} />
            <Route path="/home" element={<QRCode/>} />
            <Route path="/home/qrcode" element={<QRCode/>} />
            <Route path="/home/map" element={<BoothMap/>} />
            <Route path="/home/map/couponget" element={<CouponGet/>} />
            <Route path="/home/redemption_list" element={<RedemptionList/>} />
            <Route path="/boothhelper/" element={<BoothUserList/>} />
            <Route path="/boothhelper/userlist" element={<BoothUserList/>} />
            <Route path="/boothhelper/scan" element={<BoothScan/>} />
            <Route path="/boothhelper/scanresult" element={<BoothScanResult/>} />
            <Route path="/admin" element={<AdminDashboard/>} />
            <Route path="/admin/dashboard" element={<AdminDashboard/>} />
            <Route path="/admin/boothhelper" element={<AdminBoothHelperInfo/>} />
            <Route path="/admin/boothhelper/add" element={<AdminAddBoothHelper/>} />
            <Route path="/admin/boothhelper/edit" element={<AdminEditBoothHelper/>} />
            <Route path="/admin/scan" element={<AdminScan/>} />
            <Route path="/admin/scanresult" element={<AdminScanResult/>} />
            <Route path="/admin/giftredeem" element={<AdminGiftRedeemInfo/>} />
            <Route path="/admin/giftredeem/add" element={<AdminAddGiftRedeem/>} />
            <Route path="/admin/giftredeem/edit" element={<AdminEditGiftRedeem/>} />
            <Route path="/admin/usergroup" element={<AdminUserGroup/>} />
            <Route path="/admin/usergroup/add" element={<AdminAddUserGroup/>} />
            <Route path="/admin/usergroup/edit" element={<AdminEditUserGroup/>} />
            <Route path="/admin/usersinfo" element={<AdminUsersInfo/>} />
            <Route path="/admin/usersinfo/add" element={<AdminAddUser/>} />
            <Route path="/admin/usersinfo/edit" element={<AdminEditUser/>} />
            <Route path="/admin/usersinfo/approveuser" element={<AdminApproveUser/>} />
            <Route path="/giftredeemhelper/" element={<GiftScan/>} />
            <Route path="/giftredeemhelper/scan" element={<GiftScan/>} />
            <Route path="/giftredeemhelper/scanresult" element={<GiftScanResult/>} />
            <Route path="/home" element={<QRCode/>} />
            <Route path="/home/qrcode" element={<QRCode/>} />
            <Route path="/home/map" element={<BoothMap/>} />
            <Route path="/home/map/couponget" element={<CouponGet/>} />
            <Route path="/home/redemption_list" element={<RedemptionList/>} />
        </Routes>
      </Sidebar>
    </Router>
  )
};

const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 690;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function App() {
  return (
    <ViewportProvider>
      <MyComponent />
    </ViewportProvider>
  );
}