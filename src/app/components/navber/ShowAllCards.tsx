import { Type } from '@/app/types/type'
import Image from 'next/image'
import Link from 'next/link'

const ShowAllCards = ({ cardData }: { cardData: Type }) => {
  return (
    <Link href={`/cardsDitails/${cardData.id}`}>
        <div className="w-full max-w-sm rounded-2xl bg-[#181B20] overflow-hidden shadow-xl border border-[#23272F]">
      {/* Card Image */}
      <div className="relative h-56 w-full bg-gray-800">
        <Image
          src={cardData.image}
          alt={cardData.name || 'Workout Card'}
          fill
          className="object-cover rounded-t-2xl"
        />
      </div>

      <div className="p-5 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {cardData.muscleGroups?.map((group, index) => (
            <span
              key={index}
              className="bg-[#CCFF00] text-black text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider"
            >
              {group}
            </span>
          ))}
        </div>

        <div>
          <h3 className="text-white text-xl font-bold tracking-wide uppercase">
            {cardData.name}
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            {cardData.equipment}
          </p>
        </div>

        <div className="border-t border-[#2A2E39]" />

        <div className="flex items-center justify-between text-gray-400 text-sm">
          <div className="flex items-center gap-1.5">
            <span>{cardData.duration} min</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>{cardData.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>{cardData.rating}</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default ShowAllCards