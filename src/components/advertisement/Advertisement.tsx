import React, { useState, useEffect } from 'react';
import './Advertisement.css'; // Import CSS file for styling

interface Advertisement {
    id: string;
    type: string;
    date: string;
    image: string;
}

const Advertisement: React.FC = () => {
    const [advertisements, setAdvertisements] = useState<Advertisement[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchAdvertisements = async () => {
            try {
                const response = await fetch('https://newswebsite-fza6.onrender.com/api/v1/articles/advertisements');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAdvertisements(data);
            } catch (error) {
                console.error('Error fetching advertisements:', error);
            }
        };

        fetchAdvertisements();
    }, []);

    useEffect(() => {
        if (advertisements.length > 0) {
            // Auto-scroll posters every 5 seconds
            const interval = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % advertisements.length);
            }, 5000);

            // Clear interval on component unmount
            return () => clearInterval(interval);
        }
    }, [advertisements]);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="advertisement-container">
            <div
                className="advertisement-scroll"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {advertisements.map((ad) => (
                    <img
                        key={ad.id}
                        src={`data:image/jpeg;base64,${ad.image}`} // Assuming the image is stored as Base64
                        alt={ad.type}
                        className="advertisement-poster"
                    />
                ))}
            </div>
            {advertisements.length > 1 && (
                <div className="dots-container">
                    {advertisements.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Advertisement;
