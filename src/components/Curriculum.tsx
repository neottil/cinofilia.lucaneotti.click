import React, { useState, useEffect } from "react";
import data from "../data/cv.json";
import Modal from "./Modal";

interface CvItem {
    anno: number;
    mese: string;
    titolo: string;
    url?: string;
}
type GroupedByYear = Record<number, CvItem[]>

const Curriculum: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [groupedData, setGroupedData] = useState<GroupedByYear>([]);

    useEffect(() => {
        const groupedByYear = data.reduce<GroupedByYear>((acc, item) => {
            const year = item.anno

            if (!acc[year]) {
                acc[year] = []
            }

            acc[year].push(item)
            return acc
        }, {} as GroupedByYear);
        setGroupedData(groupedByYear);
    }, []);

    return (
        <section id="curriculum">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Il Mio Percorso Professionale</h1>
                <div className="space-y-8">
                    {Object
                        .keys(groupedData)
                        .map(year => Number(year))
                        .sort((a, b) => b - a)
                        .map(year => (
                            <div key={`year-div-${year}`} className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold text-blue-600 mb-4">{year}</h2>
                                <div className="space-y-4">
                                    {groupedData[year].map(item => (
                                        <div key={`${year}-${item.mese}-${item.titolo}`} className="border-l-4 border-blue-500 pl-4">
                                            <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-medium text-gray-800">{item.mese} - {item.titolo}</h3>
                                            {item.url && (
                                                <button
                                                    onClick={() => setSelectedImage(`/images${item.url}`)}
                                                    className="mt-2 text-blue-600 rounded hover:text-blue-400"
                                                >
                                                    <i className="fa-solid fa-eye mr-1" />
                                                </button>
                                            )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            {/* Modale */}
            <Modal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                imageUrl={selectedImage || undefined}
                alt="Attestato"
            />
        </section>
    )
};

export default Curriculum;