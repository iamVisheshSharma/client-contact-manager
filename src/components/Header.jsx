import React from 'react'

export default function Header() {
  return (
    <div className='ui menu' style={{border: "1px solid black", marginTop: "10px", padding: "4px"}}>
      <div className='ui container center' style={{display: "flex", justifyContent: "center"}}>
        <h1>Contact Manager</h1>
      </div>
    </div>
  )
}
