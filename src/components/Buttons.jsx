import React from 'react'

export default function Buttons(props) {
  return (
    <button className={`inline-flex items-center bg-transparent  text-sm font-medium text-gray-200 hover:bg-dark-grafana-button bg-dark-grafana  hover:text-white ${props.padding} border border-gray-200  border-opacity-10 hover:border-transparent ${props.radius}`}>
      {props.children} 
        {props.text} 
    <span class={props.color}> {props.utc} </span> 
        {props.icon}       
    </button>
  )
}
