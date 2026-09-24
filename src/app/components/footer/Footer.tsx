import Image from 'next/image'
import ftr from '@/app/assets/logo.png'

const Footer = () => {
    return (
        <footer className="w-full bg-[#121316] py-8 px-4 md:px-8 font-sans antialiased text-white border-t border-white/5">

            <div className="max-w-[1100px] w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">

                <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#ccff00]/10 flex items-center justify-center border border-[#ccff00]/20">
                        <Image src={ftr} alt='footer image'></Image>
                    </div>
                    <span className="font-black text-white text-lg tracking-wider">
                        FITLOG
                    </span>
                </div>

                <div className="text-gray-400 text-xs sm:text-sm tracking-wide">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </div>

            </div>
        </footer>
    )
}

export default Footer
