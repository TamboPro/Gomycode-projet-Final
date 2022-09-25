import React from 'react'

export default function MiniCard(props) {
  return (
    
        <div class={`w-[9.25rem] flex flex-wrap h-28 mr-0.5 ${props.color}`}>
            <div className='flex flex-col'>
                <p className={`p-6 text-center font-sans text-sm ${props.color === "bg-amber-600" ? "text-gray-700" : "text-gray-200"}`}>
                    {props.title}
                    <h2 className='text-2xl font-bold'>{props.parameter}</h2>
                </p>
            </div>
        </div>        
    
  )
}
