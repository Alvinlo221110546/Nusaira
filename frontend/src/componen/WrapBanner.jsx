import React, { useRef, useState, useEffect } from 'react';
import imgComputer from "../assets/img/landing_page_sudah_daftar/landingsub4.png";
import imgAi from "../assets/img/landing_page_sebelum_daftar/landingsb6.png";
import imgRead from "../assets/img/landing_page_sebelum_daftar/landingsb13.png";

const WrapBanner = () => {
    const scrollRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [autoScrollEnabled, setAutoScrollEnabled] = useState(true); 
    const cardWidth = 400; 

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoScrollEnabled && scrollRef.current) {
                scrollRef.current.scrollLeft += cardWidth; 
                if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
                    scrollRef.current.scrollLeft = 0;
                }
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [autoScrollEnabled]); 

    const handleMouseDown = (e) => {
        setIsMouseDown(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
        setAutoScrollEnabled(false); 
    };

    const handleMouseMove = (e) => {
        if (!isMouseDown) return;
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; 
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
        setAutoScrollEnabled(true);
    };

    return (
        <div
            className="overflow-x-auto cursor-grab scroll-smooth"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <div className="flex space-x-4 w-max">
                {/* Card 1 */}
                <div className="bg-blue-600 rounded-lg p-4 flex justify-between items-center min-w-[400px] shadow-lg border-2 border-grey-300 transition-all duration-300">
                    <div className="flex-1">
                        <h2 className="font-semibold text-white mb-2">Bingung Ingin Cek Kualitas Tambak Lele?</h2>
                        <p className="text-gray-300 mb-4">
                            Temukan Solusi Terbaik untuk Memantau dan Meningkatkan <br />
                            Kualitas Tambak Anda! Bergabunglah Bersama Kami<br />
                            dan Dapatkan Data Real-Time yang Akurat untuk<br />
                            Meningkatkan Hasil Panen Anda!
                        </p>
                        <button className="px-20 py-2 bg-blue-400 text-white rounded-md mt-5 hover:bg-blue-300 transition-colors duration-300">
                            Klik untuk info lebih lanjut
                        </button>
                    </div>
                    <div className="ml-4">
                        <img src={imgComputer} alt="Illustration" className="w-48 h-48 object-cover" />
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-blue-600 rounded-lg p-4 flex justify-between items-center min-w-[400px] shadow-lg border-2 border-grey-300 transition-all duration-300">
                    <div className="flex-1">
                        <h2 className="font-semibold text-white mb-2">Ingin Tambak Lele Lebih Berkualitas? Temukan<br /> Caranya di Sini</h2>
                        <p className="text-gray-300 mb-4">
                            Dapatkan Tips dan Panduan Terbaik untuk Meningkatkan <br />
                            Kualitas Tambak Lele Anda!
                        </p>
                        <button className="px-20 py-2 bg-blue-400 text-white rounded-md mt-5 hover:bg-blue-300 transition-colors duration-300">
                            Klik untuk info lebih lanjut
                        </button>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                        <img src={imgRead} alt="Illustration" className="w-48 h-48 object-cover" />
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-blue-600 rounded-lg p-4 flex justify-between items-center min-w-[400px] shadow-lg border-2 border-grey-300 transition-all duration-300">
                    <div className="flex-1">
                        <h2 className="font-semibold text-white mb-2">Butuh Bantuan? AI Chatbot Siap Pandu Anda<br /> Memastikan Kualitas Tambak Lele</h2>
                        <p className="text-gray-300 mb-4">
                            Dapatkan Solusi Cepat dan Tepat untuk Kualitas Tambak <br /> Lele Anda
                        </p>
                        <button className="px-20 py-2 bg-blue-400 text-white rounded-md mt-5 hover:bg-blue-300 transition-colors duration-300">
                            Klik untuk info lebih lanjut
                        </button>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                        <img src={imgAi} alt="Illustration" className="w-48 h-48 object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WrapBanner;