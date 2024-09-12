import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';

function HeaderMobile() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="w-full bg-blue-500 py-5 px-6 sm:hidden">
            <div className="flex items-center justify-between">
                <button className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</button>
                <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl focus:outline-none">
                    {!isOpen ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}
                </button>
            </div>
            <nav className={isOpen ? "flex flex-col pt-4" : "hidden flex flex-col pt-4"}>
                <button className="flex items-center active-nav-link text-white py-2 pl-4 nav-item">
                    <i className="fas fa-tachometer-alt mr-3"></i>
                    Dashboard
                </button>
                <button className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-sticky-note mr-3"></i>
                    Blank Page</button>
            </nav>
        </header>
    )
}

export default HeaderMobile