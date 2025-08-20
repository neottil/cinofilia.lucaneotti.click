import React from "react";

const Footer: React.FC = () => (
    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold flex items-center">
                        <i className="fas fa-paw mr-2" /> Luca Neotti - Educatore Cinofilo
                    </h3>
                    <p className="text-gray-400 mt-1">Cremona, Parma</p>
                </div>
                <div className="flex space-x-6">
                    <a href="https://www.instagram.com/luca_staffy_tai/" target="_blank" className="text-gray-400 hover:text-white transition">
                        <i className="fab fa-instagram text-xl" />
                    </a>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
                <p>&copy; 2025 Luca Neotti - Tutti i diritti riservati</p>
            </div>
        </div>
    </footer>
);

export default Footer;