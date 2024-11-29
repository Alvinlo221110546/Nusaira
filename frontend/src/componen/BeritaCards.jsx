import React, { useState } from 'react';
import { BeritaInputModal } from './BeritaInputModal';

export const BeritaCards = ({ beritaData, onAddBerita }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddBerita = (newBerita) => {
    onAddBerita(newBerita);
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      {!beritaData.length ? (
        <p className="text-center text-gray-500">Tidak ada berita yang tersedia.</p>
      ) : (
        <div className="space-y-4 p-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Tambah Blog Berita
          </button>

          {beritaData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded shadow flex flex-col md:flex-row items-start md:items-center p-4 gap-4"
            >
              <img
                src={item.image || 'https://via.placeholder.com/150'}
                alt={item.title || 'Gambar Berita'}
                className="w-78 h-[400px] object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black">
                  {item.title || 'Judul Tidak Tersedia'}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  <strong>Tanggal:</strong>{' '}
                  {item.date
                    ? new Date(item.date).toLocaleDateString()
                    : 'Tanggal Tidak Tersedia'}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Penulis:</strong> {item.writer || 'Tidak Diketahui'}
                </p>
                <p className="text-gray-700 mt-2">
                  {item.excerpt || 'Tidak ada kutipan.'}
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  {item.content ? item.content : 'Konten tidak tersedia.'}
                </p>
              </div>
            </div>
          ))}
        </div>

      )}
      <BeritaInputModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddBerita}
      />
    </div>
  );
};

export default BeritaCards;