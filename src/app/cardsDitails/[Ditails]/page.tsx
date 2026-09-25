import AddToCard from '@/app/clientButton/AddToCard'
import SaveForLater from '@/app/clientButton/SaveForLater'
import { Type } from '@/app/types/type'
import Image from 'next/image'
interface getType {
    params: Promise<{
        Ditails: string
    }>
}
const getData = async () => {
    try {
        const response = await fetch('https://api.abcz.workers.dev/api/fitlog')
        return response.json()
    } catch (error) {
        alert('fetching data is fail')
    } finally {
        console.log('finish')
    }
}
const DetailsPage = async ({ params }: getType) => {
    const { Ditails } = await params
    // console.log(Ditails)
    const dataDetails = await getData()
    // console.log(dataDetails)
    const data = dataDetails.find((data: Type) => data.id === parseInt(Ditails)) as Type
    console.log(data)

    return (
        <div className="min-h-screen bg-[#0D0F12] text-white p-6 md:p-12 flex justify-center items-center">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                {/* Left Column: Big Image */}
                <div className="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden bg-gray-800 shadow-2xl">
                    <Image
                        src={data.image}
                        alt={data.name || 'Workout Details'}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Right Column: Details Content */}
                <div className="flex flex-col gap-6">

                    {/* Title & Description */}
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-wide uppercase">
                            {data.name}
                        </h1>
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                            {data.description}
                        </p>
                    </div>

                    {/* Muscle Groups Badges */}
                    <div className="flex flex-wrap gap-2">
                        {data.muscleGroups?.map((group, index) => (
                            <span
                                key={index}
                                className="bg-[#CCFF00] text-black text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    {/* Specs Table Card */}
                    <div className="bg-[#181B20] rounded-2xl border border-[#23272F] overflow-hidden">
                        <div className="grid divide-y divide-[#23272F] text-sm">
                            <div className="flex justify-between items-center px-5 py-4">
                                <span className="text-gray-400 font-medium uppercase tracking-wider text-xs">Equipment</span>
                                <span className="font-semibold text-gray-200">{data.equipment}</span>
                            </div>
                            <div className="flex justify-between items-center px-5 py-4">
                                <span className="text-gray-400 font-medium uppercase tracking-wider text-xs">Difficulty</span>
                                <span className="font-semibold text-gray-200">{data.difficulty}</span>
                            </div>
                            <div className="flex justify-between items-center px-5 py-4">
                                <span className="text-gray-400 font-medium uppercase tracking-wider text-xs">Sets</span>
                                <span className="font-semibold text-gray-200">{data.sets}</span>
                            </div>
                            <div className="flex justify-between items-center px-5 py-4">
                                <span className="text-gray-400 font-medium uppercase tracking-wider text-xs">Reps</span>
                                <span className="font-semibold text-gray-200">{data.reps}</span>
                            </div>
                            <div className="flex justify-between items-center px-5 py-4">
                                <span className="text-gray-400 font-medium uppercase tracking-wider text-xs">Duration</span>
                                <span className="font-semibold text-gray-200">{data.duration} min</span>
                            </div>
                            <div className="flex justify-between items-center px-5 py-4">
                                <span className="text-gray-400 font-medium uppercase tracking-wider text-xs">Calories</span>
                                <span className="font-semibold text-gray-200">{data.caloriesBurned} kcal</span>
                            </div>
                            <div className="flex justify-between items-center px-5 py-4">
                                <span className="text-gray-400 font-medium uppercase tracking-wider text-xs">Rating</span>
                                <span className="font-semibold text-gray-200">{data.rating}</span>
                            </div>
                        </div>
                    </div>

                    {/* Instructions Section */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-white font-extrabold tracking-wider uppercase text-sm">
                            Instructions
                        </h3>
                        <div className="text-gray-400 text-sm leading-relaxed whitespace-pre-line bg-[#181B20]/50 p-4 rounded-xl border border-[#23272F]">
                            {data.instructions}
                        </div>
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                        <AddToCard data={data}></AddToCard>

                        <SaveForLater data={data}></SaveForLater>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DetailsPage
