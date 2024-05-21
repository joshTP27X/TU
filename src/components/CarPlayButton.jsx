import { Pause, Play } from './Player'



export function CardPlayButton ({ id }) {

    // const {
    //     currentMusic,
    //     isPlaying,
    //     setIsPlaying,
    //     setCurrentMusic
    // } = usePlayerStore(state => state)

    // const isPlayingPlaylist = isPlaying && currentMusic.playlist.id == id 
    
    // const handleClick = () => {
    //     if (isPlayingPlaylist){
    //         setIsPlaying(false)
    //         return
    //     }

    //     fetch(`/api/get-info-playlist.json?id=${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             const { songs, playlist } = data
    //             setIsPlaying(true)
    //             setCurrentMusic
    //         })
    // }
    //No funciona
    
    return(
        <div className="card-play-button rounded-full bg-green-500 p-4">
            <Play />
        </div>
    )
}