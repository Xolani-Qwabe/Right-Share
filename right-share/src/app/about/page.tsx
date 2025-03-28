'use client'
import React from 'react'
import { useRouter } from 'next/navigation' 

function About() {
  const router = useRouter();
  return (
    <div>
      <h1>About</h1>
      <button 
        onClick={() => router.push('/')}
        className='bg-blue-300 text-black text-center font-bold p-2 ml-2 rounded-md'>Go Home</button>
    </div>
  )
}

export default About
