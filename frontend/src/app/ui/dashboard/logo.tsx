import { Arsenal } from "next/font/google";

const arsenal = Arsenal({
    weight: '700',
    subsets: ['latin']
});

export default function Logo() {
    return (
        <div className="flex flex-nowrap flex-row items-center justify-center">
            <div className="w-0.5 h-0.5 mr-2 rounded-full bg-white"></div>
            <div className="w-1 h-1 mr-2 rounded-full bg-white"></div>
            <div className="w-1.5 h-1.5 mr-2 rounded-full bg-white"></div>
            <h1 className={`${arsenal.className} text-2xl whitespace-nowrap`}>My Annotations</h1>
            <div className="w-1.5 h-1.5 ml-2 rounded-full bg-white"></div>
            <div className="w-1 h-1 ml-2 rounded-full bg-white"></div>
            <div className="w-0.5 h-0.5 ml-2 rounded-full bg-white"></div>
        </div>
    )
}