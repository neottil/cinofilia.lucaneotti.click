import React from "react";

type NavbarProps = {
  activeTab: string;  
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const tabs = [
    { id: "home", label: "Home" },
    { id: "curriculum", label: "Curriculum" },
    { id: "qualifications", label: "Qualifications" },
];

const Navbar: React.FC<NavbarProps> = ({
    activeTab,
    setActiveTab,
    mobileMenuOpen,
    setMobileMenuOpen
}) => {

    return (
        <>
        {/* Navigation */}
        <nav className="bg-white shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold text-blue-500">
                        <i className="fas fa-paw mr-2" /> Luca Neotti - Educatore Cinofilo
                    </div>
                    <div className="hidden md:flex space-x-8">
                        {tabs.map(tab => (
                        <a
                            key={tab.id}
                            href={`#${tab.id}`}
                            data-tab={tab.id}
                            className={`nav-link py-2 px-1 hover:text-blue-400 ${
                            activeTab === tab.id ? "active-tab" : ""
                            }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </a>
                        ))}
                    </div>
                    {/* Mobile menu */}
                    <button className="md:hidden focus:outline-none" id="mobile-menu-button">
                        <i 
                            className="fas fa-bars text-2xl text-blue-500" 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        />
                    </button>
                </div>
                {/* Mobile menu */}
                {mobileMenuOpen && (
                <div className="py-2" id="mobile-menu">
                    {tabs.map(tab => (
                    <a
                        key={tab.id}
                        href="#"
                        data-tab={tab.id}
                        className={`block py-2 px-4 nav-link hover:text-blue-400 ${
                        activeTab === tab.id ? "active-tab" : ""
                        }`}
                        onClick={() => {
                        setActiveTab(tab.id);
                        setMobileMenuOpen(false);
                        }}
                    >
                        {tab.label}
                    </a>
                    ))}
                </div>
                )}
            </div>
        </nav>
      </>
    )
};

export default Navbar;