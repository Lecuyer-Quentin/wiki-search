'use client';

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearchTerm('')
        router.push(`/${searchTerm}`)
    }

  return (
    <form 
        onSubmit={handleSubmit} 
        className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <input 
            type="text" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Search" />
        <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Search
        </button>
    </form>

    
  )
}
