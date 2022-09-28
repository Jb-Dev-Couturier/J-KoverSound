import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery } from '../redux/services/shazamCore';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { ActiveSong, isPlaying } = useSelector((state) => state.player);

  const { data: songData, isFetching: isFetechingSongDetails } =
    useGetSongDetailsQuery({songid})

  return (
  <div className='flex flex-col'>
    <DetailsHeader artistId={''} songData={songData}/>
    <div className="mb-10">
        <h2 className='text-lime-100 text-3xl font-bold'>Paroles :</h2>
        <div className="mt-5">
            {songData?.sections[1].type === 'LYRICS'?
            songData?.sections[1].text.map((line,i)=>(
                <p className="text-lime-200 text-base my-1">{line}</p>
            )):<p>Désolé pas de Paroles Trouvés</p>}
        </div>
    </div>
  </div>
  
  )
};

export default SongDetails;
