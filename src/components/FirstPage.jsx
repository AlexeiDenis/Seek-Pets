import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function FirstPage() {
  let [text, setText]= useState("found")
  let location = useLocation();
useEffect(()=>{
 
    setText(location.pathname)
},[location])
  return (
    <>
     <p>{text} page</p>
     <div className="box"></div>
    </>
  )
}