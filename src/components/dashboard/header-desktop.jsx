import { useState } from "react"

function HeaderDesktop() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
            <div className="w-5/6">
                <div className="flex items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-gray-300 focus-within:!ring-2 ring-inset focus-within:!ring-teal-500 rounded-md">
                    <svg className="mr-2 h-5 w-5 stroke-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                        </path>
                    </svg>
                    <input
                        className="block w-full appearance-none bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                        placeholder="Find anything..." aria-label="Search components"
                        id="search"
                    />
                </div>
            </div>
            <div className="relative w-1/6 flex justify-end">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                    <img src="" alt="header" />
                </button>
                {isOpen && (
                    <>
                        <button className="h-full w-full fixed inset-0 cursor-default"></button>
                        <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
                            <button className="block px-4 py-2" href="#">Account</button>
                        </div>
                    </>
                )}
            </div>
        </header>
    )
}

export default HeaderDesktop