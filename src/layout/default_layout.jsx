import { useState } from "react";
import HeaderDesktop from "../components/dashboard/header-desktop";
import HeaderMobile from "../components/dashboard/header-mobile";
import MainContent from "../components/dashboard/main-content";
import SidebarBox from "../components/dashboard/sidebar";
import FormContent from "../components/dashboard/form-content";

function DefaultLayout(){
    const [activePage, setActivePage] = useState('dashboard'); // State to track active page

    const handleNavClick = (page) => {
        setActivePage(page); // Update the active page
    };

    const renderMainContent = () => {
        switch (activePage) {
            case 'main':
                return <MainContent/>;
            case 'form':
                return <FormContent/>;
            default:
                return <MainContent/>;
        }
    };

    return (
        <div className="flex">
            <div className="bg-blue-500 h-screen w-64 hidden sm:block shadow-xl">
                <SidebarBox onNavClick={handleNavClick} /> {/* Pass handler to SidebarBox */}
            </div>
            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                <HeaderDesktop />
                <HeaderMobile />
                {renderMainContent()}
            </div>
        </div>
    );
}

export default DefaultLayout;