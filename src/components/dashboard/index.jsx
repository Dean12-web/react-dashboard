
import HeaderDesktop from "./header-desktop";
import HeaderMobile from "./header-mobile";
import MainContent from "./main-content";
import SidebarBox from "./sidebar";

export default function DashboardBox() {
    return (
        <div className="flex">
            <div className="bg-blue-500 h-screen w-64 hidden sm:block shadow-xl">
                <SidebarBox/>
            </div>
            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                <HeaderDesktop/>
                <HeaderMobile/>
                <MainContent/>
            </div>
        </div>
    );
}
