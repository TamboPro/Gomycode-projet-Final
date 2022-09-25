import React from 'react'
import '../App.css';
import Header from './Header';
import Body from './Body';


export default function MainBoard() {
  return (   
    <div className="h-screen flex-1 py-6 px-4 bg-dark-grafana-bg">
        <Header />
        <Body />
    </div>   
  )
}
