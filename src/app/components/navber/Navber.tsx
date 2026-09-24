import Image from 'next/image'
import logo from '@/app/assets/logo.png'
import Link from 'next/link'

const Navber = () => {
    const links = <>
    <Link href={'/'}>Workouts</Link>
    </>
return (
    <header className="bg-[#0b0b0b] text-white py-4 border-b border-neutral-800">
        <nav className='max-w-[1100px] mx-auto flex items-center justify-between'>
            <div className="flex items-center space-x-3">
                <Image src={logo} alt='logo image'></Image>
                <span className="text-xl font-bold tracking-wider">FITLOG</span>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
                {links}
            </nav>

            <div className="flex items-center space-x-6 text-sm">

                <div className="flex items-center space-x-2">
                    <span className="text-gray-300">Plan</span>
                    <span className="bg-[#c6f432] text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">0</span>
                </div>

                <div className="flex items-center space-x-2">
                    <span className="text-gray-300">Saved</span>
                    <span className="bg-neutral-800 text-gray-300 border border-neutral-700 w-6 h-6 rounded-full flex items-center justify-center font-medium text-xs">0</span>
                </div>
            </div>
        </nav>

    </header>
)
}

export default Navber
