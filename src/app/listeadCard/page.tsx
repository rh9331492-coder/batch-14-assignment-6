"use client";

import { useContext } from "react";
import { DataContext } from "../context/CardContext";

const ListeadCard = () => {
  const { addToCard } = useContext(DataContext);

  console.log(addToCard);

  return (
      <div className="min-h-screen bg-[#111318] text-white p-8 font-sans">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-black tracking-wider uppercase mb-1">
          My Plan
        </h1>

        <p className="text-gray-400 text-sm">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        {/* Exercises */}
        <div className="bg-[#181b22] border border-gray-800/60 rounded-xl p-5">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
            Exercises
          </p>

          <h2 className="text-4xl font-bold text-[#ccff00]">
            {addToCard.length}
          </h2>
        </div>

        {/* Minutes */}
        <div className="bg-[#181b22] border border-gray-800/60 rounded-xl p-5">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
            Minutes
          </p>

          <h2 className="text-4xl font-bold text-white">
            {addToCard.reduce(
              (total: number, item: any) =>
                total + Number(item.duration || 0),
              0
            )}
          </h2>
        </div>

        {/* Calories */}
        <div className="bg-[#181b22] border border-gray-800/60 rounded-xl p-5">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
            Calories
          </p>

          <h2 className="text-4xl font-bold text-white">
            {addToCard.reduce(
              (total: number, item: any) =>
                total + Number(item.caloriesBurned || 0),
              0
            )}
          </h2>
        </div>

      </div>

      {/* Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">

        <div className="flex items-center gap-2 bg-[#181b22] p-1 rounded-full border border-gray-800/60 text-xs">
          <button className="px-4 py-1.5 rounded-full bg-[#262a35] text-white font-medium shadow">
            Today&apos;s Plan
          </button>

          <button className="px-4 py-1.5 rounded-full text-gray-400 hover:text-white transition">
            Saved
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>Sort By</span>

          <button className="flex items-center gap-2 bg-[#181b22] border border-gray-800/60 px-3 py-1.5 rounded-lg text-white">
            Duration

            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

      </div>

      {/* Workout Cards */}
      {addToCard.length === 0 ? (

        // Empty
        <div className="border border-dashed border-gray-800 rounded-2xl p-16 text-center bg-[#14161c]">

          <h3 className="text-lg font-bold tracking-wide uppercase mb-1">
            Nothing Here Yet
          </h3>

          <p className="text-gray-400 text-sm mb-6">
            Browse the library and add a lift to get today moving.
          </p>

          <button className="bg-[#ccff00] hover:bg-[#b3e600] text-black text-sm font-semibold px-6 py-2.5 rounded-full transition">
            Go to workouts
          </button>

        </div>

      ) : (

        // Cards
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {addToCard.map((item: any) => (

            <div
              key={item.id}
              className="bg-[#181b22] border border-gray-800 rounded-2xl overflow-hidden"
            >

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-5">

                <h2 className="text-xl font-bold uppercase">
                  {item.name}
                </h2>

                <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                  {item.description}
                </p>

                {/* Details */}
                <div className="grid grid-cols-3 gap-2 mt-5">

                  <div className="bg-[#111318] rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-500">
                      Sets
                    </p>

                    <p className="font-bold">
                      {item.sets}
                    </p>
                  </div>

                  <div className="bg-[#111318] rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-500">
                      Reps
                    </p>

                    <p className="font-bold">
                      {item.reps}
                    </p>
                  </div>

                  <div className="bg-[#111318] rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-500">
                      Time
                    </p>

                    <p className="font-bold">
                      {item.duration}m
                    </p>
                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  )
};

export default ListeadCard;