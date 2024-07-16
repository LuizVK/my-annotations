import { PlusIcon } from '@heroicons/react/24/outline';

export default function NewAnnotationButton() {
    return (
        <button
            className='w-12 h-12 rounded-full shadow-md hover:shadow-lg absolute right-4 top-4 flex items-center justify-center bg-gradient-to-tr from-fuchsia-900 from-0% via-purple-900 via-50% to-violet-950 to-100% hover:scale-[1.05] transition duration-150 ease-in-out'
        >
            <PlusIcon  className='w-6 text-white'/>
        </button>
    )
}