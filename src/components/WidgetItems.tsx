import React from 'react'

type Props={
    name:string;
    text:string
}

export const WidgetItems = ({name,text}:Props) => {
  return (
    <div>
        <span>{name}</span>
        <span>{text}</span>
    </div>
  )
}
