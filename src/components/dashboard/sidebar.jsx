function SidebarBox() {
    return (
        <>
            <div className="p-6">
                <button className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</button>
            </div>
            <nav className="text-white text-base font-semibold pt-3">
                <button className="flex items-center active-nav-link text-white py-4 pl-5 nav-item">Dashboard</button>
                <button className="flex items-center active-nav-link text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">Blank</button>
                <button className="flex items-center active-nav-link text-white opacity-75 hover:opacity-100 py-4 pl-6">Tables</button>
            </nav>
        </>
    )
}

export default SidebarBox;