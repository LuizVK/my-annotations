'use client'

import Link from 'next/link';
import Logo from "./logo";
import { usePathname } from 'next/navigation'
import { ChevronLeftIcon } from '@heroicons/react/24/outline';


export default function Header() {
    const pathname = usePathname()
    
    return (
        <div className="w-full h-20 px-8 flex flex-nowrap bg-gradient-to-tr from-purple-900 to-violet-950 to-100% text-white items-center justify-between">
            <div className='flex-1'>
                {pathname !== "/" &&
                    <Link href="/" className="p-2 w-min rounded-md flex flex-nowrap justify-start items-center hover:bg-white hover:bg-opacity-10">
                        <i><ChevronLeftIcon className='w-6' /></i>
                        <p className='font-light text-nowrap pr-2'>Go Home</p>
                    </Link>
                }
            </div>
            <div className='flex-1'>
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <div className='flex-1'></div>
        </div>
    )
}