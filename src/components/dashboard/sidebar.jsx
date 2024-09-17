function SidebarBox({ onNavClick }) {
    return (
        <>
            <div className="p-6">
                <button className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</button>
            </div>
            <nav className="text-white text-base font-semibold pt-3">
                <button 
                    onClick={() => onNavClick('dashboard')} 
                    className="flex items-center active-nav-link text-white py-4 pl-5 nav-item"
                >
                    Dashboard
                </button>
                <button 
                    onClick={() => onNavClick('form')} 
                    className="flex items-center active-nav-link text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                >
                    Blank
                </button>
                <button 
                    onClick={() => onNavClick('table')} 
                    className="flex items-center active-nav-link text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                >
                    Tables
                </button>
            </nav>
        </>
    );
}

export default SidebarBox;
