import React from "react";

const Qualifications: React.FC = () => (
    <section id="qualifications">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Le Mie Qualifiche</h1>

            <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-6">Certificazioni</h2>
                    <div className="space-y-6">
                        <div className="border-l-4 border-blue-500 pl-4">
                            <h3 className="text-xl font-medium text-gray-800">Educatore Cinofilo Professionale</h3>
                            <p className="text-gray-600">Scuola Cinofila Italiana - 2018</p>
                            <p className="mt-2 text-gray-700">Certificazione riconosciuta a livello nazionale dopo superamento esame teorico-pratico.</p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                            <h3 className="text-xl font-medium text-gray-800">Operatore di Mobility Dog</h3>
                            <p className="text-gray-600">FISC - 2019</p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                            <h3 className="text-xl font-medium text-gray-800">Istruttore Puppy Class</h3>
                            <p className="text-gray-600">APNEC - 2020</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-6">Seminari e Workshop</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">"Linguaggio Canino"</h3>
                            <p className="text-gray-600">Dott. Paolo Caldora - 2018</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">"Gestione delle Emozioni nel Cane"</h3>
                            <p className="text-gray-600">Dott.ssa Elena Garoni - 2019</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">"Agonismo e Preparazione Mentale"</h3>
                            <p className="text-gray-600">Marco Ferrini - 2020</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">"Primo Soccorso Cinofilo"</h3>
                            <p className="text-gray-600">Croce Rossa Italiana - 2021</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-6">Specializzazioni</h2>
                    <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Comunicazione Canina</span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Socializzazione</span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Problem Solving</span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Preparazione Atletica</span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Educazione di Base</span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Puppy Class</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Qualifications;