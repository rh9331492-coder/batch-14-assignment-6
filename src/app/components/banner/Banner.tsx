"use client"
import Image from 'next/image'
import Bng from '@/app/assets/banner.png'

const Banner = () => {
  return (
        <div className="w-full bg-[#121316] py-16 px-4 md:px-8 font-sans antialiased text-white flex items-center justify-center min-h-[500px]">

      <div className="max-w-[1100px] w-full mx-auto bg-[#17191d] border border-white/5 rounded-2xl shadow-2xl overflow-hidden relative flex flex-col lg:flex-row items-center justify-between p-8 md:p-14">
        
        <div className="max-w-xl z-10 flex flex-col items-start space-y-5">
          
          <div className="text-[#ccff00] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
            Workout Library
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-[1.05]">
            Train with intent. <br className="hidden sm:inline" />
            Log every set.
          </h1>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
          </p>

          <div className="pt-2">
            <button 
              onClick={() => alert('Browsing workouts...')}
              className="bg-[#ccff00] hover:bg-[#b3e600] active:scale-95 transition-all text-black font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-xl uppercase tracking-wider shadow-lg shadow-[#ccff00]/20 cursor-pointer flex items-center gap-2"
            >
              Browse Workouts
            </button>
          </div>

        </div>


        <div className="mt-10 lg:mt-0 relative flex items-center justify-center w-full lg:w-auto">

          <div className="absolute w-64 h-64 bg-[#ccff00]/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* High-quality anatomical 3D gym illustration graphic (Bicep preacher curl machine simulation) */}
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square flex items-center justify-center">
            <Image src={Bng} alt='banner image'></Image>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Banner
