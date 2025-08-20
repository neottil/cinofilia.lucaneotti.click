import React from "react";

const Home: React.FC = () => (
    <section id="home">
        <div className="flex flex-col items-center gap-8">
            <div className="w-full flex justify-center mb-8">
                <img src="https://s3.eu-central-1.amazonaws.com/cinofilia.lucaneoti.click-website/img-io-tai-selfie.jpg"
                    alt="Luca - Educatore Cinofilo"
                    className="profile-image w-64 h-64 object-cover transform scale-[1.3] mt-8" />
            </div>
            <div className="md:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Educatore Cinofilo - Passione e Relazione</h1>
                <div className="prose max-w-none text-gray-700 space-y-4">
                    <p>Mi chiamo Luca, sono nato il 5 maggio del 1989 e abito in provincia di Cremona.</p>
                    <p>Il mio percorso nel mondo dei cani inizia nel 2016, quasi per caso, con il cane della mia allora fidanzata. Da subito resto affascinato da un aspetto che ancora oggi considero il cuore della cinofilia: la comunicazione. I cani parlano attraverso sguardi, posture, movimenti, emozioni, odori. È un linguaggio ricco di sfumature che spesso ci sfugge, ma che, una volta imparato a “vedere”, apre un mondo nuovo.</p>
                    <p>Ricordo mio nonno che, osservando il suo cane impegnato a farsi capire, diceva: “Gli manca solo la parola”. Oggi posso dire che non gli manca affatto: semplicemente, parla una lingua diversa dalla nostra.</p>
                    <p>Nel 2018, ho conseguito l'esame da Educatore Cinofilo. Da allora la mia formazione non si è mai fermata: continuo a studiare, a confrontarmi, a seguire corsi, seminari e webinar. Ho approfondito aree che spaziano dalla comunicazione agli stati emotivi, fino alla preparazione atletica, perché credo che solo con uno sguardo completo si possa davvero comprendere e accompagnare il cane nel suo percorso di vita con noi.</p>
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-500 my-6">
                        <p className="mb-4">Oggi il mio obiettivo è trasmettere a chi vive con un cane la sensibilità e le conoscenze che ho maturato nel tempo. Capire davvero il nostro compagno a quattro zampe significa imparare a rispettare le sue esigenze, riconoscere i suoi bisogni e costruire con lui una relazione più sana e autentica.</p>
                        <p>Solo attraverso la comprensione possiamo creare un legame fondato sulla fiducia e sul rispetto reciproco, un rapporto in cui diventa naturale chiedere e ottenere qualcosa in cambio. Perché condividere la vita con un cane non è solo una scelta: è una responsabilità. Dal momento in cui entra nella nostra famiglia, abbiamo il dovere - e il privilegio - di offrirgli una vita felice.</p>
                    </blockquote>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg shadow-xl mt-8">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">Un metodo basato sulla comprensione e sul rispetto</h2>
                    <div className="space-y-4 text-gray-700">
                        <p>Il mio approccio nasce dall'osservazione e dalla comprensione del linguaggio del cane, perché solo imparando a leggere i suoi segnali è possibile costruire un legame autentico e duraturo. Credo in un'educazione fondata sulla fiducia reciproca, sull'empatia e sull'uso di tecniche gentili, sempre nel pieno rispetto del benessere animale. Ogni cane è un individuo unico, con la sua storia, il suo carattere e le sue esigenze: per questo adatto ogni percorso alle specifiche caratteristiche del binomio cane-proprietario.</p>
                        <p><i className="fas fa-paw mr-2" />L'educazione cinofila, a mio avviso, deve essere un'opportunità aperta a tutti. Non si tratta solo di insegnare comandi, ma di imparare a vivere insieme in armonia, rispettando i bisogni del cane e valorizzando la relazione con la sua famiglia. Proprio per questo offro percorsi personalizzati, costruiti su misura per lo stile di vita, le capacità e gli obiettivi di ciascuna famiglia, così da rendere ogni cammino educativo unico e davvero significativo.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Home;