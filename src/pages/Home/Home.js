import React, { Component } from 'react'

import './Home.css';

import Scanner from './Scanner';

export default function Home(){
  return(
    <div className="home-wrapper">
      {/* <p className='scanner_title'>QR Scanner</p> */}
      <Scanner/>
    </div>
  )
}