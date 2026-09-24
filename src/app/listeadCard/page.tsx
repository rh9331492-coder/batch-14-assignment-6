"use client"
import React, { useContext } from 'react'
import { cardDataContext } from '../context/CardContext'

const ListeadCard = () => {
  const { addToCard, setAddToCard, } = useContext(cardDataContext)
  console.log(addToCard, setAddToCard)
  return (
    <div className="min-h-screen bg-[#111318] text-white p-8 font-sans">

      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-black tracking-wider uppercase mb-1">My Plan</h1>
        <p className="text-gray-400 text-sm">Cap of five lifts for today. Finish them, then load more.</p>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        {/* Exercises Card */}
        <div className="bg-[#181b22] border border-gray-800/60 rounded-xl p-5">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Exercises</p>
          <h2 className="text-4xl font-bold text-[#ccff00]">2</h2>
        </div>

        {/* Minutes Card */}
        <div className="bg-[#181b22] border border-gray-800/60 rounded-xl p-5">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Minutes</p>
          <h2 className="text-4xl font-bold text-white">23</h2>
        </div>

        {/* Calories Card */}
        <div className="bg-[#181b22] border border-gray-800/60 rounded-xl p-5">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Calories</p>
          <h2 className="text-4xl font-bold text-white">190</h2>
        </div>

      </div>

      {/* Filter & Sort Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-2 bg-[#181b22] p-1 rounded-full border border-gray-800/60 text-xs">
          <button className="px-4 py-1.5 rounded-full text-gray-400 hover:text-white transition">Today&apos;s Plan</button>
          <button className="px-4 py-1.5 rounded-full bg-[#262a35] text-white font-medium shadow">Saved</button>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>Sort By</span>
          <button className="flex items-center gap-2 bg-[#181b22] border border-gray-800/60 px-3 py-1.5 rounded-lg text-white">
            Duration
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Empty State Box */}
      <div className="border border-dashed border-gray-800 rounded-2xl p-16 text-center bg-[#14161c]">
        <h3 className="text-lg font-bold tracking-wide uppercase mb-1">Nothing Here Yet</h3>
        <p className="text-gray-400 text-sm mb-6">Browse the library and add a lift to get today moving.</p>
        <button className="bg-[#ccff00] hover:bg-[#b3e600] text-black text-sm font-semibold px-6 py-2.5 rounded-full shadow-[0_0_15px_rgba(204,255,0,0.3)] transition">
          Go to workouts
        </button>
      </div>

    </div>
  )
}

export default ListeadCard
