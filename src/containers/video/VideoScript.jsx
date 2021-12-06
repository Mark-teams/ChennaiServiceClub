import ReactPlayer from "react-player"
import "./videoScript.css"

const VideoScript =()=>{
    return (
        <div className='player-wrapper'>
            <ReactPlayer className="react-player" url="https://youtu.be/quBeKN_ROUY"
            width='100%'
            height='100%'
            controls={true}
            />

        </div>
    )
}

export default VideoScript;