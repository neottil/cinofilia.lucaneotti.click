import { useEffect, useState } from "react";

function App() {

  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { id: "home", label: "Home" },
    { id: "curriculum", label: "Curriculum" },
    { id: "qualifications", label: "Qualifications" },
  ];

  return (
    <div className="bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-10">
          <div className="container mx-auto px-4">
              <div className="flex justify-between items-center py-4">
                  <div className="text-2xl font-bold text-blue-500">
                      <i className="fas fa-paw mr-2"></i> Luca Neotti
                  </div>
                  <div className="hidden md:flex space-x-8">
                    {tabs.map(tab => (
                      <a
                        key={tab.id}
                        href="#"
                        data-tab={tab.id}
                        className={`nav-link py-2 px-1 ${
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
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                      </i>
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
                    className={`block py-2 px-4 nav-link ${
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

    {/* Main Content */}
    <main className="container mx-auto px-4 py-8">
        {/* Home Section */}
        <section id="home" className="content-section active">
            <div className="flex flex-col items-center gap-8">
                <div className="w-full flex justify-center mb-8">
                    <img src="https://s3.eu-central-1.amazonaws.com/cinofilia.lucaneoti.click-website/img-io-tai-selfie.jpg" 
                         alt="Luca - Educatore Cinofilo" 
                         className="profile-image w-64 h-64 object-cover" />
                </div>
                <div className="md:w-2/3">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Educatore Cinofilo Professionale</h1>
                  <div className="prose max-w-none text-gray-700 space-y-4">
                      <p>Mi chiamo Luca, sono nato il 5 maggio del 1989 e abito in provincia di Cremona.</p>
                      <p>Nel 2016 comincio un percorso educativo con il cane della mia allora fidanzata. Grazie a questo percorso rimango affascinato dal mondo cinofilo, soprattutto per quanto riguarda la comunicazione col cane e tra cani. I cani possiedono una grande abilità comunicativa fatta di dettagli, di sguardi, di posture, di traiettorie, emozioni, odori.</p>
                      <p>"Vedere" e comprendere tutto questo mi ha da subito incuriosito parecchio. Mi dispiace non aver fatto prima questa scoperta; sicuramente non mi sarei perso un sacco di cose che non ho saputo cogliere per ignoranza in materia. Ricordo mio nonno che, quando il suo cane cercava con diverse strategie di farsi capire, diceva che gli mancava la parola: beh, io oggi dico che non gli manca, semplicemente parla una lingua diversa dalla nostra!</p>
                      <p>Dopo aver seguito diversi seminari su varie tematiche riguardanti la cinofilia, nel 2018 ho conseguito con successo l'esame da Educatore Cinofilo. Da quel momento il mio percorso di formazione cinofila non si è mai fermato: ho continuato a seguire seminari, webinar, corsi con grande passione. Mi sono formato in diversi settori, dalla comunicazione, agli stati d'animo, alla preparazione atletica...</p>
                      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 my-6">
                          <p className="mb-4">La mia mission principale oggi è cercare di trasmettere questa conoscenza e questa sensibilità a chi vive con un cane. Poter comprendere meglio il nostro cane ci permette di viverlo in maniera diversa e più sana, di rspettare le sue esigenze e di comprendere i sui bisogni.</p>
                          <p>Solo con la comprensione si potrà instaurare un buon rapporto basato sulla fiducia e sul rispetto e si potrà chiedere ed ottenere qualcosa in cambio al cane. Vivere con un cane significa essere responsabili della sua felicità, dal momento in cui lo scegliamo abbiamo il dovere di regalargli una vita felice.</p>
                      </blockquote>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Approccio Educativo</h2>
                      <div className="space-y-4 text-gray-700">
                          <p>Il mio metodo si basa sulla comprensione della comunicazione canina e sull'instaurazione di un rapporto di fiducia tra cane e proprietario. Utilizzo tecniche gentili e rispettose del benessere animale, adattando l'approccio alle esigenze specifiche di ogni binomio cane-proprietario.</p>
                          <p>Credo fermamente che l'educazione cinofila debba essere accessibile a tutti e che ogni cane meriti di essere compreso nella sua individualità. Per questo motivo offro percorsi personalizzati che tengono conto dello stile di vita, delle capacità e degli obiettivi di ogni famiglia.</p>
                      </div>
                  </div>
                </div>
            </div>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" className="content-section">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Il Mio Percorso Professionale</h1>
                <div id="curriculum-content" className="space-y-8"></div>
            </div>
        </section>

        {/* Qualifications Section */}
        <section id="qualifications" className="content-section">
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
    </main>
    {/* Footer */}
    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold flex items-center">
                        <i className="fas fa-paw mr-2"></i> Luca Neotti - Educatore Cinofilo
                    </h3>
                    <p className="text-gray-400 mt-1">Cremona, Parma</p>
                </div>
                <div className="flex space-x-6">
                    <a href="https://www.instagram.com/luca_staffy_tai/" target="_blank" className="text-gray-400 hover:text-white transition">
                        <i className="fab fa-instagram text-xl"></i>
                    </a>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
                <p>&copy; 2025 Luca Neotti - Tutti i diritti riservati</p>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
