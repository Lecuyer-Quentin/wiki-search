import React from 'react'

type Props = {}

export default function loading({}: Props) {
  return (
    <main className="container mx-auto p-12 flex flex-col justify-center items-center">
      <h1 className="text-4xl text-center">Loading...</h1> 
    </main>
  )
}