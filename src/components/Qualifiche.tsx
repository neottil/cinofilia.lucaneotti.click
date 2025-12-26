import React, { useState } from "react";
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Modal from "./Modal";

interface ModalImagePrevierProps {
    imageUrl?: string;
    alt?: string;
    description?: string;
}

const ModalImagePrevier: React.FC<ModalImagePrevierProps> = ({ imageUrl, alt, description }) => (
    <>
        <img src={imageUrl}
            alt={alt}
            className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
            <h3 className="text-white text-xl font-semibold">{description}</h3>
        </div>
    </>
);

const Qualifications: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <section id="qualifications">
            {!isMobile &&
                <Modal
                    isOpen={!!selectedImage}
                    onClose={() => setSelectedImage(null)}
                    imageUrl={selectedImage || undefined}
                    alt="Qualifica"
                />}
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Le Mie Qualifiche</h1>

                <div className="mosaic-grid grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="image-container md:col-span-2 row-span-2 rounded-xl overflow-hidden shadow-lg bg-white relative"
                        onClick={() => setSelectedImage("/images/qualifiche/Diploma_FISC.jpg")}>
                        <ModalImagePrevier
                            imageUrl="/images/qualifiche/Diploma_FISC.jpg"
                            alt="Educatore Cinofilo terzo livell FISC"
                            description="Educatore Cinofilo terzo livello FISC"
                        />
                    </div>

                    <div className="image-container rounded-xl overflow-hidden shadow-lg bg-white relative"
                        onClick={() => setSelectedImage("/images/qualifiche/Educatore_cis.jpg")}>
                        <ModalImagePrevier
                            imageUrl="/images/qualifiche/Educatore_cis.jpg"
                            alt="Educatore Cinofilo CIS"
                            description="Educatore Cinofilo CIS"
                        />
                    </div>

                    <div className="image-container rounded-xl overflow-hidden shadow-lg bg-white relative"
                        onClick={() => setSelectedImage("/images/qualifiche/Diploma_FICSS.jpg")}>
                        <ModalImagePrevier
                            imageUrl="/images/qualifiche/Diploma_FICSS.jpg"
                            alt="Educatore Cinofilo FICSS"
                            description="Educatore Cinofilo FICSS"
                        />
                    </div>

                    <div className="image-container rounded-xl overflow-hidden shadow-lg bg-white relative"
                        onClick={() => setSelectedImage("/images/qualifiche/K9CTS.png")}>
                        <ModalImagePrevier imageUrl="/images/qualifiche/K9CTS.png"
                            alt="Istruttore K9 Cross Training Specialis"
                            description="Istruttore K9 Cross Training Specialis"
                        />
                    </div>

                    <div className="image-container rounded-xl overflow-hidden shadow-lg bg-white relative"
                        onClick={() => setSelectedImage("/images/qualifiche/mantrailing.png")}>
                        <ModalImagePrevier imageUrl="/images/qualifiche/mantrailing.png"
                            alt="Istruttore Mantrailing CIS"
                            description="Istruttore Mantrailing CIS"
                        />
                    </div>

                    <div className="image-container rounded-xl overflow-hidden shadow-lg bg-white relative"
                        onClick={() => setSelectedImage("/images/qualifiche/Giudice_mantrailing.jpg")}>
                        <ModalImagePrevier imageUrl="/images/qualifiche/Giudice_mantrailing.jpg"
                            alt="Giudice Mantrailing CIS"
                            description="Giudice Mantrailing CIS"
                        />
                    </div>

                    <div className="image-container rounded-xl overflow-hidden shadow-lg bg-white relative"
                        onClick={() => setSelectedImage("/images/qualifiche/tesserino_tecnico_FISC.jpg")}>
                        <ModalImagePrevier imageUrl="/images/qualifiche/tesserino_tecnico_FISC.jpg"
                            alt="Tesserino Tecnico FISC - 4107"
                            description="Tesserino Tecnico FISC - 4107"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                            <h3 className="text-white text-xl font-semibold">Tesserino Tecnico FISC</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Qualifications;