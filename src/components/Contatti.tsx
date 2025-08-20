const ContattiForm: React.FC = () => (
    <>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
            <h1 className="text-2xl font-bold text-center text-indigo-700 mb-6">Contattami</h1>

            <div className="space-y-6 mb-8">
                <div className="flex items-center">
                    <i className="fab fa-whatsapp text-2xl mx-4 text-blue-600" />
                    <span className="text-gray-700"><a href="https://wa.me/393485341851" className="hover:underline">348 534 1851</a></span>
                </div>

                <div className="flex items-center">
                    <i className="fas fa-envelope text-2xl mx-4 text-blue-600" />
                    <span className="text-gray-700"><a href="mailto:lucaneot@gmail.com" className="hover:underline">lucaneot@gmail.com</a></span>
                </div>

                <div className="flex items-center">
                    <i className="fab fa-instagram text-2xl mx-4 text-blue-600" />
                    <span className="text-gray-700"><a href="https://www.instagram.com/luca_staffy_tai/" className="hover:underline">@luca_staffy_tai</a></span>
                </div>
            </div>
        </div>
        <div className="mt-8">
            <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Zona di Operatività</h2>
            <div className="h-96 w-full bg-gray-200 rounded-lg overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d360994.88350757596!2d10.038747268472482!3d45.01939290507443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1755719569799!5m2!1sit!2sit"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy" />
            </div>
            <p className="text-center text-gray-600 mt-2">Opero principalmente nelle province di Cremona e Parma</p>
        </div>
    </>
);

export default ContattiForm;