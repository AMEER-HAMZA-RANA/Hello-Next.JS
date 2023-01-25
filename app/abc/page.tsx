import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <div>index
      <br></br>
      <Link href='/' style={{color:'blue', textDecoration:'underline'}}>Home</Link>
    </div>
  )
}
