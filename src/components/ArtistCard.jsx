import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-3xl cursor-pointer"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img
        alt="song_img"
        src={track?.images?.coverart}
        className="w-full h-56 rounded-full"
      />
      <p className="mt-4 font-semibold text-lg text-lime-300 bg-black/40 p-2 truncate text-center rounded-3xl">
        {track?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;
