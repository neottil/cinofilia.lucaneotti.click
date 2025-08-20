import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Curriculum from "./components/Curriculum";
import Qualifiche from "./components/Qualifiche";
import Footer from "./components/Footer";
import ContattiForm from "./components/Contatti";

const App: React.FC = () => {

    const [activeTab, setActiveTab] = useState<string>("home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    return (
        <div className="bg-gray-50 font-sans">
            <Navbar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            <main className="container mx-auto px-4 py-8">
                {activeTab === "home" && <Home />}
                {activeTab === "curriculum" && <Curriculum />}
                {activeTab === "qualifications" && <Qualifiche />}
                {activeTab === "contact" && <ContattiForm />}
            </main>

            <Footer />
        </div>
    );
}

export default App;
