import React from 'react'
import { WidgetItems } from './WidgetItems'

const data=[
    {
        id:1,
        section:'CSPM Executive dashboard',
        widgets:[
            {id:1,name:"something",text:"somethin text"},
            {id:2,name:"something",text:"somethin text"},
           
        ]
    },
    {
        id:2,
        section:'CWPP Dashboard',
        widgets:[
            {id:1,name:"something",text:"somethin text"},
            {id:2,name:"something",text:"somethin text"},
            
        ]
    },
    {
        id:3,
        section:'Registry scan',
        widgets:[
            {id:1,name:"something",text:"somethin text"},
            {id:2,name:"something",text:"somethin text"},
     
        ]
    },
]

export const Section = () => {
  return (
    <div className='mt-10 mx-10'>
        {data.map((sec)=>{
            return (
                <div key={sec.id} className='mt-5'>
                    <span>{sec.section}</span>
                    {sec?.widgets.map((item)=>{
                        return(
                            <div key={item.id}>
                             <WidgetItems name={item.name} text={item.text}/>
                            </div>
                        )
                    })}
                </div>
            )
        })}
    </div>
  )
}
