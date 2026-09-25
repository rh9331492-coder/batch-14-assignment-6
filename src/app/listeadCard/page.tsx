"use client";

import { useContext } from "react";
import { DataContext } from "../context/CardContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ListeadCard = () => {
  const { addToCard, setAddToCard } = useContext(DataContext);
  const pathName = usePathname();

  console.log(addToCard);

  return (
    <div className="min-h-screen bg-[#111318] text-white p-8 font-sans">

      <div className="mb-6">
        <h1 className="text-2xl font-black tracking-wider uppercase mb-1">
          My Plan
        </h1>

        <p className="text-gray-400 text-sm">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <div className="bg-[#181b22] border border-gray-800/60 rounded-xl p-5">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
            Exercises
          </p>

          <h2 className="text-4xl font-bold text-[#ccff00]">
            {addToCard.length}
          </h2>
        </div>

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

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">

        <div className="flex items-center gap-2 bg-[#181b22] p-1 rounded-full border border-gray-800/60 text-xs">

          <Link href="/listeadCard">
            <button
              className={`px-4 py-1.5 rounded-full transition ${pathName === "/listeadCard"
                  ? "bg-[#262a35] text-white font-medium shadow"
                  : "text-gray-400 hover:text-white"
                }`}
            >
              Today&apos;s Plan
            </button>
          </Link>

          <Link href="/saveForLater">
            <button
              className={`px-4 py-1.5 rounded-full transition ${pathName === "/saveForLater"
                  ? "bg-[#262a35] text-white font-medium shadow"
                  : "text-gray-400 hover:text-white"
                }`}
            >
              Saved
            </button>
          </Link>

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

      {addToCard.length === 0 ? (

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

        <div className="space-y-3">

          {addToCard.map((item: any) => (

            <div
              key={item.id}
              className="bg-[#181b22] border border-gray-800 rounded-2xl p-3 flex flex-col md:flex-row md:items-center gap-4"
            >

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full md:w-[110px] h-[100px] md:h-[62px] object-cover rounded-xl"
              />

              {/* Exercise Info */}
              <div className="flex-1 min-w-0">

                <h2 className="text-sm md:text-base font-bold uppercase truncate">
                  {item.name}
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  {item.category || item.description}
                </p>

                <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">

                  <span className="flex items-center gap-1">
                    <span className="text-[#ccff00]">◷</span>
                    {item.duration} min
                  </span>

                  <span className="flex items-center gap-1">
                    <span className="text-[#ccff00]">♨</span>
                    {item.caloriesBurned} kcal
                  </span>

                  <span className="flex items-center gap-1">
                    <span className="text-[#ccff00]">★</span>
                    {item.rating || "4.5"}
                  </span>

                </div>

              </div>

              {/* Buttons */}
              <div className="flex items-center gap-2">

                <Link href={'/[Ditails]'}>
                <button
                  className="border border-gray-700 hover:border-gray-500 
                  text-gray-300 text-xs px-4 py-2 rounded-full 
                  transition whitespace-nowrap"
                >
                  View Details
                </button>
                </Link>

                <button
                  className="bg-[#ccff00] hover:bg-[#b3e600] 
                  text-black text-xs font-bold 
                  px-4 py-2 rounded-full 
                  transition whitespace-nowrap"
                >
                  ✓ Mark as Done
                </button>

                {/* Close Button */}
                <button
                  onClick={() => {
                    setAddToCard(
                      addToCard.filter(
                        (card: any) => card.id !== item.id
                      )
                    );
                  }}
                  className="text-gray-500 hover:text-white 
                  text-lg px-2 transition"
                >
                  ×
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default ListeadCard;